export abstract class IImagesRepository {
  public abstract new(
    messageId: string,
    channelId: string,
    imageUrl: string,
    timestamp: Date,
  ): Promise<boolean>;

  public abstract getImagesByChannelId(
    channelId: string,
    timestamp: Date,
    limit?: number,
  ): Promise<string[]>;
}
