import { t } from '../i18n/utils.js';

export const commands = [
  {
    name: 'meme',
    displayName: t('commandMemeDisplayName', 'english'),
    description: t('commandMemeDescription', 'english'),
    showInHelp: true,
  },
  {
    name: 'enable',
    displayName: t('commandEnableDisplayName', 'english'),
    description: t('commandEnableDescription', 'english'),
    showInHelp: true,
  },
  {
    name: 'help',
    displayName: t('commandHelpDisplayName', 'english'),
    description: t('commandHelpDescription', 'english'),
    showInHelp: true,
  },
];
