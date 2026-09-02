import type { Guild, Message, TextBasedChannel } from "discord.js";

export abstract class IContextController {
    public abstract handleNewMessage(message: Message): Promise<void>;
    public abstract prefetchChannel(channel: TextBasedChannel, guild: Guild): Promise<number>;
}
