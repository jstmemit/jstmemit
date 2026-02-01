import {
  ActionRowBuilder, ButtonBuilder, ButtonStyle, ContainerBuilder, TextDisplayBuilder,
} from 'discord.js';
import { t } from '../../i18n/utils.js';
import { createProgressBar } from '../helpers/createProgressBar.js';

export const getEnableEmbed = (
  isEnabled: boolean,
  discordChannelId: string,
  language: string,
  channelMessagesAmount: number = 0,
) => {
  const progressBar: string = createProgressBar(channelMessagesAmount, 30, 10);

  return [
    new ContainerBuilder()
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          `# ${isEnabled ? t('settingsStatusEnabled', language) : t('settingsStatusDisabled', language)}`,
        ),
      )
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          isEnabled ? t('enableDescriptionReady', language) : t('enableDescription', language),
        ),
      )
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          channelMessagesAmount < 30
            ? t('enableMessagesInMemory', language, { amount: channelMessagesAmount })
            : t('enableMessagesInMemoryEnough', language, { amount: channelMessagesAmount }),
        ),
      )
      .addTextDisplayComponents(new TextDisplayBuilder().setContent(progressBar))
      .addActionRowComponents(
        new ActionRowBuilder<ButtonBuilder>().addComponents(
          new ButtonBuilder()
            .setStyle(isEnabled ? ButtonStyle.Danger : ButtonStyle.Success)
            .setLabel(isEnabled ? t('btnDisableTraining', language) : t('btnEnableTraining', language))
            .setCustomId(`${isEnabled ? 'disable' : 'enable'}-${discordChannelId}`),
          new ButtonBuilder()
            .setStyle(ButtonStyle.Secondary)
            .setLabel(t('btnSettings', language))
            .setCustomId('settings-open'),
        ),
      ),
  ];
};
