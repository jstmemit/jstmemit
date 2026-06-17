import { IImagesRepository } from "../interfaces/IImagesRepository.ts";
import { imagesTable } from "../schema.ts";
import { db } from "../index.ts";
import { and, eq, gt, isNull, or, sql } from "drizzle-orm";

export class ImagesRepository extends IImagesRepository {
    public async new(
        messageId: string,
        channelId: string,
        imageUrl: string,
        source: "attachment" | "gif",
        timestamp: Date,
        expiresAt?: Date,
    ): Promise<boolean> {
        try {
            const image: typeof imagesTable.$inferInsert = {
                messageId: messageId,
                channelId: channelId,
                imageUrl: imageUrl,
                source: source,
                timestamp: timestamp,
                expiresAt: expiresAt,
            };

            await db.insert(imagesTable).values(image).onConflictDoUpdate({
                target: imagesTable.imageUrl,
                set: { imageUrl },
            });

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    }

    public async getImagesByChannelId(
        channelId: string,
        timestamp: Date,
        limit: number = 100,
    ): Promise<string[]> {
        try {
            const images = await db
                .select()
                .from(imagesTable)
                .where(
                    and(
                        eq(imagesTable.channelId, channelId),
                        or(
                            isNull(imagesTable.expiresAt),
                            gt(imagesTable.expiresAt, timestamp),
                        ),
                    ),
                )
                .orderBy(sql`random()`)
                .limit(limit);

            return images.map((image) => image.imageUrl);
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
