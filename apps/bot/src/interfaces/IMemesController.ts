import type { ButtonInteraction, ChatInputCommandInteraction, Message } from "discord.js";

export abstract class IMemesController {
    public abstract handleMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
    ): Promise<void>;
}
