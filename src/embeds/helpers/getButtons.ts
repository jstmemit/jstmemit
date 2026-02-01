import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} from 'discord.js';

export const getButtons = (
  likes: number,
  dislikes: number,
  analyticsId: string,
) => new ActionRowBuilder<ButtonBuilder>().addComponents(
  new ButtonBuilder()
    .setStyle(ButtonStyle.Secondary)
    .setLabel(`👍 ${likes}`)
    .setCustomId(`like-${analyticsId}`),
  new ButtonBuilder()
    .setStyle(ButtonStyle.Secondary)
    .setLabel('🔄')
    .setCustomId(`regenerate-${analyticsId}`),
  new ButtonBuilder()
    .setStyle(ButtonStyle.Secondary)
    .setLabel(`👎 ${dislikes}`)
    .setCustomId(`dislike-${analyticsId}`),
);
