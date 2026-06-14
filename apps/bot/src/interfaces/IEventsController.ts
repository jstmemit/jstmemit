import type { Client, Interaction, Message } from "discord.js";

export abstract class IEventsController {
    public abstract handleClientReady(readyClient: Client<true>): void;
    public abstract handleMessageCreate(message: Message): Promise<void>;
    public abstract handleInteractionCreate(
        interaction: Interaction,
    ): Promise<void>;
}
