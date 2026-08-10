import type { IMilestonesService } from "#/interfaces/IMilestonesService.ts";
import {
    type ActionRowBuilder,
    type ButtonBuilder,
    type ButtonInteraction,
    type ChatInputCommandInteraction,
    type ContainerBuilder,
    Locale,
    Message,
    MessageFlags,
} from "discord.js";
import type { IGenerationsRepository } from "@jstmemit/db/interfaces/IGenerationsRepository";
import type { channelsTable } from "@jstmemit/db/schema.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import type { IRatingsRepository } from "@jstmemit/db/interfaces/IRatingsRepository";
import type { INarrationsRepository } from "@jstmemit/db/interfaces/INarrationsRepository";
import ms from "ms";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import { analytics } from "@jstmemit/analytics";
import { logger } from "#/container.ts";
import type { Achievement } from "@jstmemit/shared/models/Achievement";
import { achievementsList } from "#/data/achievementsList.ts";
import type { StatsPerChannel } from "@jstmemit/shared/models/StatsPerChannel";

export class MilestonesService implements IMilestonesService {
    private readonly _generationsRepository: IGenerationsRepository;
    private readonly _componentsService: IComponentsService;
    private readonly _ratingsRepository: IRatingsRepository;
    private readonly _narrationsRepository: INarrationsRepository;
    private readonly _cacheService: ICacheService;

    public constructor(
        generationsRepository: IGenerationsRepository,
        componentsService: IComponentsService,
        ratingsRepository: IRatingsRepository,
        narrationsRepository: INarrationsRepository,
        cacheService: ICacheService,
    ) {
        this._generationsRepository = generationsRepository;
        this._componentsService = componentsService;
        this._ratingsRepository = ratingsRepository;
        this._narrationsRepository = narrationsRepository;
        this._cacheService = cacheService;
    }

    /**
     Returns back likes, dislikes, templates, voices in channel
     *
     * @param channelId
     *
     * @author Oleksii Sych
     */
    private async getStatsPerChannel(channelId: string): Promise<StatsPerChannel> {
        const { likes, dislikes } = await this._ratingsRepository.getLikeDislikeChannelCount(channelId);
        const templates: number = await this._generationsRepository.getTemplateCountPerChannel(channelId);
        const voices: number = await this._narrationsRepository.getVoiceCountPerChannel(channelId);

        return { likes, dislikes, templates, voices };
    }

    public async checkAndReplyWithMilestone(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
        channel: typeof channelsTable.$inferSelect,
    ): Promise<void> {
        try {
            if (!channel.milestones) {
                return;
            }

            const cached: number | undefined = await this._cacheService.get(`generations:${interaction.channelId}`);
            const count: number =
                cached !== undefined
                    ? cached + 1
                    : await this._generationsRepository.getCountPerChannel(interaction.channelId);

            await this._cacheService.set(`generations:${interaction.channelId}`, count, ms("7d"));

            const lastFired: number = (await this._cacheService.get(`milestone:${interaction.channelId}`)) ?? 0;
            const milestone: number = this._highestMilestoneAtOrBelow(count);

            if (milestone === 0 || milestone <= lastFired) {
                return;
            }

            if (!this._isMilestoneCount(count)) {
                return;
            }

            await this._cacheService.set(`milestone:${interaction.channelId}`, milestone, ms("90d"));
            const locale: Locale = this._getLocale(interaction);

            const { likes, dislikes, templates, voices } = await this.getStatsPerChannel(interaction.channelId);
            const achievement: Achievement | undefined = achievementsList.find(
                (achievement: Achievement): boolean => achievement.requiredCount === count,
            );

            const components: (ActionRowBuilder<ButtonBuilder> | ContainerBuilder)[] = [
                this._componentsService.getMilestoneMessageComponent(locale, count, interaction.channelId, achievement),
                this._componentsService.getMilestoneButtonsComponent(locale, likes, dislikes, templates, voices),
            ];

            if (interaction instanceof Message) {
                if (interaction.channel.isSendable()) {
                    await interaction.channel.send({
                        flags: MessageFlags.IsComponentsV2,
                        components,
                    });
                }
            } else {
                await interaction.followUp({
                    flags: MessageFlags.IsComponentsV2,
                    components,
                });
            }

            analytics.capture({
                event: "milestone_reached",
                distinctId: interaction instanceof Message ? interaction.author.id : interaction.user.id,
                properties: {
                    channelId: interaction.channelId,
                    guildId: interaction.guildId,
                    count,
                    likes,
                    dislikes,
                    templates,
                    voices,
                },
            });
        } catch (error) {
            analytics.captureException(
                error,
                interaction instanceof Message ? interaction.author.id : interaction.user.id,
                {
                    channelId: interaction.channelId,
                    guildId: interaction.guildId,
                },
            );
            logger.emit({
                severityText: "error",
                body: "milestones.error",
                attributes: {
                    posthogDistinctId: interaction instanceof Message ? interaction.author.id : interaction.user.id,
                    interaction_id: interaction.id,
                    channel_id: interaction.channelId,
                    guild_id: interaction?.guildId,
                    error_message: error instanceof Error ? error.message : String(error),
                    error_stack: error instanceof Error ? error.stack : undefined,
                },
            });
        }
    }

    public async getReachedMilestones(
        count: number,
        channelId: string,
    ): Promise<{ milestones: Achievement[] } & StatsPerChannel> {
        const milestones: Achievement[] = [];

        for (const achievement of achievementsList) {
            if (count >= achievement.requiredCount) {
                milestones.push(achievement);
            } else {
                break;
            }
        }

        const stats: StatsPerChannel = await this.getStatsPerChannel(channelId);

        return { milestones, ...stats };
    }

    private _getLocale(interaction: ChatInputCommandInteraction | ButtonInteraction | Message): Locale {
        if (interaction instanceof Message) {
            if (interaction.inGuild()) {
                return interaction.guild.preferredLocale;
            } else {
                return Locale.EnglishUS;
            }
        } else {
            return interaction.locale;
        }
    }

    private _highestMilestoneAtOrBelow(count: number): number {
        if (count < 25) {
            return 0;
        }

        let milestone: number = 25;

        while (milestone * 2 <= count) {
            milestone *= 2;
        }

        return milestone;
    }

    private _isMilestoneCount(count: number): boolean {
        if (count < 25 || count % 25 !== 0) return false;
        const quotient: number = count / 25;
        return (quotient & (quotient - 1)) === 0;
    }
}
