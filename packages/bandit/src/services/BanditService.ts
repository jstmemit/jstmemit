import type { Template } from "@jstmemit/shared/models/Template";
import type { IBanditService } from "#/interfaces/IBanditService.ts";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { IBanditRepository } from "@jstmemit/db/interfaces/IBanditRepository";
import type { BanditStat } from "@jstmemit/shared/models/BanditStat";
import type { RatingKind } from "@jstmemit/shared/models/RatingKind";

export class BanditService implements IBanditService {
    private readonly _banditRepository: IBanditRepository;
    private readonly _templatesRepository: ITemplatesRepository;

    private readonly priorStrength: number = 4;
    private readonly likeWeight: number = 1;
    private readonly dislikeWeight: number = 1;

    public constructor(banditRepository: IBanditRepository, templatesRepository: ITemplatesRepository) {
        this._banditRepository = banditRepository;
        this._templatesRepository = templatesRepository;
    }

    public async selectTemplate(channelId: string, userId?: string): Promise<Template | undefined> {
        try {
            const templates: Template[] = this._templatesRepository.getAll();

            if (templates.length === 0) {
                return undefined;
            }

            const templateNames: string[] = templates.map((template: Template): string => template.name);

            const [global, channel, user] = await Promise.all([
                this._banditRepository.getStats("global", "*", templateNames),
                this._banditRepository.getStats("channel", channelId, templateNames),
                userId
                    ? this._banditRepository.getStats("user", userId, templateNames)
                    : Promise.resolve<BanditStat[]>([]),
            ]);

            const globalByName: Map<string, BanditStat> = this._index(global);
            const channelByName: Map<string, BanditStat> = this._index(channel);
            const userByName: Map<string, BanditStat> = this._index(user);

            let bestTemplate: Template | undefined;
            let bestSample: number = -1;

            for (const template of templates) {
                const global: BanditStat = globalByName.get(template.name) || this._zero(template.name);
                const channel: BanditStat = channelByName.get(template.name) || this._zero(template.name);
                const user: BanditStat = userByName.get(template.name) || this._zero(template.name);

                // how popular the template is overall
                const globalMean: number = (1 + global.successes) / (2 + global.successes + global.failures);

                // alpha value for positive activity, beta for negative
                const alpha: number = 1 + this.priorStrength * globalMean + channel.successes + user.successes;
                const beta: number = 1 + this.priorStrength * (1 - globalMean) + channel.failures + user.failures;

                const sample: number = this._sampleBeta(alpha, beta);

                if (sample > bestSample) {
                    bestSample = sample;
                    bestTemplate = template;
                }
            }

            return bestTemplate;
        } catch (error) {
            console.error(error);

            const templates: Template[] = this._templatesRepository.getAll();
            return templates[0];
        }
    }

    public async recordRating(
        channelId: string,
        templateName: string,
        rating: RatingKind,
        userId?: string,
    ): Promise<void> {
        const success: number = rating === "like" ? this.likeWeight : 0;
        const failure: number = rating === "dislike" ? this.dislikeWeight : 0;

        await this._writeAllScopes(channelId, templateName, success, failure, userId);
    }

    private async _writeAllScopes(
        channelId: string,
        templateName: string,
        deltaSuccess: number,
        deltaFailure: number,
        userId?: string,
    ): Promise<void> {
        try {
            // always adds activity to global and channel scope
            const writes: Promise<boolean>[] = [
                this._banditRepository.addReward("global", "*", templateName, deltaSuccess, deltaFailure),
                this._banditRepository.addReward("channel", channelId, templateName, deltaSuccess, deltaFailure),
            ];

            // if userId is provided then also adds it for the user
            if (userId) {
                writes.push(this._banditRepository.addReward("user", userId, templateName, deltaSuccess, deltaFailure));
            }

            await Promise.all(writes);
        } catch (error) {
            console.error(error);
        }
    }

    private _index(stats: BanditStat[]): Map<string, BanditStat> {
        return new Map(stats.map((stat: BanditStat): [string, BanditStat] => [stat.templateName, stat]));
    }

    private _zero(templateName: string): BanditStat {
        return { templateName: templateName, successes: 0, failures: 0 };
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
