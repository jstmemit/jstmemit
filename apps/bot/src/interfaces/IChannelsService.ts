export abstract class IChannelsService {
  public abstract addChannel(channelId: string): Promise<boolean>;
}
