import type { channelsTable } from "@jstmemit/db/schema.ts";
import type { BaseMessageOptions } from "discord.js";

export abstract class IChannelsService {
    public abstract getChannel(
        channelId: string,
        upsert?: boolean,
    ): Promise<typeof channelsTable.$inferSelect | undefined>;

    public abstract switchChannel(channelId: string): Promise<boolean>;

    public abstract isChannelEnabled(channelId: string, upsert?: boolean): Promise<boolean>;

    public abstract setChannel(channelId: string, channel: typeof channelsTable.$inferSelect): Promise<boolean>;

    public abstract deleteChannelData(channelId: string): Promise<boolean>;

    public abstract rollChannelFrequency(channelId: string): Promise<boolean>;

    public abstract sendMessage(channelId: string, components: BaseMessageOptions["components"]): Promise<void>;
}
