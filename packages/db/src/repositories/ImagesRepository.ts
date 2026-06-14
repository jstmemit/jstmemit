import { IImagesRepository } from "../interfaces/IImagesRepository.ts";
import { imagesTable } from "../schema.ts";
import { db } from "../index.ts";
import { and, eq, gte } from "drizzle-orm";

export class ImagesRepository extends IImagesRepository {
    public async new(
        messageId: string,
        channelId: string,
        imageUrl: string,
        timestamp: Date,
    ): Promise<boolean> {
        try {
            const image: typeof imagesTable.$inferInsert = {
                messageId: messageId,
                channelId: channelId,
                imageUrl: imageUrl,
                timestamp: timestamp,
            };

            await db.insert(imagesTable).values(image);

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
        cutoffTime: number = 24 * 60 * 60 * 1000,
    ): Promise<string[]> {
        try {
            const cutoff = new Date(+timestamp - cutoffTime);

            const images = await db
                .select()
                .from(imagesTable)
                .where(
                    and(
                        gte(imagesTable.timestamp, cutoff),
                        eq(imagesTable.channelId, channelId),
                    ),
                )
                .limit(limit);

            return images.map((image) => image.imageUrl);
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
