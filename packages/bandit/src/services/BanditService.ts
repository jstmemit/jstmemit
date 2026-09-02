import type { Template } from "@jstmemit/shared/models/Template";
import type { IBanditService } from "#/interfaces/IBanditService.ts";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { IBanditRepository } from "@jstmemit/db/interfaces/IBanditRepository";
import type { BanditStat } from "@jstmemit/shared/models/BanditStat";
import type { RatingKind } from "@jstmemit/shared/models/RatingKind";
import type { ScopedStats } from "@jstmemit/shared/models/ScopedStats";
import type { TemplateMapStringKey } from "@jstmemit/shared/models/TemplateMapKey";
import { type Logger, logs } from "@opentelemetry/api-logs";
import { analytics } from "@jstmemit/analytics";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import ms from "ms";
import type { PosteriorSource } from "@jstmemit/shared/models/PosteriorSource";

export class BanditService implements IBanditService {
    private readonly _banditRepository: IBanditRepository;
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _cacheService: ICacheService;
    private readonly _logger: Logger = logs.getLogger("jstmemit/bandit");

    private readonly priorStrength: number = 4;
    private readonly likeWeight: number = 1;
    private readonly dislikeWeight: number = 1;
    private readonly channelWeight: number = 0.35;

    public constructor(
        banditRepository: IBanditRepository,
        templatesRepository: ITemplatesRepository,
        cacheService: ICacheService,
    ) {
        this._banditRepository = banditRepository;
        this._templatesRepository = templatesRepository;
        this._cacheService = cacheService;
    }

    public async selectTemplate(channelId: string, userId?: string): Promise<Template | undefined> {
        try {
            const templates: Template[] = this._templatesRepository.getAll();

            if (templates.length === 0) {
                this._logger.emit({
                    severityText: "error",
                    body: "bandit.select_template.no_templates_found",
                    attributes: {
                        posthogDistinctId: userId,
                        channel_id: channelId,
                    },
                });

                return undefined;
            }
            const templateNames: string[] = templates.map((template: Template): string => template.name);

            const [globalTemplate, channelTemplate, userTemplate] = await Promise.all([
                this._cacheService.getOrSet(
                    `bandit:global`,
                    () => this._banditRepository.getStats("global", "*", templateNames),
                    ms("30s"),
                ),
                this._cacheService.getOrSet(
                    `bandit:channel:${channelId}`,
                    () => this._banditRepository.getStats("channel", channelId, templateNames),
                    ms("30s"),
                ),
                userId
                    ? this._cacheService.getOrSet(
                          `bandit:user:${userId}`,
                          () => this._banditRepository.getStats("user", userId, templateNames),
                          ms("30s"),
                      )
                    : Promise.resolve<BanditStat[]>([]),
            ]);

            const templateStats: ScopedStats<BanditStat> = {
                global: this._index(globalTemplate),
                channel: this._index(channelTemplate),
                user: this._index(userTemplate),
            };

            const { grouped: topicGrouped, best: topicBest } = this._selectBestGroup(
                templates,
                "topics",
                templateStats,
            );

            if (topicBest === undefined) {
                return undefined;
            }

            const topicTemplates: Template[] = topicGrouped.get(topicBest.name) ?? [];

            const { grouped: typeGrouped, best: typeBest } = this._selectBestGroup(
                topicTemplates,
                "types",
                templateStats,
            );

            if (typeBest === undefined) {
                return undefined;
            }

            const candidates: Template[] = typeGrouped.get(typeBest.name) ?? [];

            const best = this._selectBest(
                candidates.map((template: Template): string => template.name),
                (name: string): number => this._sampleForName(name, templateStats),
            );

            const candidate = candidates.find((template: Template): boolean => template.name === best?.name);

            if (!best || !candidate) {
                return undefined;
            }

            const { alpha, beta } = this._posterior(candidate.name, templateStats);

            return {
                ...candidate,
                selectedTopic: topicBest.name,
                selectedType: typeBest.name,
                banditScore: best.score,
                banditPosteriorMean: alpha / (alpha + beta),
                banditCandidateCount: candidates.length,
                banditPosteriorSource: this._sourceForName(candidate.name, templateStats),
            };
        } catch (error) {
            analytics.captureException(error);

            const templates: Template[] = this._templatesRepository.getAll();

            this._logger.emit({
                severityText: "error",
                body: "bandit.select_template.failed",
                attributes: {
                    posthogDistinctId: userId,
                    channel_id: channelId,
                    fallback_template: templates[0]?.name,
                },
            });

            if (!templates[0]) {
                return undefined;
            }

            return {
                ...templates[0],
                banditCandidateCount: templates.length,
                banditPosteriorSource: "fallback",
            };
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
            analytics.captureException(error);

            this._logger.emit({
                severityText: "error",
                body: "bandit.write_all_scopes.failed",
                attributes: {
                    posthogDistinctId: userId,
                    channel_id: channelId,
                    template_name: templateName,
                    delta_success: deltaSuccess,
                    delta_failure: deltaFailure,
                },
            });
        }
    }

    private _aggregateStats<K extends string, T>(
        groupedByKey: Map<K, T[]>,
        statsByName: Map<string, BanditStat>,
        getName: (item: T) => string,
        zero: (name: string) => BanditStat,
    ): Map<K, BanditStat> {
        const map: Map<K, BanditStat> = new Map();

        for (const [key, items] of groupedByKey) {
            let successes: number = 0;
            let failures: number = 0;

            for (const item of items) {
                const name: string = getName(item);
                const stat: BanditStat = statsByName.get(name) || zero(name);

                successes += stat.successes;
                failures += stat.failures;
            }

            const count: number = items.length || 1;

            map.set(key, {
                name: String(key),
                successes: successes / count,
                failures: failures / count,
            });
        }

        return map;
    }

    private _selectBestGroup<K extends keyof Template>(
        templates: Template[],
        fieldName: K,
        templateStats: ScopedStats<BanditStat>,
    ): {
        grouped: Map<TemplateMapStringKey<Template, K>, Template[]>;
        best: { name: TemplateMapStringKey<Template, K>; score: number } | undefined;
    } {
        type Key = TemplateMapStringKey<Template, K>;

        const grouped: Map<Key, Template[]> = this._templatesRepository.getAllByFieldMap(templates, fieldName) as Map<
            Key,
            Template[]
        >;
        const keys: Key[] = [...grouped.keys()];

        const stats: ScopedStats<BanditStat, Key> = {
            global: this._aggregateStats(
                grouped,
                templateStats.global,
                (t: Template) => t.name,
                (name: string) => this._zero(name),
            ),
            channel: this._aggregateStats(
                grouped,
                templateStats.channel,
                (t: Template) => t.name,
                (name: string) => this._zero(name),
            ),
            user: this._aggregateStats(
                grouped,
                templateStats.user,
                (t: Template) => t.name,
                (name: string) => this._zero(name),
            ),
        };

        const best = this._selectBest(keys, (name: Key): number => this._sampleForName(name, stats));

        return { grouped, best };
    }

    private _selectBest<T extends string>(
        names: T[],
        sample: (name: T) => number,
    ): { name: T; score: number } | undefined {
        let best: { name: T; score: number } | undefined;

        for (const name of names) {
            const value: number = sample(name);

            if (best === undefined || value > best.score) {
                best = { name: name, score: value };
            }
        }

        return best;
    }

    private _posterior<K extends string>(name: K, stats: ScopedStats<BanditStat, K>): { alpha: number; beta: number } {
        const global: BanditStat = stats.global.get(name) || this._zero(name);
        const channel: BanditStat = stats.channel.get(name) || this._zero(name);
        const user: BanditStat = stats.user.get(name) || this._zero(name);

        // how popular this node is overall
        const globalMean: number = (1 + global.successes) / (2 + global.successes + global.failures);

        // alpha value for positive activity, beta for negative
        return {
            alpha: 1 + this.priorStrength * globalMean + channel.successes * this.channelWeight + user.successes,
            beta: 1 + this.priorStrength * (1 - globalMean) + channel.failures * this.channelWeight + user.failures,
        };
    }

    private _sampleForName<K extends string>(name: K, stats: ScopedStats<BanditStat, K>): number {
        const { alpha, beta } = this._posterior(name, stats);

        return this._sampleBeta(alpha, beta);
    }

    private _sourceForName<K extends string>(name: K, stats: ScopedStats<BanditStat, K>): PosteriorSource {
        if (this._hasObservations(stats.user.get(name))) return "user";
        if (this._hasObservations(stats.channel.get(name))) return "channel";
        if (this._hasObservations(stats.global.get(name))) return "global";

        return "prior";
    }

    private _hasObservations(stat: BanditStat | undefined): boolean {
        return stat !== undefined && stat.successes + stat.failures > 0;
    }

    private _index(stats: BanditStat[]): Map<string, BanditStat> {
        return new Map(stats.map((stat: BanditStat): [string, BanditStat] => [stat.name, stat]));
    }

    private _zero(name: string): BanditStat {
        return { name: name, successes: 0, failures: 0 };
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
