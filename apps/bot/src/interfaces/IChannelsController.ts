import type {
    ButtonInteraction,
    ChatInputCommandInteraction,
} from "discord.js";

export abstract class IChannelsController {
    public abstract handleEnableInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
    ): Promise<void>;
}
