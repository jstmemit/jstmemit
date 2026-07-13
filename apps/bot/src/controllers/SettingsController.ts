import type { StringSelectMenuInteraction } from "discord.js";
import { type ButtonInteraction, type ChatInputCommandInteraction } from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import type { ISettingsController } from "#/interfaces/ISettingsController.ts";
import type { channelsTable } from "@jstmemit/db/schema.ts";
import { analytics } from "@jstmemit/analytics";
import { respond } from "#/helpers/respond.ts";

export class SettingsController implements ISettingsController {
    private readonly _channelsService: IChannelsService;
    private readonly _componentsService: IComponentsService;

    public constructor(channelsService: IChannelsService, componentsService: IComponentsService) {
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
            const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsService.getChannel(
                interaction.channelId,
            );

            if (!channel) {
                throw new Error();
            }

            // opening settings (via button in /enable or /settings)
            analytics.capture({
                event: "settings_opened",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    trigger: interaction.isCommand() ? "/settings" : "/enable",
                    command: "/settings",
                    language: interaction.locale,
                    ...channel,
                },
            });

            await this._replyWithSettings(interaction, channel);
        } catch (error) {
            await this._replyWithError(interaction, error, {
                command: "/settings",
            });
        }
    }

    /**
     * Handles sending the confirmation message for deleting all data
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleOpenDeleteDataConfirmationInteraction(interaction: ButtonInteraction): Promise<void> {
        try {
            const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsService.getChannel(
                interaction.channelId,
            );

            if (!channel) {
                throw new Error();
            }

            analytics.capture({
                event: "delete_data_confirmation_opened",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    command: "/settings",
                    language: interaction.locale,
                    ...channel,
                },
            });

            await this._replyWithDeleteDataConfirmation(interaction);
        } catch (error) {
            await this._replyWithError(interaction, error, {
                command: "/settings",
            });
        }
    }

    /**
     * Handles "Delete all data" button press in the confirmation message
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleDeleteDataInteraction(interaction: ButtonInteraction): Promise<void> {
        try {
            const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsService.getChannel(
                interaction.channelId,
            );

            if (!channel) {
                throw new Error();
            }

            await this._channelsService.deleteChannelData(interaction.channelId);

            analytics.capture({
                event: "delete_data_confirmation_pressed",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    command: "/settings",
                    language: interaction.locale,
                    ...channel,
                },
            });

            await this._replyWithDeleteDataSuccess(interaction);
        } catch (error) {
            await this._replyWithError(interaction, error, {
                command: "/settings",
            });
        }
    }

    /**
     * Handles changing of the meme frequency
     * setting for the channel
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleFrequencySelect(interaction: StringSelectMenuInteraction): Promise<void> {
        try {
            const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsService.getChannel(
                interaction.channelId,
            );

            if (!channel) {
                throw new Error();
            }

            const old: number = channel.frequency;
            channel.frequency = Number(interaction.values[0]);

            await this._channelsService.setChannel(interaction.channelId, channel);

            // memes in chat frequency
            analytics.capture({
                event: "frequency_changed",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    channelId: interaction.channelId,
                    command: "/settings",
                    language: interaction.locale,
                    old: old,
                    new: channel.frequency,
                },
            });

            await this._replyWithSettings(interaction, channel);
        } catch (error) {
            await this._replyWithError(interaction, error, {
                command: "/settings",
                action: "frequency",
            });
        }
    }

    /**
     * Handles changing if the bot can use avatars
     * in memes that are generated in the channel
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleUserAvatarsSelect(interaction: StringSelectMenuInteraction): Promise<void> {
        try {
            const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsService.getChannel(
                interaction.channelId,
            );

            if (!channel) {
                throw new Error();
            }

            const old: boolean = channel.useAvatarsInMemes;
            channel.useAvatarsInMemes = interaction.values[0] === "true";

            await this._channelsService.setChannel(interaction.channelId, channel);

            // enable/disable using avatars in memes
            analytics.capture({
                event: "avatar_changed",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    channelId: interaction.channelId,
                    command: "/settings",
                    language: interaction.locale,
                    old: old,
                    new: channel.useAvatarsInMemes,
                },
            });

            await this._replyWithSettings(interaction, channel);
        } catch (error) {
            await this._replyWithError(interaction, error, {
                command: "/settings",
                action: "avatar",
            });
        }
    }

    /**
     * Responds with a head + body of the /settings command
     * message component
     *
     * @param interaction
     * @param channel
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _replyWithSettings(
        interaction: ButtonInteraction | ChatInputCommandInteraction | StringSelectMenuInteraction,
        channel: typeof channelsTable.$inferSelect,
    ): Promise<void> {
        await respond(interaction, [
            this._componentsService.getSettingsHeaderMessageComponent(interaction.locale, channel.enabled),
            this._componentsService.getSettingsBodyMessageComponent(
                interaction.locale,
                channel.frequency,
                channel.useAvatarsInMemes,
            ),
            this._componentsService.getSettingsFooterMessageComponent(interaction.locale),
        ]);
    }

    /**
     * Responds with a confirmation message for deleting saved data
     *
     * @param interaction
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _replyWithDeleteDataConfirmation(interaction: ButtonInteraction): Promise<void> {
        await respond(interaction, [
            this._componentsService.getDeleteDataConfirmationMessageComponent(interaction.locale),
            this._componentsService.getDeleteDataButtonsComponent(interaction.locale),
        ]);
    }

    /**
     * Responds with a success message after deleting saved data
     *
     * @param interaction
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _replyWithDeleteDataSuccess(interaction: ButtonInteraction): Promise<void> {
        await respond(interaction, [this._componentsService.getDeleteDataSuccessMessageComponent(interaction.locale)]);
    }

    /**
     * Logs the error and captures it with PostHog, then responds
     * with an error message component
     *
     * @param interaction
     * @param error
     * @param properties
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _replyWithError(
        interaction: ButtonInteraction | ChatInputCommandInteraction | StringSelectMenuInteraction,
        error: unknown,
        properties: Record<string, unknown>,
    ): Promise<void> {
        console.error(error);
        analytics.captureException(error, interaction.user.id, {
            channel_id: interaction.channelId,
            guild_id: interaction.guildId || "",
            trigger: interaction.isCommand() ? "/settings" : "/enable",
            language: interaction.locale,
            ...properties,
        });
        await respond(interaction, [
            this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id),
        ]);
    }
}
