import {db} from "#database/initializePool.js";
import {channels} from "#database/schema/schema.js";
import {client, log} from "../../../bot.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {and, gte, isNotNull, sql} from "drizzle-orm";
import {generateNewsReport} from "#src/generation/text/generateNewsReport.js";

export const handleSendNews = async () => {
    if (!client.readyAt) {
        await new Promise(resolve => client.once('ready', resolve));
    }

    const newsChannels = await db
        .select()
        .from(channels)
        .where(
            and(
                isNotNull(channels.newsChannel),
                gte(sql`LENGTH(${channels.newsChannel})`, 5)
            )
        )

    log.info(`Sending news to ${newsChannels.length} news channels`);

    for (const channel of newsChannels) {
        try {
            const newsChannelId = channel.newsChannel;
            let newsChannel = client.channels.cache.get(newsChannelId);

            if (!newsChannel) {
                newsChannel = await client.channels.fetch(newsChannelId);
            }

            if (!newsChannel) {
                continue;
            }

            await newsChannel.send({content: await generateNewsReport(channel.channelId)}).then(async (message) => {
                try {
                    await message.react('🤣');
                    await message.react('🤔');
                    await message.react('🫡');
                    await message.react('😱');
                    await message.react('🤬');
                } catch (e) {
                    analytics.captureException(e);
                    log.error(e);
                }
            });
        } catch (error) {
            analytics.captureException(error);
            log.error(error);
        }
    }
}