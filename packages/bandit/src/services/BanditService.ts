import type { Template } from "@jstmemit/shared/models/Template";
import type { IBanditService } from "#/interfaces/IBanditService.ts";
import type { ITemplatesService } from "@jstmemit/meme-generator/interfaces/ITemplatesService";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { IBanditRepository } from "@jstmemit/db/interfaces/IBanditRepository";
import type { BanditStat } from "@jstmemit/shared/models/BanditStat";
import type { RatingKind } from "@jstmemit/shared/models/RatingKind";

export class BanditService implements IBanditService {
    private readonly _banditRepository: IBanditRepository;
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _templatesService: ITemplatesService;

    private readonly priorStrength: number = 4;
    private readonly likeWeight: number = 1;
    private readonly dislikeWeight: number = 1;
    private readonly regenerateWeight: number = 1;

    public constructor(
        banditRepository: IBanditRepository,
        templatesRepository: ITemplatesRepository,
        templatesService: ITemplatesService,
    ) {
        this._banditRepository = banditRepository;
        this._templatesRepository = templatesRepository;
        this._templatesService = templatesService;
    }

    public async selectTemplate(channelId: string, userId?: string): Promise<Template | undefined> {
        try {
            const templates: Template[] = this._templatesRepository.getAll();

            if (templates.length === 0) {
                return undefined;
            }

            const templateIds: number[] = templates.map((template: Template): number => template.id);

            const [global, channel, user] = await Promise.all([
                this._banditRepository.getStats("global", "*", templateIds),
                this._banditRepository.getStats("channel", channelId, templateIds),
                userId
                    ? this._banditRepository.getStats("user", userId, templateIds)
                    : Promise.resolve<BanditStat[]>([]),
            ]);

            const globalById: Map<number, BanditStat> = this._index(global);
            const channelById: Map<number, BanditStat> = this._index(channel);
            const userById: Map<number, BanditStat> = this._index(user);

            let bestTemplate: Template | undefined;
            let bestSample: number = -1;

            for (const template of templates) {
                const global: BanditStat = globalById.get(template.id) ?? this._zero(template.id);
                const channel: BanditStat = channelById.get(template.id) ?? this._zero(template.id);
                const user: BanditStat | undefined = userById.get(template.id);

                const globalMean: number = (1 + global.successes) / (2 + global.successes + global.failures);

                const k: number = this.priorStrength;

                const alpha: number = 1 + k * globalMean + channel.successes + (user?.successes ?? 0);
                const beta: number = 1 + k * (1 - globalMean) + channel.failures + (user?.failures ?? 0);

                const sample: number = this._sampleBeta(alpha, beta);

                if (sample > bestSample) {
                    bestSample = sample;
                    bestTemplate = template;
                }
            }

            return bestTemplate;
        } catch (error) {
            console.error(error);

            return this._templatesService.getRandomTemplate();
        }
    }

    public async recordRating(
        channelId: string,
        templateId: number,
        rating: RatingKind,
        userId?: string,
    ): Promise<void> {
        const success: number = rating === "like" ? this.likeWeight : 0;
        const failure: number = rating === "dislike" ? this.dislikeWeight : 0;

        await this._writeAllScopes(channelId, templateId, success, failure, userId);
    }

    public async recordRegenerate(channelId: string, templateId: number, userId?: string): Promise<void> {
        if (this.regenerateWeight <= 0) {
            return;
        }

        await this._writeAllScopes(channelId, templateId, this.regenerateWeight, 0, userId);
    }

    private async _writeAllScopes(
        channelId: string,
        templateId: number,
        deltaSuccess: number,
        deltaFailure: number,
        userId?: string,
    ): Promise<void> {
        try {
            const writes: Promise<boolean>[] = [
                this._banditRepository.addReward("global", "*", templateId, deltaSuccess, deltaFailure),
                this._banditRepository.addReward("channel", channelId, templateId, deltaSuccess, deltaFailure),
            ];

            if (userId) {
                writes.push(this._banditRepository.addReward("user", userId, templateId, deltaSuccess, deltaFailure));
            }

            await Promise.all(writes);
        } catch (error) {
            console.error(error);
        }
    }

    private _index(stats: BanditStat[]): Map<number, BanditStat> {
        return new Map(stats.map((stat: BanditStat): [number, BanditStat] => [stat.templateId, stat]));
    }

    private _zero(templateId: number): BanditStat {
        return { templateId: templateId, successes: 0, failures: 0 };
    }

    private _sampleBeta(alpha: number, beta: number): number {
        const x: number = this._sampleGamma(alpha);
        const y: number = this._sampleGamma(beta);

        return x / (x + y);
    }

    private _sampleGamma(shape: number): number {
        const d: number = shape - 1 / 3;
        const c: number = 1 / Math.sqrt(9 * d);

        for (;;) {
            let x: number;
            let v: number;

            do {
                x = this._sampleNormal();
                v = 1 + c * x;
            } while (v <= 0);

            v = v * v * v;

            const u: number = Math.random();

            if (u < 1 - 0.0331 * x * x * x * x) {
                return d * v;
            }

            if (Math.log(u) < 0.5 * x * x + d * (1 - v + Math.log(v))) {
                return d * v;
            }
        }
    }

    private _sampleNormal(): number {
        let u: number = 0;
        let v: number = 0;

        while (u === 0) {
            u = Math.random();
        }

        while (v === 0) {
            v = Math.random();
        }

        return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    }
}
