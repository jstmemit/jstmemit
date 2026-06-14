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

    public async add(channelId: string, addedAt: Date): Promise<boolean> {
        try {
            const channel: typeof channelsTable.$inferInsert = {
                channelId: channelId,
                addedAt: addedAt,
            };

            await db.insert(channelsTable).values(channel);

            return true;
        } catch (error) {
            console.error(error);

            return false;
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
