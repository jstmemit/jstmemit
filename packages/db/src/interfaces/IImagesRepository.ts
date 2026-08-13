import type { imagesTable } from "../schema.ts";

export abstract class IImagesRepository {
    public abstract add(
        messageId: string,
        channelId: string,
        imageUrl: string,
        source: "attachment" | "gif" | "avatar",
        timestamp: Date,
        expiresAt?: Date,
    ): Promise<void>;

    public abstract addMany(images: readonly (typeof imagesTable.$inferInsert)[]): Promise<void>;

    public abstract getImagesByChannelId(channelId: string, timestamp: Date, limit?: number): Promise<string[]>;

    public abstract getAvatarsByChannelId(channelId: string, timestamp: Date, limit?: number): Promise<string[]>;

    public abstract deleteAllExpiredOrOld(days?: number): Promise<boolean>;
}
