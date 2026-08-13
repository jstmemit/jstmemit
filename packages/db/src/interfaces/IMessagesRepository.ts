import type { messagesTable } from "../schema.ts";

export abstract class IMessagesRepository {
    public abstract new(messages: readonly (typeof messagesTable.$inferInsert)[]): Promise<number>;

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
