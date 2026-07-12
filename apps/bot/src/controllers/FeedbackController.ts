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

export class FeedbackController implements IFeedbackController {
    private readonly _feedbackChannelId: string = "1525768926317776946";
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
        const modal: ModalBuilder = this._modalsService.getSendFeedbackModal(interaction.user.id);

        await interaction.showModal(modal);
    }

    public async handleNewFeedbackSubmit(interaction: ModalSubmitInteraction): Promise<void> {
        const userId: string | undefined = interaction.customId.split(":")[1];
        const message: string | undefined = interaction.fields.getTextInputValue(`text`);

        if (!message || !userId) {
            await respond(interaction, [this._componentsService.getErrorMessageComponent(interaction.id)]);
            return;
        }

        await interaction.deferReply({
            flags: MessageFlags.Ephemeral,
        });

        await this._channelsService.sendMessage(this._feedbackChannelId, [
            this._componentsService.getFeedbackMessageComponent(userId, message),
        ]);

        await interaction.editReply({
            content: "form submitted",
        });
    }
}
