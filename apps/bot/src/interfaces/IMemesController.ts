import type {
    ButtonInteraction,
    ChatInputCommandInteraction,
} from "discord.js";

export abstract class IMemesController {
    public abstract handleMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
    ): Promise<void>;
}
