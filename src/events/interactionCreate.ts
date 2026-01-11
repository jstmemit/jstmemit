import type { Interaction } from 'discord.js';
import { MemeRepository } from '../repositories/MemeRepository.js';
import { MemeController } from '../controllers/MemeController.js';

const memeRepository = new MemeRepository();
const memeController = new MemeController();

export const interactionCreate = async (interaction: Interaction): Promise<void> => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'meme') {
    await interaction.reply('Pong!');

    const template = await memeController.chooseMemeTemplate(interaction.channelId);

    const memeUrl = await memeRepository.generateMeme(template, ['Hello', 'World']);

    await interaction.followUp({ content: memeUrl });
  }
};
