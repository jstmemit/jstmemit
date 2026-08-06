import type { ButtonInteraction, ChatInputCommandInteraction, ModalSubmitInteraction } from "discord.js";

export abstract class IFeedbackController {
    public abstract handleOpenFeedbackModal(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
        error?: boolean,
    ): Promise<void>;
    public abstract handleNewFeedbackSubmit(interaction: ModalSubmitInteraction, error?: boolean): Promise<void>;
}
