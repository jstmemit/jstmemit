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

            // TODO: needs an embed
            await interaction.editReply("error");
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

            channel.frequency = Number(interaction.values[0]);

            await this._channelsService.setChannel(
                interaction.channelId,
                channel,
            );

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

            // TODO: needs an embed
            await interaction.editReply("error");
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

            channel.useAvatarsInMemes = interaction.values[0] === "true";

            await this._channelsService.setChannel(
                interaction.channelId,
                channel,
            );

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

            // TODO: needs an embed
            await interaction.editReply("error");
        }
    }
}
