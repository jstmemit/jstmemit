import type { channelsTable } from "@jstmemit/db/schema.ts";

export abstract class IChannelsService {
    public abstract getChannel(channelId: string): Promise<typeof channelsTable.$inferSelect | undefined>;

    public abstract switchChannel(channelId: string): Promise<boolean>;

    public abstract isChannelEnabled(channelId: string): Promise<boolean>;

    public abstract setChannel(channelId: string, channel: typeof channelsTable.$inferSelect): Promise<boolean>;

    public abstract deleteChannelData(channelId: string): Promise<boolean>;

    public abstract rollChannelFrequency(channelId: string): Promise<boolean>;
}
