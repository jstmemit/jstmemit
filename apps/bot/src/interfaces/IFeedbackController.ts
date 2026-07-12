import type { ChatInputCommandInteraction, ModalBuilder, ModalSubmitInteraction } from "discord.js";

export abstract class IFeedbackController {
    public abstract handleOpenFeedbackModal(interaction: ChatInputCommandInteraction): Promise<void>;
    public abstract handleNewFeedbackSubmit(interaction: ModalSubmitInteraction): Promise<void>;
}
