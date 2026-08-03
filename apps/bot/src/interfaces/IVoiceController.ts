import type { ChatInputCommandInteraction, MessageContextMenuCommandInteraction } from "discord.js";

export abstract class IVoiceController {
    public abstract handleNarrateTextInteraction(
        interaction: ChatInputCommandInteraction | MessageContextMenuCommandInteraction,
    ): Promise<void>;
}
