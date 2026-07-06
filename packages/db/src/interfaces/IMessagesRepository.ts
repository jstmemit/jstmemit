export abstract class IMessagesRepository {
    public abstract new(messageId: string, channelId: string, content: string, timestamp: Date): Promise<boolean>;

    public abstract getMessagesAmountByChannelId(channelId: string): Promise<number>;

    public abstract getMessagesContentByChannelId(
        channelId: string,
        limit?: number,
        minLength?: number,
        maxLength?: number,
    ): Promise<string[]>;

    public abstract deleteAllByChannelId(channelId: string): Promise<boolean>;

    public abstract deleteAllOlderThan(days?: number): Promise<boolean>;
}
