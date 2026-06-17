import type { StringSelectMenuInteraction } from "discord.js";
import {
    type ButtonInteraction,
    type ChatInputCommandInteraction,
    type ContainerBuilder,
    MessageFlags,
} from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import type { ISettingsController } from "#/interfaces/ISettingsController.ts";
import type { channelsTable } from "@jstmemit/db/schema.ts";
import { analytics } from "@jstmemit/analytics";

export class SettingsController implements ISettingsController {
    private readonly _channelsService: IChannelsService;
    private readonly _componentsService: IComponentsService;

    public constructor(
        channelsService: IChannelsService,
        componentsService: IComponentsService,
    ) {
        this._channelsService = channelsService;
        this._componentsService = componentsService;
    }

    /**
     * Handles /settings command.
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleSettingsInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
    ): Promise<void> {
        if (interaction.isCommand()) {
            await interaction.deferReply();
        }

        try {
            const channel: typeof channelsTable.$inferSelect | undefined =
                await this._channelsService.getChannel(interaction.channelId);

            if (!channel) {
                throw new Error();
            }

            const header: ContainerBuilder =
                this._componentsService.getSettingsHeaderMessageComponent(
                    channel.enabled,
                );

            const body: ContainerBuilder =
                this._componentsService.getSettingsBodyMessageComponent(
                    channel.frequency,
                    channel.useAvatarsInMemes,
                );

            // opening settings (via button in /enable or /settings)
            analytics.capture({
                event: "settings_opened",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    trigger: interaction.isCommand() ? "/settings" : "/enable",
                    command: "/settings",
                    ...channel,
                },
            });

            if (interaction.isButton()) {
                await interaction.update({
                    flags: MessageFlags.IsComponentsV2,
                    components: [header, body],
                });
            } else {
                await interaction.editReply({
                    flags: MessageFlags.IsComponentsV2,
                    components: [header, body],
                });
            }
        } catch (error) {
            console.error(error);
            analytics.captureException(error, interaction.user.id, {
                channel_id: interaction.channelId,
                guild_id: interaction?.guildId || "",
                trigger: interaction.isCommand() ? "/settings" : "/enable",
                command: "/settings",
            });

            const message: ContainerBuilder =
                this._componentsService.getErrorMessageComponent(
                    interaction.id,
                );

            if (interaction.isButton()) {
                await interaction.update({
                    flags: MessageFlags.IsComponentsV2,
                    components: [message],
                });
            } else {
                await interaction.editReply({
                    flags: MessageFlags.IsComponentsV2,
                    components: [message],
                });
            }
        }
    }

    public async handleFrequencySelect(
        interaction: StringSelectMenuInteraction,
    ): Promise<void> {
        try {
            const channel: typeof channelsTable.$inferSelect | undefined =
                await this._channelsService.getChannel(interaction.channelId);

            if (!channel) {
                throw new Error();
            }

            const old: number = channel.frequency;
            channel.frequency = Number(interaction.values[0]);

            await this._channelsService.setChannel(
                interaction.channelId,
                channel,
            );

            // memes in chat frequency
            analytics.capture({
                event: "frequency_changed",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    channelId: interaction.channelId,
                    command: "/settings",
                    old: old,
                    new: channel.frequency,
                },
            });

            const header: ContainerBuilder =
                this._componentsService.getSettingsHeaderMessageComponent(
                    channel.enabled,
                );

            const body: ContainerBuilder =
                this._componentsService.getSettingsBodyMessageComponent(
                    channel.frequency,
                    channel.useAvatarsInMemes,
                );

            await interaction.update({
                flags: MessageFlags.IsComponentsV2,
                components: [header, body],
            });
        } catch (error) {
            console.error(error);
            analytics.captureException(error, interaction.user.id, {
                channel_id: interaction.channelId,
                guild_id: interaction?.guildId || "",
                command: "/settings",
                action: "frequency",
            });

            const message: ContainerBuilder =
                this._componentsService.getErrorMessageComponent(
                    interaction.id,
                );

            await interaction.update({
                flags: MessageFlags.IsComponentsV2,
                components: [message],
            });
        }
    }

    public async handleUserAvatarsSelect(
        interaction: StringSelectMenuInteraction,
    ): Promise<void> {
        try {
            const channel: typeof channelsTable.$inferSelect | undefined =
                await this._channelsService.getChannel(interaction.channelId);

            if (!channel) {
                throw new Error();
            }

            const old: boolean = channel.useAvatarsInMemes;
            channel.useAvatarsInMemes = interaction.values[0] === "true";

            await this._channelsService.setChannel(
                interaction.channelId,
                channel,
            );

            // enable/disable using avatars in memes
            analytics.capture({
                event: "avatar_changed",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    channelId: interaction.channelId,
                    command: "/settings",
                    old: old,
                    new: channel.useAvatarsInMemes,
                },
            });

            const header: ContainerBuilder =
                this._componentsService.getSettingsHeaderMessageComponent(
                    channel.enabled,
                );

            const body: ContainerBuilder =
                this._componentsService.getSettingsBodyMessageComponent(
                    channel.frequency,
                    channel.useAvatarsInMemes,
                );

            await interaction.update({
                flags: MessageFlags.IsComponentsV2,
                components: [header, body],
            });
        } catch (error) {
            console.error(error);
            analytics.captureException(error, interaction.user.id, {
                channel_id: interaction.channelId,
                guild_id: interaction?.guildId || "",
                command: "/settings",
                action: "avatar",
            });

            const message: ContainerBuilder =
                this._componentsService.getErrorMessageComponent(
                    interaction.id,
                );

            await interaction.update({
                flags: MessageFlags.IsComponentsV2,
                components: [message],
            });
        }
    }
}
