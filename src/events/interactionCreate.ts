import { type Interaction } from 'discord.js';
import { enable } from '../commands/enable.js';
import { meme } from '../commands/meme.js';
import { help } from '../commands/help.js';
import { ChannelRepository } from '../repositories/ChannelRepository.js';
import { VoteService } from '../services/VoteService.js';
import { getButtons } from '../embeds/helpers/getButtons.js';

const channelRepository = new ChannelRepository();
const voteService = new VoteService();

export const interactionCreate = async (
  interaction: Interaction,
): Promise<void> => {
  try {
    if (interaction.isButton()) {
      const [action, ...rest] = interaction.customId.split('-');
      const id = rest.join('-');

      switch (action) {
        case 'enable':
          await interaction.deferUpdate();
          channelRepository.setChannelEnabledState(id, true);
          await enable(interaction, true);
          break;

        case 'disable':
          await interaction.deferUpdate();
          channelRepository.setChannelEnabledState(id, false);
          await enable(interaction, true);
          break;

        case 'execute_enable':
          await interaction.deferUpdate();
          await enable(interaction);
          break;

        case 'execute_meme':
          await interaction.deferUpdate();
          await meme(interaction);
          break;

        case 'execute_help':
          await interaction.deferUpdate();
          await help(interaction);
          break;

        case 'like':
        case 'dislike': {
          if (voteService.hasVoted(id, interaction.user.id)) {
            return;
          }

          const { likes, dislikes } = voteService.vote(
            id,
            interaction.user.id,
            interaction.channelId,
            action,
          );

          await interaction.update({
            components: [getButtons(likes, dislikes, id)],
          });
          break;
        }

        case 'regenerate': {
          await interaction.deferUpdate();
          await meme(interaction);
          break;
        }

        default:
          return;
      }
    }

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
