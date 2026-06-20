import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IChannelsRepository } from "@jstmemit/db/interfaces/IChannelsRepository";
import type { channelsTable } from "@jstmemit/db/schema.ts";

export class ChannelsService implements IChannelsService {
    private readonly _channelsRepository: IChannelsRepository;

    public constructor(channelsRepository: IChannelsRepository) {
        this._channelsRepository = channelsRepository;
    }

    /**
     * Calls ChannelsRepository to fetch channel information
     * by passed channelId.
     *
     * @param channelId
     *
     * @author Jia Miao Hui
     */
    public async getChannel(
        channelId: string,
    ): Promise<typeof channelsTable.$inferSelect | undefined> {
        return await this._channelsRepository.get(channelId);
    }

    /**
     * Gets current channel status (enabled or disabled) and
     * calls ChannelsRepository to change it.
     *
     * @param channelId
     *
     * @author Kyrylo Maliuha
     */
    public async switchChannel(channelId: string): Promise<boolean> {
        const channel: typeof channelsTable.$inferSelect =
            await this._channelsRepository.upsert(channelId, new Date());

        await this._channelsRepository.switch(channelId, channel.enabled);

        return !channel.enabled;
    }

    /**
     * Upserts a channel into database and returns if it's enabled or not.
     *
     * @param channelId
     *
     * @author Kyrylo Maliuha
     */
    public async isChannelEnabled(channelId: string): Promise<boolean> {
        try {
            const channel = await this._channelsRepository.upsert(
                channelId,
                new Date(),
            );

            return channel.enabled;
        } catch (error) {
            console.error(error);

            return false;
        }
    }

    /**
     * Modifies fields for a channel by its id
     *
     * @param channelId
     * @param channel
     *
     * @author Kyrylo Maliuha
     */
    public async setChannel(
        channelId: string,
        channel: typeof channelsTable.$inferSelect,
    ): Promise<boolean> {
        try {
            await this._channelsRepository.set(channelId, channel);

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    }
}
