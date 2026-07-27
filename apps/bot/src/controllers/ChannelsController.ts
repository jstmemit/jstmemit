import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonInteraction,
    ChatInputCommandInteraction,
    ContainerBuilder,
} from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { analytics } from "@jstmemit/analytics";
import { respond } from "#/helpers/respond.ts";
import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IContextController } from "#/interfaces/IContextController.ts";

export class ChannelsController implements IChannelsController {
    private readonly _channelsService: IChannelsService;
    private readonly _componentsService: IComponentsService;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _contextController: IContextController;
    private readonly _contextService: IContextService;

    public constructor(
        channelsService: IChannelsService,
        componentsService: IComponentsService,
        messagesRepository: IMessagesRepository,
        contextController: IContextController,
        contextService: IContextService,
    ) {
        this._channelsService = channelsService;
        this._componentsService = componentsService;
        this._messagesRepository = messagesRepository;
        this._contextController = contextController;
        this._contextService = contextService;
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
    public async handleEnableInteraction(interaction: ChatInputCommandInteraction | ButtonInteraction): Promise<void> {
        if (interaction.isCommand()) {
            await interaction.deferReply();
        }

        try {
            let prefetchedContext: number = 0;
            let isEnabled: boolean = await this._channelsService.isChannelEnabled(interaction.channelId);

            const messagesAmount: number = await this._messagesRepository.getMessagesAmountByChannelId(
                interaction.channelId,
            );

            if ((!isEnabled && messagesAmount < 1) || interaction.isButton()) {
                isEnabled = await this._channelsService.switchChannel(interaction.channelId);
            }

            if (isEnabled && messagesAmount < 1 && interaction.channel) {
                prefetchedContext = await this._contextController.prefetchChannel(interaction.channel);
            }

            analytics.capture({
                event: isEnabled ? "channel_enabled" : "channel_disabled",
                distinctId: interaction.user.id,
                properties: {
                    channelId: interaction.channelId,
                    guildId: interaction.guildId,
                    messagesAmount: messagesAmount,
                    prefetchedContext,
                    enabled: isEnabled,
                    language: interaction.locale,
                },
            });

            if (interaction.inGuild() && interaction?.guild?.iconURL()) {
                const serverIcon: string | null = interaction.guild.iconURL();

                if (serverIcon) {
                    await this._contextService.saveAvatar(interaction.id, interaction.channelId, serverIcon);
                }
            }

            const message: ContainerBuilder = this._componentsService.getEnableMessageComponent(
                interaction.locale,
                isEnabled,
                messagesAmount + prefetchedContext,
            );

            const buttons: ActionRowBuilder<ButtonBuilder> = this._componentsService.getEnableButtonsComponent(
                interaction.locale,
                isEnabled,
            );

            await respond(interaction, [message, buttons]);
        } catch (error) {
            analytics.captureException(error, interaction.user.id, {
                channelId: interaction.channelId,
                guildId: interaction?.guildId || "",
                command: "/enable",
                language: interaction.locale,
            });

            const message: ContainerBuilder = this._componentsService.getErrorMessageComponent(
                interaction.locale,
                interaction.id,
            );

            await respond(interaction, [message]);
        }
    }
}
