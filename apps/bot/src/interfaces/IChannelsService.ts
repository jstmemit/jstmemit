import type { channelsTable } from "@jstmemit/db/schema.ts";

export abstract class IChannelsService {
  public abstract addChannel(channelId: string): Promise<boolean>;

  public abstract getChannel(
    channelId: string,
  ): Promise<typeof channelsTable.$inferSelect | undefined>;
}
