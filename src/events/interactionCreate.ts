import { type Interaction } from 'discord.js';
import { enable } from '../commands/enable.js';
import { meme } from '../commands/meme.js';
import { ChannelRepository } from '../repositories/ChannelRepository.js';
import { help } from '../commands/help.js';

const channelRepository: ChannelRepository = new ChannelRepository();

export const interactionCreate = async (interaction: Interaction): Promise<void> => {
  try {
    // buttons
    if (interaction.isButton()) {
      await interaction.deferUpdate();
      const [action, id] = interaction.customId.split('-');

      switch (action) {
        case 'enable':
          channelRepository.setChannelEnabledState(id!, true);
          await enable(interaction, true);
          break;

        case 'disable':
          channelRepository.setChannelEnabledState(id!, false);
          await enable(interaction, true);
          break;

        case 'execute_enable':
          await enable(interaction);
          break;

        case 'execute_meme':
          await meme(interaction);
          break;

        case 'execute_help':
          await help(interaction);
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

        case 'help':
          await help(interaction);
          break;

        default:
          break;
      }
    }
  } catch (e) {
    console.error(e);
  }
};
