export abstract class IContextService {
  public abstract saveContent(
    messageId: string,
    channelId: string,
    content: string,
  ): Promise<boolean>;
}
