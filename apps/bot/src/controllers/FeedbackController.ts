import {
    type ChatInputCommandInteraction,
    MessageFlags,
    type ModalBuilder,
    type ModalSubmitInteraction,
} from "discord.js";
import type { IModalsService } from "#/interfaces/IModalsService.ts";
import type { IFeedbackController } from "#/interfaces/IFeedbackController.ts";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import { analytics } from "@jstmemit/analytics";

export class FeedbackController implements IFeedbackController {
    private readonly _feedbackChannelId: string = "1525814003425874032";
    private readonly _modalsService: IModalsService;
    private readonly _componentsService: IComponentsService;
    private readonly _channelsService: IChannelsService;

    public constructor(
        modalsService: IModalsService,
        componentsService: IComponentsService,
        channelsService: IChannelsService,
    ) {
        this._modalsService = modalsService;
        this._componentsService = componentsService;
        this._channelsService = channelsService;
    }

    public async handleOpenFeedbackModal(interaction: ChatInputCommandInteraction): Promise<void> {
        const modal: ModalBuilder = this._modalsService.getSendFeedbackModal(interaction.locale, interaction.user.id);

        analytics.capture({
            event: "feedback_modal_opened",
            distinctId: interaction.user.id,
            properties: {
                channelId: interaction.channelId,
                guildId: interaction.guildId,
                language: interaction.locale,
            },
        });

        await interaction.showModal(modal);
    }

    public async handleNewFeedbackSubmit(interaction: ModalSubmitInteraction): Promise<void> {
        const userId: string | undefined = interaction.customId.split(":")[1];
        const message: string | undefined = interaction.fields.getTextInputValue(`text`);

        analytics.capture({
            event: "feedback_modal_failed",
            distinctId: interaction.user.id,
            properties: {
                channelId: interaction.channelId,
                guildId: interaction.guildId,
                language: interaction.locale,
            },
        });

        if (!message || !userId) {
            await respond(interaction, [
                this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id),
            ]);
            return;
        }

        await interaction.deferReply({
            flags: MessageFlags.Ephemeral,
        });

        await this._channelsService.sendMessage(this._feedbackChannelId, [
            this._componentsService.getFeedbackMessageComponent(interaction.locale, userId, message),
        ]);

        await interaction.editReply({
            components: [
                this._componentsService.getFeedbackMessageSubmitComponent(interaction.locale, interaction.id, message),
            ],
            flags: MessageFlags.IsComponentsV2,
        });

        analytics.capture({
            event: "feedback_modal_submitted",
            distinctId: interaction.user.id,
            properties: {
                channelId: interaction.channelId,
                guildId: interaction.guildId,
                language: interaction.locale,
            },
        });
    }
}
