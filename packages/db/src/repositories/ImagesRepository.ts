import { IImagesRepository } from "../interfaces/IImagesRepository.ts";
import { imagesTable } from "../schema.ts";
import { db } from "../index.ts";
import { and, desc, eq, gt, inArray, isNotNull, isNull, lt, or, sql } from "drizzle-orm";
import { analytics } from "@jstmemit/analytics";
import type { BatchItem } from "drizzle-orm/batch";

export class ImagesRepository extends IImagesRepository {
    public async add(
        messageId: string,
        channelId: string,
        imageUrl: string,
        source: "attachment" | "gif" | "avatar",
        timestamp: Date,
        expiresAt?: Date,
    ): Promise<void> {
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
                set: { timestamp, expiresAt },
            });
        } catch (error) {
            analytics.captureException(error);
        }
    }

    public async addMany(images: readonly (typeof imagesTable.$inferInsert)[]): Promise<void> {
        if (images.length === 0) {
            return;
        }

        try {
            const statements: BatchItem<"sqlite">[] = images.map((image) =>
                db
                    .insert(imagesTable)
                    .values(image)
                    .onConflictDoUpdate({
                        target: imagesTable.imageUrl,
                        set: { timestamp: image.timestamp, expiresAt: image.expiresAt },
                    }),
            );

            await db.batch(statements as [BatchItem<"sqlite">, ...BatchItem<"sqlite">[]]);
        } catch (error) {
            analytics.captureException(error);
        }
    }

    public async getImagesByChannelId(channelId: string, timestamp: Date, limit: number = 100): Promise<string[]> {
        try {
            const recent = db
                .select({ imageUrl: imagesTable.imageUrl })
                .from(imagesTable)
                .where(
                    and(
                        eq(imagesTable.channelId, channelId),
                        inArray(imagesTable.source, ["attachment", "gif"]),
                        or(isNull(imagesTable.expiresAt), gt(imagesTable.expiresAt, timestamp)),
                    ),
                )
                .orderBy(desc(imagesTable.timestamp))
                .limit(500)
                .as("recent");

            const images = await db
                .select({ imageUrl: recent.imageUrl })
                .from(recent)
                .orderBy(sql`random()`)
                .limit(limit);

            return images.map((image): string => image.imageUrl);
        } catch (error) {
            analytics.captureException(error);

            return [];
        }
    }

    public async getAvatarsByChannelId(channelId: string, timestamp: Date, limit: number = 100): Promise<string[]> {
        try {
            const recent = db
                .select({ imageUrl: imagesTable.imageUrl })
                .from(imagesTable)
                .where(
                    and(
                        eq(imagesTable.channelId, channelId),
                        eq(imagesTable.source, "avatar"),
                        or(isNull(imagesTable.expiresAt), gt(imagesTable.expiresAt, timestamp)),
                    ),
                )
                .orderBy(desc(imagesTable.timestamp))
                .limit(500)
                .as("recent");

            const avatars = await db
                .select({ imageUrl: recent.imageUrl })
                .from(recent)
                .orderBy(sql`random()`)
                .limit(limit);

            return avatars.map((avatar): string => avatar.imageUrl);
        } catch (error) {
            analytics.captureException(error);

            return [];
        }
    }

    public async deleteAllExpiredOrOld(days: number = 90): Promise<boolean> {
        try {
            const now = new Date();
            const cutoff = new Date();
            cutoff.setDate(cutoff.getDate() - days);

            await db
                .delete(imagesTable)
                .where(
                    or(
                        and(isNotNull(imagesTable.expiresAt), lt(imagesTable.expiresAt, now)),
                        and(isNull(imagesTable.expiresAt), lt(imagesTable.timestamp, cutoff)),
                    ),
                );

            return true;
        } catch (error) {
            analytics.captureException(error);

            return false;
        }
    }
}
