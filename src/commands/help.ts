import {
  type ButtonInteraction,
  ChatInputCommandInteraction, MessageFlags,
} from 'discord.js';
import { getHelpEmbed } from '../embeds/templates/getHelpEmbed.js';

export const help = async (
  interaction: ChatInputCommandInteraction | ButtonInteraction,
) => {
  if (interaction.isChatInputCommand()) {
    await interaction.reply({
      flags: MessageFlags.IsComponentsV2,
      // TODO: temporary banner url
      components: getHelpEmbed('en', 'https://media.discordapp.net/attachments/1385705438858842184/1467475247333642341/rounded_banner.png?ex=69808453&is=697f32d3&hm=d83cd143f4724f609472cc8edf918caf1ba30043a6737ac93f8582454cf78651&=&format=webp&quality=lossless'),
    });
  } else {
    await interaction.followUp({
      flags: MessageFlags.IsComponentsV2,
      components: getHelpEmbed('en', 'https://media.discordapp.net/attachments/1385705438858842184/1467475247333642341/rounded_banner.png?ex=69808453&is=697f32d3&hm=d83cd143f4724f609472cc8edf918caf1ba30043a6737ac93f8582454cf78651&=&format=webp&quality=lossless'),
    });
  }
};
