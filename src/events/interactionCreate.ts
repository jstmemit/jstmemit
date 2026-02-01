import { type Interaction } from 'discord.js';
import { enable } from '../commands/enable.js';
import { meme } from '../commands/meme.js';
import { ChannelRepository } from '../repositories/ChannelRepository.js';

const channelRepository: ChannelRepository = new ChannelRepository();

export const interactionCreate = async (interaction: Interaction): Promise<void> => {
  try {
    // buttons
    if (interaction.isButton()) {
      interaction.deferUpdate();
      const [action, channelId] = interaction.customId.split('-');

      switch (action) {
        case 'enable':
          channelRepository.setChannelEnabledState(channelId!, true);
          break;
        case 'disable':
          channelRepository.setChannelEnabledState(channelId!, false);
          break;
        default:
          return;
      }
    }

    // slash commands
    if (interaction.isChatInputCommand()) {
      switch (interaction.commandName) {
        case 'enable':
          await enable(interaction);
          break;

        case 'meme':
          await meme(interaction);
          break;

        default:
          break;
      }
    }
  } catch (e) {
    console.error(e);
  }
};
