import type { IChannelsService } from "../interfaces/IChannelsService.ts";
import type { IChannelsRepository } from "@jstmemit/db/interfaces/IChannelsRepository";

export class ChannelsService implements IChannelsService {
  private readonly _channelsRepository: IChannelsRepository;

  public constructor(channelsRepository: IChannelsRepository) {
    this._channelsRepository = channelsRepository;
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
}
