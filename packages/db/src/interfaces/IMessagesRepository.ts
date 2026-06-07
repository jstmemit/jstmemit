export abstract class IMessagesRepository {
  public abstract new(
    messageId: string,
    channelId: string,
    content: string,
    timestamp: Date,
  ): Promise<boolean>;
}
