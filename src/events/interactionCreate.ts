import type { Interaction } from 'discord.js';
import { MemeController } from '../controllers/MemeController.js';

const memeController = new MemeController();

export const interactionCreate = async (interaction: Interaction): Promise<void> => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'meme') {
    await interaction.reply('Pong!');

    const template = await memeController.chooseMemeTemplate(interaction.channelId);

    const memeUrl = await memeController.generateMeme(template, interaction.channelId);

    await interaction.followUp({ content: memeUrl });
  }
};
