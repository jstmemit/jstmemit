import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonInteraction,
    ChatInputCommandInteraction,
    ContainerBuilder,
} from "discord.js";
import { MessageFlags } from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";

export class ChannelsController implements IChannelsController {
    private readonly _channelsService: IChannelsService;
    private readonly _componentsService: IComponentsService;
    private readonly _messagesRepository: IMessagesRepository;

    public constructor(
        channelsService: IChannelsService,
        componentsService: IComponentsService,
        messagesRepository: IMessagesRepository,
    ) {
        this._channelsService = channelsService;
        this._componentsService = componentsService;
        this._messagesRepository = messagesRepository;
    }

    /**
     * Handles /enable command. Calls ChannelService to
     * switch channel. If a channel is disabled and /enable
     * is ran, then it gets enabled. If a channel is enabled
     * then it can be disabled by clicking on the button in reply.
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleEnableInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
    ): Promise<void> {
        await interaction.deferReply();

        try {
            let isEnabled: boolean =
                await this._channelsService.isChannelEnabled(
                    interaction.channelId,
                );

            if (!isEnabled || interaction.isButton()) {
                isEnabled = await this._channelsService.switchChannel(
                    interaction.channelId,
                );
            }

            const messagesAmount: number =
                await this._messagesRepository.getMessagesAmountByChannelId(
                    interaction.channelId,
                );

            const message: ContainerBuilder =
                this._componentsService.getEnableMessageComponent(
                    isEnabled,
                    messagesAmount,
                );

            const buttons: ActionRowBuilder<ButtonBuilder> =
                this._componentsService.getEnableButtonsComponent(isEnabled);

            if (interaction.isButton()) {
                await interaction.message.delete();
            }

            await interaction.editReply({
                flags: MessageFlags.IsComponentsV2,
                components: [message, buttons],
            });
        } catch (error) {
            console.error(error);

            // TODO: needs an embed
            await interaction.editReply("error");
        }
    }
}
