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
import { analytics } from "@jstmemit/analytics/index";

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
        if (interaction.isCommand()) {
            await interaction.deferReply();
        }

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

            analytics.capture({
                event: isEnabled ? "channel_enabled" : "channel_disabled",
                distinctId: interaction.user.id,
                properties: {
                    channel_id: interaction.channelId,
                    guild_id: interaction.guildId,
                    messagesAmount: messagesAmount,
                    enabled: isEnabled,
                },
            });

            const message: ContainerBuilder =
                this._componentsService.getEnableMessageComponent(
                    isEnabled,
                    messagesAmount,
                );

            const buttons: ActionRowBuilder<ButtonBuilder> =
                this._componentsService.getEnableButtonsComponent(isEnabled);

            if (interaction.isButton()) {
                await interaction.update({
                    flags: MessageFlags.IsComponentsV2,
                    components: [message, buttons],
                });
            } else {
                await interaction.editReply({
                    flags: MessageFlags.IsComponentsV2,
                    components: [message, buttons],
                });
            }
        } catch (error) {
            console.error(error);
            analytics.captureException(error, "user_distinct_id", {
                channel_id: interaction.channelId,
                guild_id: interaction?.guildId || "",
                command: "/enable",
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
}
