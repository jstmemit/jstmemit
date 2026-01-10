import type { Interaction } from 'discord.js';

export const interactionCreate = async (interaction: Interaction): Promise<void> => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'meme') {
    await interaction.reply('Pong!');
  }
};
