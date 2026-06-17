import type { channelsTable } from "../schema.ts";

export abstract class IChannelsRepository {
    public abstract get(
        channelId: string,
    ): Promise<typeof channelsTable.$inferSelect | undefined>;
    public abstract upsert(
        channelId: string,
        addedAt: Date,
    ): Promise<typeof channelsTable.$inferSelect>;
    public abstract set(
        channelId: string,
        channel: typeof channelsTable.$inferSelect,
    ): Promise<typeof channelsTable.$inferSelect | undefined>;
    public abstract switch(
        channelId: string,
        isEnabled: boolean,
    ): Promise<boolean>;
}
