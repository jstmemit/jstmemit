import { AttachmentBuilder, type ChatInputCommandInteraction } from 'discord.js';
import type { MemeTemplate } from '../models/MemeTemplate.js';
import { MemeController } from '../controllers/MemeController.js';

const memeController = new MemeController();

export const meme = async (interaction: ChatInputCommandInteraction): Promise<void> => {
  await interaction.deferReply();
  const template: MemeTemplate = await memeController.chooseMemeTemplate(interaction.channelId);

  const memeUrl: string = await memeController.generateMeme(template, interaction.channelId);
  const attachment = new AttachmentBuilder(memeUrl, { name: 'meme.webp' });

  await interaction.followUp({ files: [attachment] });
};
