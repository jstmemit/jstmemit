export abstract class IImagesRepository {
    public abstract new(
        messageId: string,
        channelId: string,
        imageUrl: string,
        source: "attachment" | "gif" | "avatar",
        timestamp: Date,
        expiresAt?: Date,
    ): Promise<boolean>;

    public abstract getImagesByChannelId(
        channelId: string,
        timestamp: Date,
        limit?: number,
    ): Promise<string[]>;
}
