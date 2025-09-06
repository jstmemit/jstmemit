import {getChannelSettings} from "../../database/queries/getChannelSettings.js";
import {changeChannelSettings} from "../../database/queries/changeChannelSettings.js";
import {handlePermissionCheck} from "./handlePermissionCheck.js";
import {analytics} from "#src/analytics/initializeAnalytics.js";
import {log} from "../../../bot.js";

export const handleNewsChannel = async interaction => {
    if (!await handlePermissionCheck(interaction, '32', 'Manage Server')) {
        return;
    }
    try {
        await interaction.deferUpdate();

        const channelId = interaction.channelId;
        let linked_channelId = null;

        // unlink channel if no ID is provided
        if (interaction.values) {
            linked_channelId = interaction.values[0];
        }
        if (!linked_channelId) {
            linked_channelId = null;
        }

        const currentSettings = await getChannelSettings(channelId);
        const newSettings = {
            ...currentSettings,
            channelId,
            newsChannel: linked_channelId
        };

        await analytics.capture({
            distinctId: interaction.channelId,
            event: 'settings_changed',
            properties: {
                newsChannel: newSettings.newsChannel,
            },
        })

        await analytics.flush()

        await changeChannelSettings(newSettings);
    } catch (error) {
        log.error("Error linking channel:", error);
    }
};