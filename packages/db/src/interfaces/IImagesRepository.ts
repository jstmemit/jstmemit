export abstract class IImagesRepository {
    public abstract add(
        messageId: string,
        channelId: string,
        imageUrl: string,
        source: "attachment" | "gif" | "avatar",
        timestamp: Date,
        expiresAt?: Date,
    ): Promise<boolean>;

    public abstract getImagesByChannelId(channelId: string, timestamp: Date, limit?: number): Promise<string[]>;

    public abstract getAvatarsByChannelId(channelId: string, timestamp: Date, limit?: number): Promise<string[]>;

    public abstract deleteAllExpiredOrOld(days?: number): Promise<boolean>;
}
