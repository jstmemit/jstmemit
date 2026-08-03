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

export class MilestonesService implements IMilestonesService {
    private readonly _generationsRepository: IGenerationsRepository;
    private readonly _componentsService: IComponentsService;
    private readonly _ratingsRepository: IRatingsRepository;
    private readonly _narrationsRepository: INarrationsRepository;

    public constructor(
        generationsRepository: IGenerationsRepository,
        componentsService: IComponentsService,
        ratingsRepository: IRatingsRepository,
        narrationsRepository: INarrationsRepository,
    ) {
        this._generationsRepository = generationsRepository;
        this._componentsService = componentsService;
        this._ratingsRepository = ratingsRepository;
        this._narrationsRepository = narrationsRepository;
    }

    public async checkAndReplyWithMilestone(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
        channel: typeof channelsTable.$inferSelect,
    ): Promise<void> {
        const count: number = await this._generationsRepository.getCountPerChannel(interaction.channelId);

        if (!this._isMilestoneCount(count)) {
            return;
        }

        if (!channel.milestones) {
            return;
        }

        const locale: Locale = this._getLocale(interaction);

        const { likes, dislikes } = await this._ratingsRepository.getLikeDislikeChannelCount(interaction.channelId);
        const templates: number = await this._generationsRepository.getTemplateCountPerChannel(interaction.channelId);
        const voices: number = await this._narrationsRepository.getVoiceCountPerChannel(interaction.channelId);

        const components: (ActionRowBuilder<ButtonBuilder> | ContainerBuilder)[] = [
            this._componentsService.getMilestoneMessageComponent(locale, count, interaction.channelId),
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

    private _isMilestoneCount(count: number): boolean {
        if (count < 25 || count % 25 !== 0) return false;
        const quotient: number = count / 25;
        return (quotient & (quotient - 1)) === 0;
    }
}
