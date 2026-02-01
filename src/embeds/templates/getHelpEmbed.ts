import {
  ContainerBuilder,
  TextDisplayBuilder,
} from 'discord.js';
import { t } from '../../i18n/utils.js';
import { commands } from '../../config/commands.js';

export const getHelpEmbed = (language: string, bannerUrl: string) => {
  const containers = [];

  const headerContainer = new ContainerBuilder();

  headerContainer.addTextDisplayComponents(
    new TextDisplayBuilder().setContent(t('helpDescription', language)),
  );

  headerContainer.addMediaGalleryComponents((gallery) => gallery.addItems({ media: { url: bannerUrl } }));

  containers.push(headerContainer);

  const showCommands = commands.filter((cmd) => cmd.showInHelp);

  // eslint-disable-next-line no-restricted-syntax
  for (const command of showCommands) {
    const commandContainer = new ContainerBuilder();

    commandContainer.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `**${command.displayName}** \`/${command.name}\`\n${command.description}`,
      ),
    );

    containers.push(commandContainer);
  }

  return containers;
};
