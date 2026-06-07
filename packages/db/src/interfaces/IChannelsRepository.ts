export abstract class IChannelsRepository {
  public abstract add(channelId: string, addedAt: Date): Promise<boolean>;
}
