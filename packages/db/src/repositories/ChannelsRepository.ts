import type { IChannelsRepository } from "../interfaces/IChannelsRepository.ts";
import { channelsTable } from "../schema.ts";
import { db } from "../index.ts";

export class ChannelsRepository implements IChannelsRepository {
  public async add(channelId: string, addedAt: Date): Promise<boolean> {
    try {
      const channel: typeof channelsTable.$inferInsert = {
        channelId: channelId,
        addedAt: addedAt,
      };

      await db.insert(channelsTable).values(channel);

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  }
}
