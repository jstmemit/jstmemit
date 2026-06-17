import type { IChannelsRepository } from "../interfaces/IChannelsRepository.ts";
import { channelsTable } from "../schema.ts";
import { db } from "../index.ts";
import { eq } from "drizzle-orm";

export class ChannelsRepository implements IChannelsRepository {
    public async get(
        channelId: string,
    ): Promise<typeof channelsTable.$inferSelect | undefined> {
        try {
            const channels = await db
                .select()
                .from(channelsTable)
                .where(eq(channelsTable.channelId, channelId))
                .limit(1);

            return channels[0] || undefined;
        } catch (error) {
            console.error(error);

            return undefined;
        }
    }

    public async upsert(
        channelId: string,
        addedAt: Date,
    ): Promise<typeof channelsTable.$inferSelect> {
        const [channel] = await db
            .insert(channelsTable)
            .values({ channelId, addedAt })
            .onConflictDoUpdate({
                target: channelsTable.channelId,
                set: { channelId },
            })
            .returning();

        if (!channel) {
            throw new Error();
        }

        return channel;
    }

    public async set(
        channelId: string,
        channel: typeof channelsTable.$inferSelect,
    ): Promise<typeof channelsTable.$inferSelect | undefined> {
        try {
            const channels = await db
                .update(channelsTable)
                .set(channel)
                .where(eq(channelsTable.channelId, channelId))
                .returning();

            return channels[0] || undefined;
        } catch (error) {
            console.error(error);

            return undefined;
        }
    }

    public async switch(
        channelId: string,
        isEnabled: boolean,
    ): Promise<boolean> {
        try {
            await db
                .update(channelsTable)
                .set({ enabled: !isEnabled })
                .where(eq(channelsTable.channelId, channelId));

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    }
}
