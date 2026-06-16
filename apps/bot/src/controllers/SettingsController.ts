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
            const isEnabled: boolean =
                await this._channelsService.isChannelEnabled(
                    interaction.channelId,
                );

            const frequency: number = await this._channelsService.getFrequency(
                interaction.channelId,
            );

            const header: ContainerBuilder =
                this._componentsService.getSettingsHeaderMessageComponent(
                    isEnabled,
                );

            const body: ContainerBuilder =
                this._componentsService.getSettingsBodyMessageComponent(
                    frequency,
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
            const isEnabled: boolean =
                await this._channelsService.isChannelEnabled(
                    interaction.channelId,
                );

            const frequency: number = Number(interaction.values[0]);

            await this._channelsService.setFrequency(
                interaction.channelId,
                frequency,
            );

            const header: ContainerBuilder =
                this._componentsService.getSettingsHeaderMessageComponent(
                    isEnabled,
                );

            const body: ContainerBuilder =
                this._componentsService.getSettingsBodyMessageComponent(
                    frequency,
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
