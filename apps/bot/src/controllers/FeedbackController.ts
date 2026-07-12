import type { ChatInputCommandInteraction, ModalBuilder, ModalSubmitInteraction } from "discord.js";
import type { IModalsService } from "#/interfaces/IModalsService.ts";
import type { IFeedbackController } from "#/interfaces/IFeedbackController.ts";

export class FeedbackController implements IFeedbackController {
    private readonly _modalsService: IModalsService;

    public constructor(modalsService: IModalsService) {
        this._modalsService = modalsService;
    }

    public async handleOpenFeedbackModal(interaction: ChatInputCommandInteraction): Promise<void> {
        const modal: ModalBuilder = this._modalsService.getSendFeedbackModal(interaction.user.id);

        await interaction.showModal(modal);
    }

    public async handleNewFeedbackSubmit(interaction: ModalSubmitInteraction): Promise<void> {}
}
