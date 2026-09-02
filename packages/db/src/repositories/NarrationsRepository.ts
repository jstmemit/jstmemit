import { narrationsTable } from "../schema.ts";
import type { INarrationsRepository } from "../interfaces/INarrationsRepository.ts";
import { db } from "../index.ts";
import { countDistinct, eq } from "drizzle-orm";
import { analytics } from "@jstmemit/analytics";

export class NarrationsRepository implements INarrationsRepository {
    public async add(channelId: string, voice: string, date: Date): Promise<number> {
        try {
            const narration = {
                channelId: channelId,
                voice: voice,
                createdAt: date,
            };

            const result = await db.insert(narrationsTable).values(narration);

            return Number(result.lastInsertRowid);
        } catch (error) {
            analytics.captureException(error);

            return 0;
        }
    }

    public async getVoiceCountPerChannel(channelId: string): Promise<number> {
        try {
            const result = await db
                .select({ count: countDistinct(narrationsTable.voice) })
                .from(narrationsTable)
                .where(eq(narrationsTable.channelId, channelId));

            return result[0]?.count as number;
        } catch (error) {
            analytics.captureException(error);

            return 0;
        }
    }
}
