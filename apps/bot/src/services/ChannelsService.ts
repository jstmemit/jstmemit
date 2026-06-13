import type { IChannelsService } from "../interfaces/IChannelsService.ts";
import type { IChannelsRepository } from "@jstmemit/db/interfaces/IChannelsRepository";
import type { channelsTable } from "@jstmemit/db/schema.ts";

export class ChannelsService implements IChannelsService {
  private readonly _channelsRepository: IChannelsRepository;

  public constructor(channelsRepository: IChannelsRepository) {
    this._channelsRepository = channelsRepository;
  }

  public async getChannel(
    channelId: string,
  ): Promise<typeof channelsTable.$inferSelect | undefined> {
    return await this._channelsRepository.get(channelId);
  }

  public async addChannel(channelId: string): Promise<boolean> {
    try {
      const channel = await this._channelsRepository.get(channelId);

      if (channel) {
        return true;
      }

      await this._channelsRepository.add(channelId, new Date());

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  }

  public async switchChannel(channelId: string): Promise<boolean> {
    const isEnabled: boolean = await this.isChannelEnabled(channelId);
    await this._channelsRepository.switch(channelId, isEnabled);

    return !isEnabled;
  }

  public async isChannelEnabled(channelId: string): Promise<boolean> {
    try {
      const channel = await this._channelsRepository.get(channelId);

      if (!channel) {
        return false;
      }

      return channel.enabled;
    } catch (error) {
      console.error(error);

      return false;
    }
  }
}
