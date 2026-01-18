import { AttachmentBuilder, type Interaction } from 'discord.js';
import { MemeController } from '../controllers/MemeController.js';
import type { MemeTemplate } from '../models/MemeTemplate.js';

const memeController = new MemeController();

export const interactionCreate = async (interaction: Interaction): Promise<void> => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'meme') {
    await interaction.deferReply();
    const template: MemeTemplate = await memeController.chooseMemeTemplate(interaction.channelId);

    const memeUrl: string = await memeController.generateMeme(template, interaction.channelId);
    const attachment = new AttachmentBuilder(memeUrl, { name: 'meme.png' });

    await interaction.followUp({ files: [attachment] });
  }
};
