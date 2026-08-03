import type { MemeRatings } from "@jstmemit/shared/models/MemeRatings";
import { db } from "../index.ts";
import { ratingsTable } from "../schema.ts";
import { eq, sql, sum } from "drizzle-orm";
import type { IRatingsRepository } from "../interfaces/IRatingsRepository.ts";

export class RatingsRepository implements IRatingsRepository {
    public async getMemeRatings(messageId: string): Promise<MemeRatings> {
        try {
            const ratings = await db.select().from(ratingsTable).where(eq(ratingsTable.messageId, messageId)).limit(1);

            return {
                likes: ratings[0]?.likes || 0,
                dislikes: ratings[0]?.dislikes || 0,
            };
        } catch (error) {
            console.error(error);

            return {
                likes: 0,
                dislikes: 0,
            };
        }
    }

    public async addLikeRating(messageId: string, channelId: string): Promise<void> {
        try {
            await this._insertRating(messageId, channelId);

            await db
                .update(ratingsTable)
                .set({ likes: sql`${ratingsTable.likes} + 1` })
                .where(eq(ratingsTable.messageId, messageId));
        } catch (error) {
            console.error(error);
        }
    }

    public async addDislikeRating(messageId: string, channelId: string): Promise<void> {
        try {
            await this._insertRating(messageId, channelId);

            await db
                .update(ratingsTable)
                .set({ dislikes: sql`${ratingsTable.dislikes} + 1` })
                .where(eq(ratingsTable.messageId, messageId));
        } catch (error) {
            console.error(error);
        }
    }

    private async _insertRating(messageId: string, channelId: string): Promise<void> {
        await db
            .insert(ratingsTable)
            .values({ messageId, channelId, likes: 0, dislikes: 0 })
            .onConflictDoNothing({ target: ratingsTable.messageId });
    }

    public async getLikeDislikeChannelCount(channelId: string): Promise<MemeRatings> {
        try {
            const result = await db
                .select({
                    likes: sum(ratingsTable.likes),
                    dislikes: sum(ratingsTable.dislikes),
                })
                .from(ratingsTable)
                .where(eq(ratingsTable.channelId, channelId));

            return {
                likes: Number(result[0]?.likes ?? 0),
                dislikes: Number(result[0]?.dislikes ?? 0),
            };
        } catch (error) {
            console.error(error);

            return { likes: 0, dislikes: 0 };
        }
    }
}
