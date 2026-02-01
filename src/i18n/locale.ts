export const locale: Record<string, Record<string, string>> = {
  english: {
    helpTitle: 'Help',
    helpDescription: 'Hi! I am a **Jstmemit**, a meme generating bot that makes memes based on the chat messages in this channel. Here are some commands you can use to interact with me:',

    settingsFooterChannelId: 'Channel ID:',

    settingsStatusEnabled: '🎉 Bot is ready!',
    settingsStatusDisabled: '⛔ Training is **disabled** in this channel!',

    notEnoughContextTitle: '🤓  Bot is still collecting context! ',
    notEnoughContextDescription: "Jstmemit couldn't generate a meme this time because it needs more training data from this channel. Sending both images (or GIFs) and text messages will improve meme quality.\n\nMessages in memory: **{{amount}}/30**",

    enableDescription: 'Bot is disabled in this channel! To respect your privacy, Jstmemit needs to be enabled before it can start learning from messages here. Click on the button below to continue.',
    enableDescriptionReady: 'Setup is finished! Bot is training on new messages and will start generating memes as soon as it has ~30 messages in its memory. You can change settings in the menu below.',
    enableMessagesInMemory: 'Messages in memory: **{{amount}}/30** ',
    enableMessagesInMemoryEnough: 'Messages in memory: **{{amount}}** ',

    btnDisable: 'Disable',
    btnDisableTraining: 'Disable training',
    btnEnable: 'Enable',
    btnEnableTraining: 'Enable training',
    btnEraseData: 'Erase Data',
    btnSettings: 'Open settings',
    btnTurnOn: 'Turn on',
    btnTurnOff: 'Turn off',

    loading: 'Loading...',

    yes: 'Yes',
    no: 'No',

    commandMemeDisplayName: '🎭 Meme generation',
    commandMemeDescription: 'Generate a meme with a random template',

    commandEnableDisplayName: '⚡ Setup training',
    commandEnableDescription: 'Enable/disable training for this channel',

    commandHelpDisplayName: '❓ Help',
    commandHelpDescription: 'Show all available commands',

    errorText: 'An error happened white generating the meme. Please try again later.',
  },
};
