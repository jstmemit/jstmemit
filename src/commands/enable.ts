import {
  ButtonInteraction, ChatInputCommandInteraction, MessageFlags,
} from 'discord.js';
import { ChannelRepository } from '../repositories/ChannelRepository.js';
import { AnalyticsService } from '../services/AnalyticsService.js';
import { getEnableEmbed } from '../embeds/templates/getEnableEmbed.js';
import { MessageRepository } from '../repositories/MessageRepository.js';

const channelRepository: ChannelRepository = new ChannelRepository();
const messageRepository: MessageRepository = new MessageRepository();
const analyticsService: AnalyticsService = new AnalyticsService();

export const enable = async (
  interaction: ChatInputCommandInteraction | ButtonInteraction,
  edit: boolean = false,
) => {
  const channel = (await channelRepository.getChannelByDiscordId(interaction.channelId))[0];

  if (!channel) {
    return;
  }

  const isEnabled: boolean = await channelRepository.isChannelEnabled(channel.discordChannelId);
  const language: string = await channelRepository.getLanguageCodeByDiscordChannelId(channel.discordChannelId);
  const channelMessagesAmount: number = await messageRepository.getMessageCountByChannelId(channel.id);

  if (!isEnabled) {
    await channelRepository.switchChannelByDiscordChannelId(channel.discordChannelId);
  }

  analyticsService.captureEvent(
    channel.discordChannelId,
    'channel-enabled',
    { previouslyEnabled: isEnabled },
  );

  if (edit) {
    await interaction.editReply({
      flags: MessageFlags.IsComponentsV2,
      components: getEnableEmbed(
        isEnabled,
        channel.discordChannelId,
        language,
        channelMessagesAmount,
      ),
    });
  } else if (interaction.isChatInputCommand()) {
    await interaction.reply({
      flags: MessageFlags.IsComponentsV2,
      components: getEnableEmbed(
        isEnabled,
        channel.discordChannelId,
        language,
        channelMessagesAmount,
      ),
    });
  } else {
    await interaction.followUp({
      flags: MessageFlags.IsComponentsV2,
      components: getEnableEmbed(
        isEnabled,
        channel.discordChannelId,
        language,
        channelMessagesAmount,
      ),
    });
  }
};
