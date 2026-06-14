import type { channelsTable } from "../schema.ts";

export abstract class IChannelsRepository {
    public abstract get(
        channelId: string,
    ): Promise<typeof channelsTable.$inferSelect | undefined>;
    public abstract add(channelId: string, addedAt: Date): Promise<boolean>;
}
