import type { Client, Guild, Interaction, Message } from "discord.js";

export abstract class IEventsController {
    public abstract handleClientReady(readyClient: Client<true>): void;
    public abstract handleMessageCreate(message: Message): Promise<void>;
    public abstract handleInteractionCreate(
        interaction: Interaction,
    ): Promise<void>;
    public abstract handleGuildCreate(guild: Guild): void;
    public abstract handleGuildDelete(guild: Guild): void;
}
