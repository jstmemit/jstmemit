import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IChannelsRepository } from "@jstmemit/db/interfaces/IChannelsRepository";
import type { channelsTable } from "@jstmemit/db/schema.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { client } from "#/bot.ts";
import { type BaseMessageOptions, type Channel, MessageFlags } from "discord.js";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import ms from "ms";

export class ChannelsService implements IChannelsService {
    private readonly _channelsRepository: IChannelsRepository;
    private readonly _messagesRepository: IMessagesRepository;
    private readonly _cacheService: ICacheService;

    public constructor(
        channelsRepository: IChannelsRepository,
        messagesRepository: IMessagesRepository,
        cacheService: ICacheService,
    ) {
        this._channelsRepository = channelsRepository;
        this._messagesRepository = messagesRepository;
        this._cacheService = cacheService;
    }

    /**
     * Calls ChannelsRepository to fetch channel information
     * by passed channelId.
     *
     * @param channelId
     * @param upsert
     *
     * @author Jia Miao Hui
     */
    public async getChannel(
        channelId: string,
        upsert?: boolean,
    ): Promise<typeof channelsTable.$inferSelect | undefined> {
        return await this._getCachedChannel(channelId, upsert);
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
        const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsRepository.upsert(
            channelId,
            new Date(),
        );

        if (!channel) {
            return false;
        }

        await this._channelsRepository.switch(channelId, channel.enabled);
        await this._cacheService.delete(`context:channel:${channelId}`);

        return !channel.enabled;
    }

    /**
     * Upserts a channel into database and returns if it's enabled or not.
     *
     * @param channelId
     * @param upsert
     *
     * @author Kyrylo Maliuha
     */
    public async isChannelEnabled(channelId: string, upsert?: boolean): Promise<boolean> {
        try {
            const channel = await this._getCachedChannel(channelId, upsert);

            if (!channel) {
                return false;
            }

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
    public async setChannel(channelId: string, channel: typeof channelsTable.$inferSelect): Promise<boolean> {
        try {
            await this._channelsRepository.set(channelId, channel);

            await this._cacheService.delete(`context:channel:${channelId}`);

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    }

    /**
     * Deletes all channel messages, disables the channel
     * and invalidates context cache for the channel
     *
     * @param channelId
     *
     * @author Kyrylo Maliuha
     */
    public async deleteChannelData(channelId: string): Promise<boolean> {
        try {
            await this._messagesRepository.deleteAllByChannelId(channelId);
            await this._channelsRepository.switch(channelId, true);

            await Promise.all([
                this._cacheService.delete(`context:texts:${channelId}`),
                this._cacheService.delete(`context:images:${channelId}`),
                this._cacheService.delete(`context:avatars:${channelId}`),
                this._cacheService.delete(`context:channel:${channelId},`),
            ]);

            return true;
        } catch (e) {
            console.error(e);

            return false;
        }
    }

    /**
     * Roll channel's frequency
     *
     * @param channelId
     *
     * @author Kyrylo Maliuha
     */
    public async rollChannelFrequency(channelId: string): Promise<boolean> {
        const channel = await this._getCachedChannel(channelId);

        if (!channel) {
            return false;
        }

        if (channel.frequency <= 0) return false;

        const roll: number = Math.floor(Math.random() * channel.frequency);

        return roll === 0;
    }

    /**
     * Sends message components to a channel
     *
     * @param channelId
     * @param components
     *
     * @author Kyrylo Maliuha
     */
    public async sendMessage(channelId: string, components: BaseMessageOptions["components"]): Promise<void> {
        const channel: Channel | undefined = client.channels.cache.get(channelId);
        if (channel && channel.isSendable()) {
            await channel.send({
                flags: MessageFlags.IsComponentsV2,
                components,
            });
        }
    }

    /**
     * Gets a channel from cache and upserts it into the database
     * if it's not there yet
     *
     * @param channelId
     * @param upsert
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _getCachedChannel(
        channelId: string,
        upsert: boolean = false,
    ): Promise<typeof channelsTable.$inferSelect | undefined> {
        let channel;

        if (upsert) {
            channel = await this._cacheService.getOrSet(
                `context:channel:${channelId}`,
                (): Promise<typeof channelsTable.$inferSelect | undefined> =>
                    this._channelsRepository.upsert(channelId, new Date()),
                ms("1m"),
            );
        } else {
            channel = await this._cacheService.getOrSet(
                `context:channel:${channelId}`,
                (): Promise<typeof channelsTable.$inferSelect | undefined> => this._channelsRepository.get(channelId),
                ms("5m"),
            );
        }

        if (!channel) {
            return undefined;
        }

        return { ...channel, addedAt: new Date(channel.addedAt) };
    }
}
