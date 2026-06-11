export abstract class IMessagesRepository {
    public abstract new(
        messageId: string,
        channelId: string,
        content: string,
        timestamp: Date,
    ): Promise<boolean>;

    public abstract getMessagesContentByChannelId(
        channelId: string,
        limit?: number,
        minLength?: number,
        maxLength?: number,
    ): Promise<string[]>;
}
