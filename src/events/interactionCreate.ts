import type { Interaction } from 'discord.js';
// import { MemeRepository } from '../repositories/MemeRepository.js';

// const memeRepository = new MemeRepository();

export const interactionCreate = async (interaction: Interaction): Promise<void> => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'meme') {
    await interaction.reply('Pong!');
    // console.log(await memeRepository.getMemeTemplates());
  }
};
