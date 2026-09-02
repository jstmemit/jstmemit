import type { ButtonInteraction, ChatInputCommandInteraction } from "discord.js";

export abstract class IHelpController {
    public abstract handleHelpInteraction(interaction: ChatInputCommandInteraction | ButtonInteraction): Promise<void>;
    public abstract handleFaqInteraction(interaction: ChatInputCommandInteraction | ButtonInteraction): Promise<void>;
}
