import type { ChatInputCommandInteraction } from "discord.js";

export abstract class IChannelsController {
    public abstract handleEnableInteraction(
        interaction: ChatInputCommandInteraction,
    ): Promise<void>;
}
