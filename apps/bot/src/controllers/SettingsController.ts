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
        await interaction.deferReply();

        try {
            const isEnabled: boolean =
                await this._channelsService.isChannelEnabled(
                    interaction.channelId,
                );

            const header: ContainerBuilder =
                this._componentsService.getSettingsHeaderMessageComponent(
                    isEnabled,
                );

            if (interaction.isButton()) {
                await interaction.message.delete();
            }

            await interaction.editReply({
                flags: MessageFlags.IsComponentsV2,
                components: [header],
            });
        } catch (error) {
            console.error(error);

            // TODO: needs an embed
            await interaction.editReply("error");
        }
    }
}
