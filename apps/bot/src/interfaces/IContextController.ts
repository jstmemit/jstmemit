import type { Message, TextBasedChannel } from "discord.js";

export abstract class IContextController {
    public abstract handleNewMessage(message: Message): Promise<void>;
    public abstract prefetchChannel(channel: TextBasedChannel): Promise<number>;
}
