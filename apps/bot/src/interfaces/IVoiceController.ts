import type { ChatInputCommandInteraction } from "discord.js";

export abstract class IVoiceController {
    public abstract handleNarrateTextInteraction(interaction: ChatInputCommandInteraction): Promise<void>;
}
