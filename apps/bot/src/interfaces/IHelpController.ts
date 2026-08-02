import type { ChatInputCommandInteraction } from "discord.js";

export abstract class IHelpController {
    public abstract handleHelpInteraction(interaction: ChatInputCommandInteraction): Promise<void>;
    public abstract handleFaqInteraction(interaction: ChatInputCommandInteraction): Promise<void>;
}
