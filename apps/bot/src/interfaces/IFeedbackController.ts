import type { ButtonInteraction, ChatInputCommandInteraction, ModalSubmitInteraction } from "discord.js";

export abstract class IFeedbackController {
    public abstract handleOpenFeedbackModal(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
    ): Promise<void>;
    public abstract handleNewFeedbackSubmit(interaction: ModalSubmitInteraction): Promise<void>;
}
