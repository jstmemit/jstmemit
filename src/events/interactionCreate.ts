import { type Interaction } from 'discord.js';
import { enable } from '../commands/enable.js';
import { meme } from '../commands/meme.js';

export const interactionCreate = async (interaction: Interaction): Promise<void> => {
  try {
    // buttons
    if (interaction.isButton()) {

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
