import {
    type ButtonInteraction,
    ChannelType,
    type ChatInputCommandInteraction,
    InteractionContextType,
    Message,
    type MessageContextMenuCommandInteraction,
    type ModalSubmitInteraction,
    type TextBasedChannel,
    type UserContextMenuCommandInteraction,
} from "discord.js";
import { permissionsService } from "#/container.ts";

export const getTelemetryProperties = function (
    interaction:
        | ChatInputCommandInteraction
        | ButtonInteraction
        | Message
        | ModalSubmitInteraction
        | MessageContextMenuCommandInteraction
        | UserContextMenuCommandInteraction,
): Record<string, string | number | boolean | undefined> {
    const channel: TextBasedChannel | null = interaction.channel;

    const base: Record<string, string | number | boolean | undefined> = {
        interaction_id: interaction.id,
        channel_id: interaction.channelId || undefined,
        guild_id: interaction.guildId || undefined,
        channel_type: channel ? ChannelType[channel.type] : undefined,
        is_thread: channel?.isThread(),
        permissions: permissionsService.getAppPermissionsBitfield(interaction),
        receive_latency_ms: Date.now() - interaction.createdTimestamp,
    };

    if (interaction instanceof Message) {
        return {
            ...base,
            posthogDistinctId: interaction.author.id,
            source: "message",
            guild_locale: interaction.guild?.preferredLocale,
            attachment_count: interaction.attachments.size,
            content_length: interaction.content.length,
            author_is_bot: interaction.author.bot,
        };
    }

    return {
        ...base,
        posthogDistinctId: interaction.user.id,
        source: "interaction",
        user_locale: interaction.locale,
        guild_locale: interaction.guildLocale || undefined,
        context: interaction.context != null ? InteractionContextType[interaction.context] : undefined,
        is_user_install: "1" in (interaction.authorizingIntegrationOwners || {}),
        deferred: interaction.deferred,
        replied: interaction.replied,
    };
};
