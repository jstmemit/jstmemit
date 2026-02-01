export const locale: Record<string, Record<string, string>> = {
  english: {
    helpTitle: 'Help',
    helpDescription: 'Hi! I am a **Jstmemit**, a meme generating bot that makes memes based on the chat messages in this channel. Here are some commands you can use to interact with me:',

    settingsTitle: 'Bot settings',
    settingsDescription: 'This is your control panel for the bot. Here you can customize how the bot behaves in this channel.',
    settingsFooterDisabled: '🔴 Training is **disabled** in this channel!',
    settingsFooterNotEnoughContext: 'Messages in memory: **{{amount}}/30**  {{progressBar}}',
    settingsFooterReady: '🧠  Enough context collected! **{{amount}} messages**',

    settingsButtonGeneralSettings: 'General',
    settingsButtonMemeSettings: 'Meme Generation',
    settingsButtonDataRetentionSettings: 'Data Retention',
    settingsButtonPremiumSettings: 'Premium',
    settingsButtonBetaSettings: 'Beta Features',

    settingsMemesTitle: 'Meme Generation',
    settingsMemesDescription: 'This section contains options related to random memes in the chat. You can control how often bot is going to send memes and also what memes do you want to see.',
    settingsMemesFrequencyTitle: 'Frequency',
    settingsMemesFrequencyDescription: 'How often should the bot send a random meme in the chat without being asked to?',

    settingsMemesFrequencyOptionNeverTitle: 'Never',
    settingsMemesFrequencyOptionNeverDescription: "Don't send memes, unless requested via a command",

    settingsMemesFrequencyOptionHardlyEverTitle: 'Hardly ever',
    settingsMemesFrequencyOptionHardlyEverDescription: 'Once every ~100 messages',

    settingsMemesFrequencyOptionRarelyTitle: 'Rarely',
    settingsMemesFrequencyOptionRarelyDescription: 'Once every ~50 messages',

    settingsMemesFrequencyOptionSometimesTitle: 'Sometimes',
    settingsMemesFrequencyOptionSometimesDescription: 'Once every ~20 messages (recommended)',

    settingsMemesFrequencyOptionOftenTitle: 'Often',
    settingsMemesFrequencyOptionOftenDescription: 'Once every ~10 messages',

    settingsMemesTemplatesTitle: 'What memes are going to be sent?',
    settingsMemesTemplatesDescription: "You can choose what memes you want to see in the chat. You can also disable some of them if you don't like them.",

    settingsMemesTemplatesOptionWojakPointingTitle: 'Wojak Pointing',
    settingsMemesTemplatesOptionUncannyTitle: 'Uncanny',
    settingsMemesTemplatesOptionSteppedInShitTitle: 'Stepped in shit',
    settingsMemesTemplatesOptionSpeechbubbleTitle: 'Speech bubble',
    settingsMemesTemplatesOptionLooksAtPaperAngryTitle: 'Looks at paper angry',
    settingsMemesTemplatesOptionFancyBearTitle: 'Winnie the Pooh',
    settingsMemesTemplatesOptionCycleTitle: 'Cycle',
    settingsMemesTemplatesOptionGreentextTitle: 'Greentext',
    settingsMemesTemplatesOptionIsThisAPigeonTitle: 'Is this a pigeon?',
    settingsMemesTemplatesOptionYesChadTitle: 'Yes Chad',
    settingsMemesTemplatesOptionTextingTitle: 'Texting',
    settingsMemesTemplatesOptionConnorTitle: 'Connor',
    settingsMemesTemplatesOptionBigThumbsUpTitle: 'Big Thumbs Up',
    settingsMemesTemplatesOptionBuzzTitle: 'Buzz',
    settingsMemesTemplatesOptionSpongebobTitle: 'SpongeBob',
    settingsMemesTemplatesOptionCryingTitle: 'Crying',
    settingsMemesTemplatesOptionAbsoluteCinemaTitle: 'Absolute Cinema',
    settingsMemesTemplatesOptionLiveReactionTitle: 'Live Reaction',
    settingsMemesTemplatesOptionTf2HahahaTitle: 'TF2 Hahaha',
    settingsMemesTemplatesOptionPoliticalCompassTitle: 'Political Compass',
    settingsMemesTemplatesOptionSleepyTitle: 'Sleepy',
    settingsMemesTemplatesOptionWhyDoYouLikeThisMovieTitle: 'Why do you like this movie?',
    settingsMemesTemplatesOptionHomerHidingTitle: 'Homer Hiding',
    settingsMemesTemplatesOptionSpongebobHappyTitle: 'SpongeBob Happy',
    settingsMemesTemplatesOptionSupermanTitle: 'Superman',
    settingsMemesTemplatesOptionStonksTitle: 'Stonks',
    settingsMemesTemplatesOptionSleepyThinkingTitle: 'Trying to sleep at 7AM',
    settingsMemesTemplatesOptionNewsReporterSittingTitle: 'News Reporter announcement',
    settingsMemesTemplatesOptionMissingPieceTitle: 'Last missing Piece',
    settingsMemesTemplatesOptionManLookingUpTitle: 'Man is looking up in horror',
    settingsMemesTemplatesOptionManBehindBlindsTitle: 'Man smiling behind blinds',
    settingsMemesTemplatesOptionDissapointedTitle: 'Dissapointed',
    settingsMemesTemplatesOptionCowLookingIntoOceanTitle: 'Cow looking into ocean',

    settingsDataRetentionTitle: 'Data Retention',
    settingsDataRetentionDescription: 'You can choose how long the bot will keep the data related to this channel. If you want to erase all data, you can also do it here.',

    settingsDataRetentionHowLongTitle: 'How long should the bot keep the data?',
    settingsDataRetentionHowLongDescription: 'After this amount of days, bot will delete saved messages for this channel. More context = better memes.',

    settingsDataRetentionHowLongOption2DaysTitle: '2 days',
    settingsDataRetentionHowLongOption2DaysDescription: 'For very active channels',

    settingsDataRetentionHowLongOption7DaysTitle: '7 days',
    settingsDataRetentionHowLongOption7DaysDescription: 'For active channels',

    settingsDataRetentionHowLongOption14DaysTitle: '14 days',
    settingsDataRetentionHowLongOption14DaysDescription: 'For channels with medium activity (recommended)',

    settingsDataRetentionHowLongOption30DaysTitle: '30 days',
    settingsDataRetentionHowLongOption30DaysDescription: 'For channels with low activity',

    settingsDataRetentionUserImagesTitle: 'Should bot use user sent images in memes?',
    settingsDataRetentionUserImagesDescription: 'If set to **yes**, sometimes instead of using avatars it will use user sent images instead. Only images sent no more than 24 hours ago will be used. __Cannot be disabled due to new Intents limitations, will be fixes soon.__',

    settingsBetaTitle: 'Beta Features',
    settingsBetaDescription: 'These features are not fully tested and may not work as expected. If you find any bugs, please report them in the [Support server](https://discord.gg/n8DFFcnwDt) or email them to [support@jstmemit.com](mailto:support@jstmemit.com).',

    settingsBetaEngineTitle: 'Meme engine',
    settingsBetaEngineDescription: "Based on metrics bot will choose a better engine for your channel, but you can overwrite which meme engine you really want to use with `/meme engine:name`. Currently there are three engines available:\n\n- **v1** - generates meme text with Markov chains. Doesn't have its own logic, so it doesn't understand connections between texts. **(Recommended for speed)**\n- **v2-alpha** - the new engine that transforms channel messages into meme text using LLMs. It has its own logic and in theory this should make better memes, but can be much slower and may not work as expected. **(Recommended for quality)**\n- **v2-alpha-qwen** - same logic as v2-alpha, but uses only self-hosted Qwen 3 model. It is slower and less stable, but gives you more privacy. No training data here is sent to OpenAI or any other third-parties.",

    settingsBetaEngineV1Title: 'v1 - Markov chains (recommended)',
    settingsBetaEngineV1Description: "Doesn't understand connections between different texts on the same meme, but usually random = fun.",

    settingsBetaEngineV2Title: 'v2-alpha - LLMs (recommended)',
    settingsBetaEngineV2Description: 'If you want memes to make any sense and have actual logic, this is the engine you want to use.',

    settingsBetaEngineV2QwenTitle: 'v2-alpha-qwen - LLMs',
    settingsBetaEngineV2QwenDescription: 'Uses self-hosted Qwen model to transform text for memes with logic. Slower, but privacy friendly.',

    settingsFooterChannelId: 'Channel ID:',

    settingsStatusEnabled: '🎉 Bot is ready!',
    settingsStatusDisabled: '🔴 Training is **disabled** in this channel!',

    notEnoughContextTitle: '🤓  Bot is still collecting context! ',
    notEnoughContextDescription: "Jstmemit couldn't generate a meme this time because it needs more training data from this channel. Sending both images (or GIFs) and text messages will improve meme quality.\n\nMessages in memory: **{{amount}}/30**",

    noPermissionsTitle: 'Not enough permissions!',
    noPermissionsDescription: 'To use this command, you need the **{{permission}}** permission.\nPlease ask your server administrators to complete this action.',

    enableDescription: 'Bot is disabled in this channel! To respect your privacy, Jstmemit needs to be enabled before it can start learning from messages here. Click on the button below to continue.',
    enableDescriptionReady: 'Setup is finished! Bot is training on new messages and will start generating memes as soon as it has ~30 messages in its memory. You can change settings in the menu below.',
    enableMessagesInMemory: 'Messages in memory: **{{amount}}/30** ',
    enableMessagesInMemoryEnough: 'Messages in memory: **{{amount}}** ',

    premiumTitle: 'Premium',
    premiumDescription: "You can support the development of this bot by subscribing to premium. This server will receive access to **more customization**, **ability to link channels together** and some other features, which you can see below. More things are coming in the near future!\n\nEverybody on this server will receive **Premium** benefits even if only one person subscribes.\n\n*Sometimes Discord doesn't render the button propery, if it says \"Product unavailable\" you can still get premium in the bot's profile store.*",
    premiumDescriptionSettingsVariant: 'You can support the development of this bot by subscribing to premium. This server will receive access to **more customization**, **ability to link channels together** and some other features. More things are coming in the near future!\n\nEverybody on this server will receive **Premium** benefits even if only one person subscribes.',
    premiumStatusActive: 'Premium is **active** on this server!',
    premiumStatusInactive: 'Premium is **not active** on this server',

    premiumCustomizationTitle: 'More customization',
    premiumCustomizationDescription: 'These features will give you more control over how the bot looks and behaves in this channel. Features are isolated on the channel level, so you can have different settings in different channels.',

    premiumSetOwnWatermarkTitle: 'Set your own watermark',
    premiumSetOwnWatermarkDescription: 'By default there are no watermarks on memes, but with premium you can set your own server logo as a watermark on memes. It will be placed in the bottom right corner of the meme.',
    premiumSetOwnWatermarkActive: '✔️  Your own watermark is **set**!',
    premiumSetOwnWatermarkInactive: '❌  No watermark is set',

    premiumLinkChannelsTogetherTitle: 'Link channels training data together',
    premiumLinkChannelsTogetherDescription: "If you don't want to flood your general chat with memes, you can link a \"flood\" channel. Bot will operate there with training data from this channel, so it will be able to generate memes based on the context of this channel.",
    premiumLinkChannelsTogetherActive: '✔️  <#{{thischannel}}> and <#{{floodchannel}}> are **linked together**!',
    premiumLinkChannelsTogetherInactive: '❌  No channel is linked',
    premiumSelectChannelPlaceholder: '🔗  Select channel to link',

    premiumTurnOffMentionsTitle: 'Replace @mentions in text memes with usernames',
    premiumTurnOffMentionsDescription: 'By default bot can in some occasions mention users in text memes. Although @everyone and @here mentions are always turned off even in free version.',
    premiumTurnOffMentionsActive: '✔️  Mentions are **being replaced** in text memes!',
    premiumTurnOffMentionsInactive: '❌  Mentions are **not being replaced** in text memes',

    surveyDescription: "You can help us improve Jstmemit by answering a few questions, it won't take more than a minute.",
    surveyProgress: 'Question',
    surveyCompleted: 'Survey completed!',
    surveyCompletedDescription: 'Thank you for answering the questions! Your feedback is very important to us and will help us improve Jstmemit.',
    surveyTextResponseTitle: 'Your response',
    surveyTextResponseLabel: 'Feedback',
    surveySelectOptionsPlaceholder: 'Select one or more options...',
    surveySelectOptionPlaceholder: 'Select an option...',
    surveyWriteYourResponse: '✏️ Write your response',
    surveyOpenLink: '🔗 Open Link',

    btnDisable: 'Disable',
    btnDisableTraining: 'Disable training',
    btnEnable: 'Enable',
    btnEnableTraining: 'Enable training',
    btnEraseData: 'Erase Data',
    btnSettings: 'Open settings',
    btnPremiumActive: 'Premium is active!',
    btnManagePremium: 'Premium settings',
    btnLearnMore: 'Learn more',
    btnTurnOn: 'Turn on',
    btnTurnOff: 'Turn off',
    btnLink: 'Link channels',
    btnLinkBelow: 'Use menu below to link channels',
    btnUnlink: 'Unlink channels',
    btnSetWatermark: 'Set watermark',
    btnRemoveWatermark: 'Remove watermark',
    btnGetPremium: 'Premium - $1.99',

    loading: 'Loading...',

    yes: 'Yes',
    no: 'No',

    errorText: 'An error happened white generating the meme. Please try again later.',
  },
  russian: {
    settingsTitle: 'Настройки',
    settingsDescription: 'Тут вы можете настроить как бот будет себя вести в этом канале.',

    settingsMemesTitle: 'Мемы в чате',
    settingsMemesDescription: 'Тут вы можете настроить как и какие мемы бот будет отправлять в чат без запроса.',
    settingsMemesFrequencyTitle: 'Вероятность',
    settingsMemesFrequencyDescription: 'Как часто бот будет отправлять случайный мем?',

    settingsMemesFrequencyOptionNeverTitle: 'Никогда',
    settingsMemesFrequencyOptionNeverDescription: 'Вообще не отправлять мемы без запроса',

    settingsMemesFrequencyOptionHardlyEverTitle: 'Очень редко',
    settingsMemesFrequencyOptionHardlyEverDescription: 'Раз в ~100 сообщений',

    settingsMemesFrequencyOptionRarelyTitle: 'Редко',
    settingsMemesFrequencyOptionRarelyDescription: 'Раз в ~50 сообщений',

    settingsMemesFrequencyOptionSometimesTitle: 'Иногда',
    settingsMemesFrequencyOptionSometimesDescription: 'Раз в ~20 сообщений (рекомендуется)',

    settingsMemesFrequencyOptionOftenTitle: 'Часто',
    settingsMemesFrequencyOptionOftenDescription: 'Раз в ~10 сообщений',

    settingsMemesTemplatesTitle: 'Какие мемы будут отправляться?',
    settingsMemesTemplatesDescription: 'Вы можете выбрать какие мемы вы хотите видеть в чате. Вы также можете отключить некоторые из них, если они вам не нравятся.',

    settingsMemesTemplatesOptionWojakPointingTitle: 'Чел указывает пальцем',
    settingsMemesTemplatesOptionUncannyTitle: 'Uncanny',
    settingsMemesTemplatesOptionSteppedInShitTitle: 'Наступил в говно',
    settingsMemesTemplatesOptionSpeechbubbleTitle: 'Сказал что-то',
    settingsMemesTemplatesOptionLooksAtPaperAngryTitle: 'Смотрит на бумагу сердито',
    settingsMemesTemplatesOptionFancyBearTitle: 'Винни Пух',
    settingsMemesTemplatesOptionCycleTitle: 'Цикл',
    settingsMemesTemplatesOptionGreentextTitle: 'Гринтекст',
    settingsMemesTemplatesOptionIsThisAPigeonTitle: 'Это голубь?',
    settingsMemesTemplatesOptionYesChadTitle: 'Чад',
    settingsMemesTemplatesOptionTextingTitle: 'Пишет новости',
    settingsMemesTemplatesOptionConnorTitle: 'Коннор',
    settingsMemesTemplatesOptionBigThumbsUpTitle: 'Молодец, палец вверх',
    settingsMemesTemplatesOptionBuzzTitle: 'Баззлайтер',
    settingsMemesTemplatesOptionSpongebobTitle: 'Губка Боб',
    settingsMemesTemplatesOptionCryingTitle: 'Плачет',
    settingsMemesTemplatesOptionAbsoluteCinemaTitle: 'Абсолютное кино',
    settingsMemesTemplatesOptionLiveReactionTitle: 'Live Reaction',
    settingsMemesTemplatesOptionTf2HahahaTitle: 'TF2 Хахаха',
    settingsMemesTemplatesOptionPoliticalCompassTitle: 'Полит. координаты',
    settingsMemesTemplatesOptionSleepyTitle: 'Сонный',
    settingsMemesTemplatesOptionWhyDoYouLikeThisMovieTitle: 'Почему тебе нравится этот фильм?',
    settingsMemesTemplatesOptionHomerHidingTitle: 'Гомер прячется',
    settingsMemesTemplatesOptionSpongebobHappyTitle: 'Губка Боб счастлив',

    settingsFooterDisabled: '🔴 Обучение **отключено** в этом канале!',
    settingsFooterNotEnoughContext: 'Сообщений в памяти: **{{amount}}/30**  {{progressBar}}',
    settingsFooterReady: '🧠 Собрано достаточно контекста! **{{amount}} сообщений**',
    settingsButtonGeneralSettings: 'Основные',
    settingsButtonMemeSettings: 'Мемы в чате',
    settingsButtonDataRetentionSettings: 'Хранение данных',
    settingsButtonPremiumSettings: 'Премиум',
    settingsButtonBetaSettings: 'Бета функции',

    settingsDataRetentionTitle: 'Хранение данных',
    settingsDataRetentionDescription: 'Вы можете выбрать как долго бот будет хранить данные связанные с этим каналом. Если вы хотите удалить все сохраненные сообщения, вы также можете сделать это здесь.',

    settingsDataRetentionHowLongTitle: 'Как долго бот будет хранить данные?',
    settingsDataRetentionHowLongDescription: 'После этого количества дней бот удалит сохраненные сообщения для этого канала. Но чем больше контекста = тем лучше мемы.',

    settingsDataRetentionHowLongOption2DaysTitle: '2 дня',
    settingsDataRetentionHowLongOption2DaysDescription: 'Для очень активных каналов',

    settingsDataRetentionHowLongOption7DaysTitle: '7 дней',
    settingsDataRetentionHowLongOption7DaysDescription: 'Для активных каналов',

    settingsDataRetentionHowLongOption14DaysTitle: '14 дней',
    settingsDataRetentionHowLongOption14DaysDescription: 'Для каналов со средней активностью (рекомендуется)',

    settingsDataRetentionHowLongOption30DaysTitle: '30 дней',
    settingsDataRetentionHowLongOption30DaysDescription: 'Для каналов с низкой активностью',

    settingsDataRetentionUserImagesTitle: 'Использовать ли отправленные картинки в мемах?',
    settingsDataRetentionUserImagesDescription: 'Если включено, то иногда вместо аватаров будут использоваться отправленные картинки. Но только отправленные не более 24 часов назад. __Не может быть отключено из-за новых ограничений Intents у дискорда, будет исправлено скоро.__',

    settingsFooterChannelId: 'ID канала:',

    settingsBetaTitle: 'Бета-функции',
    settingsBetaDescription: 'Эти функции не полностью протестированы и могут не работать как нужно. Если вы обнаружите какие-либо ошибки, сообщите о них на [сервере поддержки](https://discord.gg/n8DFFcnwDt) или отправьте их на [support@jstmemit.com](mailto:support@jstmemit.com). Некоторые изменения этих настроек могут занять более 30 секунд, пожалуйста, будьте терпеливы.',

    settingsBetaEngineTitle: 'Движок для мемов',
    settingsBetaEngineDescription: 'На основе метрик бот выберет лучший движок для вашего канала, но вы можете переопределить, какой движок для мемов вы хотите использовать. В настоящее время доступны три движка:\n\n- **v1** - генерирует текст для мемов с помощью цепей Маркова. Не имеет собственной логики, поэтому не понимает связи между текстами. **(Рекомендуется для скорости)**\n- **v2-alpha** - новый движок, который преобразует сообщения канала в текст мемов с помощью LLM. Имеет собственную логику и теоретически делает мемы лучше, но может быть гораздо медленнее и работать не так, как ожидается. **(Рекомендуется для качества)**\n- **v2-alpha-qwen** - та же логика, что и v2-alpha, но использует локальную модель Qwen 3. Он чуть медленнее и менее стабилен, но даёт намного больше приватности. Здесь никакие обучающие данные не отправляются в OpenAI или другим третьим сторонам.',

    settingsBetaEngineV1Title: 'v1 - Цепи маркова (рекомендуется)',
    settingsBetaEngineV1Description: 'Не понимает связей между разными текстами на одном и том же меме, но обычно случайность = веселье.',

    settingsBetaEngineV2Title: 'v2-alpha - LLM (рекомендуется)',
    settingsBetaEngineV2Description: 'Если вы хотите, чтобы мемы имели какой-то смысл то это тот движок, который вам нужен.',

    settingsBetaEngineV2QwenTitle: 'v2-alpha-qwen - LLM',
    settingsBetaEngineV2QwenDescription: 'Использует локальную модель Qwen для преобразования текста в мемы. Медленнее, но более приватно.',

    settingsStatusEnabled: '🎉 Бот готов!',
    settingsStatusDisabled: '🔴 Бот **отключен** в этом канале!',

    notEnoughContextTitle: '🤓 Бот все еще собирает контекст!',
    notEnoughContextDescription: 'Jstmemit не смог сгенерировать мем в этот раз, потому что ему нужно больше данных для обучения на этом канале.\n\nСообщений в памяти: **{{amount}}/30**',

    noPermissionsTitle: 'Недостаточно прав!',
    noPermissionsDescription: 'Для использования этой команды вам необходимо разрешение **{{permission}}**.\nПожалуйста, попросите администраторов вашего сервера выполнить это действие.',

    enableDescription: 'Бот выключен в этом канале! Чтобы уважать вашу конфиденциальность, Jstmemit необходимо включить, прежде чем он сможет начать обучаться на основе сообщений. Нажмите кнопку ниже, чтобы продолжить.',
    enableDescriptionReady: 'Настройка завершена! Бот теперь обучается на новых сообщениях и начнет генерировать мемы, как только в его памяти наберется ~30 сообщений. Вы можете изменить настройки в меню ниже.',
    enableMessagesInMemory: 'Сообщений в памяти: **{{amount}}/30**',
    enableMessagesInMemoryEnough: 'Сообщений в памяти: **{{amount}}**',

    premiumTitle: 'Премиум',
    premiumDescription: 'Вы можете поддержать разработку этого бота, подписавшись на премиум. Этот сервер получит доступ к **персонализации бота**, **возможности связывать каналы** и некоторым другим функциям, которые вы можете увидеть ниже.\n\nВсе пользователи на этом сервере получат **Премиум** возможности. Даже если только один человек подпишется.',
    premiumDescriptionSettingsVariant: 'Вы можете поддержать разработку этого бота, подписавшись на премиум. Этот сервер получит доступ к **персонализации бота**, **возможности связывать каналы** и некоторым другим функциям. Больше возможностей уже в пути!\n\nВсе пользователи на этом сервере получат **Премиум** возможности. Даже если только один человек подпишется.',
    premiumStatusActive: 'Премиум **активен** на этом сервере!',
    premiumStatusInactive: 'Премиум **не активен** на этом сервере.',

    premiumCustomizationTitle: 'Больше персонализации',
    premiumCustomizationDescription: 'Эти функции дадут вам больше контроля над тем, как бот выглядит и ведет себя в этом канале. Функции изолированы на уровне канала, поэтому вы можете иметь разные настройки в разных каналах.',

    premiumSetOwnWatermarkTitle: 'Собственный водяной знак',
    premiumSetOwnWatermarkDescription: 'По умолчанию на мемах нет вообще никаких водяных знаков, но с премиумом вы можете установить собственный логотип сервера на мемах. Он будет размещен в правом нижнем углу.',
    premiumSetOwnWatermarkActive: '✔️  Собственный водяной знак **установлен**!',
    premiumSetOwnWatermarkInactive: '❌  Водяной знак не установлен',

    premiumLinkChannelsTogetherTitle: 'Связать каналы',
    premiumLinkChannelsTogetherDescription: 'Если вы не хотите засорять общий чат мемами, вы можете привязать канал для "флуда". Бот будет работать там с данными из этого канала, так что он сможет генерировать мемы на основе контекста этого канала.',
    premiumLinkChannelsTogetherActive: '✔️  <#{{thischannel}}> и <#{{floodchannel}}> **связаны**!',
    premiumLinkChannelsTogetherInactive: '❌  Каналы не связаны',
    premiumSelectChannelPlaceholder: '🔗  Выберите канал для связи',

    premiumTurnOffMentionsTitle: 'Отключить @упоминания в текстовых мемах',
    premiumTurnOffMentionsDescription: 'По умолчанию бот может в некоторых случаях упоминать пользователей в текстовых мемах. Хотя упоминания @everyone и @here всегда отключены даже в бесплатной версии.',
    premiumTurnOffMentionsActive: '✔️  Упоминания **заменяются** в текстовых мемах!',
    premiumTurnOffMentionsInactive: '❌  Упоминания **не заменяются** в текстовых мемах',

    surveyDescription: 'Вы можете помочь нам улучшить Jstmemit, ответив на несколько вопросов. Это не займет больше минуты.',
    surveyProgress: 'Вопрос',
    surveyCompleted: 'Опрос завершен!',
    surveyCompletedDescription: 'Спасибо за ваши ответы! Ваш отзыв очень важен для нас и поможет нам улучшить Jstmemit.',
    surveyTextResponseTitle: 'Ваш ответ',
    surveyTextResponseLabel: 'Предложения',
    surveySelectOptionsPlaceholder: 'Выберите один или несколько вариантов...',
    surveySelectOptionPlaceholder: 'Выберите вариант...',
    surveyWriteYourResponse: '✏️ Напишите ваш ответ',
    surveyOpenLink: '🔗 Открыть ссылку',

    btnDisable: 'Отключить',
    btnDisableTraining: 'Отключить обучение',
    btnEnable: 'Включить',
    btnEnableTraining: 'Включить обучение',
    btnEraseData: 'Очистить данные',
    btnSettings: 'Настройки',
    btnPremiumActive: 'Премиум активен!',
    btnManagePremium: 'Настройки премиума',
    btnLearnMore: 'Узнать больше',
    btnTurnOn: 'Включить',
    btnTurnOff: 'Выключить',
    btnLink: 'Связать каналы',
    btnLinkBelow: 'Используйте меню ниже для связи каналов',
    btnUnlink: 'Отвязать каналы',
    btnSetWatermark: 'Установить водяной знак',
    btnRemoveWatermark: 'Убрать водяной знак',
    btnGetPremium: 'Премиум - $1.99',

    loading: 'Загрузка...',

    yes: 'Да',
    no: 'Нет',

    errorText: 'Произошла ошибка при генерации мема. Пожалуйста, попробуйте ещё раз позже.',
  },
  dutch: {
    settingsTitle: 'Instellingen',
    settingsDescription: 'Hier kun je het gedrag van de bot in deze kanaal aanpassen.',

    settingsMemesTitle: "Meme's in de chat",
    settingsMemesDescription: "In deze sectie kun je de meme's aanpassen die de bot in de chat zal sturen zonder dat erom gevraagd wordt.",
    settingsMemesFrequencyTitle: 'Frequentie',
    settingsMemesFrequencyDescription: 'Hoe vaak moet de bot een meme in de chat sturen zonder dat erom gevraagd wordt?',

    settingsMemesFrequencyOptionNeverTitle: 'Nooit',
    settingsMemesFrequencyOptionNeverDescription: "Stuur geen meme's, tenzij erom gevraagd wordt via een command",

    settingsMemesFrequencyOptionHardlyEverTitle: 'Zeer zelden',
    settingsMemesFrequencyOptionHardlyEverDescription: 'Een keer in de ~100 berichten',

    settingsMemesFrequencyOptionRarelyTitle: 'Zelden',
    settingsMemesFrequencyOptionRarelyDescription: 'Een keer in de ~50 berichten',

    settingsMemesFrequencyOptionSometimesTitle: 'Soms',
    settingsMemesFrequencyOptionSometimesDescription: 'Een keer in de ~20 berichten (aanbevolen)',

    settingsMemesFrequencyOptionOftenTitle: 'Vaak',
    settingsMemesFrequencyOptionOftenDescription: 'Een keer in de ~10 berichten',

    settingsMemesTemplatesTitle: "Welke meme's worden er gestuurd?",
    settingsMemesTemplatesDescription: "Je kunt kiezen welke meme's je wilt zien in de chat. Je kunt ook sommige meme's uitschakelen als je ze niet leuk vindt.",

    settingsMemesTemplatesOptionWojakPointingTitle: 'Wojak wijst',
    settingsMemesTemplatesOptionUncannyTitle: 'Uncanny',
    settingsMemesTemplatesOptionSteppedInShitTitle: 'In de stront gestapt',
    settingsMemesTemplatesOptionSpeechbubbleTitle: 'Speechbubble',
    settingsMemesTemplatesOptionLooksAtPaperAngryTitle: 'Kijkt boos naar papier',
    settingsMemesTemplatesOptionFancyBearTitle: 'Winnie de Poeh',
    settingsMemesTemplatesOptionCycleTitle: 'Cycle',
    settingsMemesTemplatesOptionGreentextTitle: 'Greentext',
    settingsMemesTemplatesOptionIsThisAPigeonTitle: 'Is dit een vogel?',
    settingsMemesTemplatesOptionYesChadTitle: 'Ja Chad',
    settingsMemesTemplatesOptionTextingTitle: 'Texting',
    settingsMemesTemplatesOptionConnorTitle: 'Connor',
    settingsMemesTemplatesOptionBigThumbsUpTitle: 'Duim omhoog',
    settingsMemesTemplatesOptionBuzzTitle: 'Buzz',
    settingsMemesTemplatesOptionSpongebobTitle: 'SpongeBob',
    settingsMemesTemplatesOptionCryingTitle: 'Huilen',
    settingsMemesTemplatesOptionAbsoluteCinemaTitle: 'Absoluut cinema',
    settingsMemesTemplatesOptionLiveReactionTitle: 'Live Reaction',
    settingsMemesTemplatesOptionTf2HahahaTitle: 'TF2 Hahaha',
    settingsMemesTemplatesOptionPoliticalCompassTitle: 'Politieke Kompas',
    settingsMemesTemplatesOptionSleepyTitle: 'Slaperig',
    settingsMemesTemplatesOptionWhyDoYouLikeThisMovieTitle: 'Waarom vind je deze film leuk?',
    settingsMemesTemplatesOptionHomerHidingTitle: 'Homer hiding',
    settingsMemesTemplatesOptionSpongebobHappyTitle: 'SpongeBob blij',

    settingsFooterDisabled: '🔴 Training is **uitgeschakeld** in dit kanaal!',
    settingsFooterNotEnoughContext: 'Berichten in geheugen: **{{amount}}/30**  {{progressBar}}',
    settingsFooterReady: '🧠 Genoeg context verzameld! **{{amount}} berichten**',
    settingsButtonGeneralSettings: 'Algemeen',
    settingsButtonMemeSettings: 'Meme Generatie',
    settingsButtonDataRetentionSettings: 'Gegevensbewaring',
    settingsButtonPremiumSettings: 'Premium',

    settingsButtonBetaSettings: 'Bètafuncties',

    settingsBetaTitle: 'Bètafuncties',
    settingsBetaDescription: 'Deze functies zijn niet volledig getest en werken mogelijk niet zoals verwacht. Als je bugs vindt, meld ze dan in de [Support server](https://discord.gg/n8DFFcnwDt) of e-mail ze naar [support@jstmemit.com](mailto:support@jstmemit.com).',

    settingsBetaEngineTitle: 'Meme-engine',
    settingsBetaEngineDescription: "Op basis van statistieken kiest de bot een betere engine voor je kanaal, maar je kunt overschrijven welke meme-engine je echt wilt gebruiken. Momenteel zijn er drie engines beschikbaar:\n\n- **v1** - genereert memetekst met Markov-ketens. Heeft geen eigen logica, dus begrijpt geen verbanden tussen teksten.\n- **v2-alpha** - de nieuwe engine die kanaalberichten omzet in memetekst met behulp van LLM's. Het heeft zijn eigen logica en zou in theorie betere memes moeten maken, maar kan veel langzamer zijn en mogelijk niet werken zoals verwacht.\n- **v2-alpha-qwen** - dezelfde logica als v2-alpha, maar gebruikt alleen zelf-gehoste Qwen 3 model. Het is langzamer en minder stabiel, maar biedt meer privacy. Geen trainingsgegevens worden hier verzonden naar OpenAI of andere derden.",

    settingsBetaEngineV1Title: 'v1 - Markov-ketens (aanbevolen)',
    settingsBetaEngineV1Description: 'Begrijpt geen verbanden tussen teksten op memes, maar meestal is random = leuk.',

    settingsBetaEngineV2Title: "v2-alpha - LLM's (aanbevolen)",
    settingsBetaEngineV2Description: 'Als je wilt dat memes logisch zijn, dan dit is de engine die je wilt gebruiken.',

    settingsBetaEngineV2QwenTitle: "v2-alpha-qwen - LLM's",
    settingsBetaEngineV2QwenDescription: 'Dezelfde logica als v2-alpha, maar langzamer en meer privacy-vriendelijk.',

    settingsDataRetentionTitle: 'Gegevensbewaring',
    settingsDataRetentionDescription: 'Je kunt kiezen hoe lang de bot gegevens met betrekking tot dit kanaal bewaart. Als je alle gegevens wilt wissen, kun je dat hier ook doen.',

    settingsDataRetentionHowLongTitle: 'Hoe lang moet de bot de gegevens bewaren?',
    settingsDataRetentionHowLongDescription: "Na dit aantal dagen zal de bot opgeslagen berichten voor dit kanaal verwijderen. Meer context = betere meme's.",

    settingsDataRetentionHowLongOption2DaysTitle: '2 dagen',
    settingsDataRetentionHowLongOption2DaysDescription: 'Voor zeer actieve kanalen',

    settingsDataRetentionHowLongOption7DaysTitle: '7 dagen',
    settingsDataRetentionHowLongOption7DaysDescription: 'Voor actieve kanalen',

    settingsDataRetentionHowLongOption14DaysTitle: '14 dagen',
    settingsDataRetentionHowLongOption14DaysDescription: 'Voor kanalen met gemiddelde activiteit (aanbevolen)',

    settingsDataRetentionHowLongOption30DaysTitle: '30 dagen',
    settingsDataRetentionHowLongOption30DaysDescription: 'Voor kanalen met lage activiteit',

    settingsDataRetentionUserImagesTitle: "Kan de bot verzonden afbeeldingen gebruiken in meme's?",
    settingsDataRetentionUserImagesDescription: 'Als dit is ingesteld op **ja**, zal de bot soms in plaats van avatars afbeeldingen gebruiken die door gebruikers zijn verzonden. Alleen afbeeldingen die niet ouder zijn dan 24 uur worden gebruikt. __Kan niet worden uitgeschakeld vanwege nieuwe Intents beperkingen, wordt binnenkort opgelost.__',

    settingsFooterChannelId: 'Kanaal ID:',

    settingsStatusEnabled: '🎉 Bot is klaar!',
    settingsStatusDisabled: '🔴 Bot is **uit** in dit kanaal!',

    notEnoughContextTitle: '🤓 Bot verzamelt nog steeds context!',
    notEnoughContextDescription: 'Jstmemit kon deze keer geen meme genereren omdat het meer trainingsgegevens van dit kanaal nodig heeft.\n\nBerichten: **{{amount}}/30**',

    noPermissionsTitle: 'Niet genoeg rechten!',
    noPermissionsDescription: 'Om dit commando te gebruiken, heeft u de **{{permission}}** permissie nodig.\nVraag alstublieft de beheerders van uw server om deze actie uit te voeren.',

    enableDescription: 'De bot is uitgeschakeld in dit kanaal! Om uw privacy te respecteren, moet Jstmemit zijn ingeschakeld voordat het hier kan beginnen met leren van berichten. Klik hieronder op de knop om door te gaan.',
    enableDescriptionReady: 'Installatie voltooid! De bot traint op nieuwe berichten en zal memes genereren zodra het ongeveer 30 berichten in het geheugen heeft. U kunt de instellingen wijzigen in het menu hieronder.',
    enableMessagesInMemory: 'Berichten: **{{amount}}/30**',
    enableMessagesInMemoryEnough: 'Berichten: **{{amount}}**',

    premiumTitle: 'Premium',
    premiumDescription: 'Je kunt de ontwikkeling van deze bot ondersteunen door deze server te abonneren op premium. Deze server krijgt toegang tot **meer personalizatie**, **de mogelijkheid om kanalen aan elkaar te koppelen** en enkele andere functies, die je hieronder kunt zien.\n\nIedereen op deze server krijgt **Premium** voordelen, zelfs als maar een persoon zich abonneert.',
    premiumDescriptionSettingsVariant: 'Je kunt de ontwikkeling van deze bot ondersteunen door deze server te abonneren op premium. Deze server krijgt toegang tot **meer personalizatie**, **de mogelijkheid om kanalen aan elkaar te koppelen** en enkele andere functies. Meer dingen komen binnenkort!\n\nIedereen op deze server krijgt **Premium** voordelen, zelfs als maar een persoon zich abonneert.',

    premiumStatusActive: 'Premium is **actief** op deze server!',
    premiumStatusInactive: 'Premium is **niet actief** op deze server.',

    premiumCustomizationTitle: 'Meer personalisatie',
    premiumCustomizationDescription: 'Deze functies geven je meer controle over hoe de bot eruit ziet en zich gedraagt in dit kanaal. Functies zijn geïsoleerd op het niveau van het kanaal, zodat je verschillende instellingen kunt hebben in verschillende kanalen.',

    premiumSetOwnWatermarkTitle: 'Stel je eigen watermerk in',
    premiumSetOwnWatermarkDescription: "Standaard zijn er geen watermerken op meme's, maar met premium kun je je eigen serverlogo instellen als watermerk op meme's. Het wordt geplaatst in de rechterbenedenhoek van de meme.",
    premiumSetOwnWatermarkActive: '✔️  Je eigen watermerk is **ingesteld**!',
    premiumSetOwnWatermarkInactive: '❌  Geen watermerk ingesteld',

    premiumLinkChannelsTogetherTitle: 'Koppel kanalen samen',
    premiumLinkChannelsTogetherDescription: "Als je je algemene chat niet wilt vervuilen met meme's, kun je een \"flood\" kanaal koppelen. De bot zal daar werken met trainingsdata van dit kanaal, zodat het memes kan genereren op basis van de context van dit kanaal.",
    premiumLinkChannelsTogetherActive: '✔️  <#{{thischannel}}> en <#{{floodchannel}}> zijn **gekoppeld**!',
    premiumLinkChannelsTogetherInactive: '❌  Geen kanaal gekoppeld',
    premiumSelectChannelPlaceholder: '🔗  Selecteer kanaal om te koppelen',

    premiumTurnOffMentionsTitle: "Schakel @mentions uit in tekst meme's",
    premiumTurnOffMentionsDescription: "Standaard kan de bot in sommige gevallen gebruikers vermelden in tekst meme's. Hoewel @everyone en @here vermeldingen altijd zijn uitgeschakeld, zelfs in de gratis versie.",
    premiumTurnOffMentionsActive: "✔️  Mentions worden **vervangen** in tekst meme's!",
    premiumTurnOffMentionsInactive: "❌  Mentions worden **niet vervangen** in tekst meme's",

    surveyDescription: 'U kunt ons helpen Jstmemit te verbeteren door een paar vragen te beantwoorden. Het duurt niet langer dan een minuut.',
    surveyProgress: 'Vraag',
    surveyCompleted: 'Enquête voltooid!',
    surveyCompletedDescription: 'Bedankt voor het beantwoorden van de vragen! Uw feedback is erg belangrijk voor ons en zal ons helpen Jstmemit te verbeteren.',
    surveyTextResponseTitle: 'Uw antwoord',
    surveyTextResponseLabel: 'Feedback',
    surveySelectOptionsPlaceholder: 'Selecteer een of meer opties...',
    surveySelectOptionPlaceholder: 'Selecteer een optie...',
    surveyWriteYourResponse: '✏️ Schrijf uw antwoord',
    surveyOpenLink: '🔗 Link openen',

    btnDisable: 'Uitzetten',
    btnDisableTraining: 'Training uitschakelen',
    btnEnable: 'Aanzetten',
    btnEnableTraining: 'Training aanzetten',
    btnEraseData: 'Gegevens wissen',
    btnSettings: 'Instellingen',
    btnPremiumActive: 'Premium is actief!',
    btnManagePremium: 'Premium instellingen',
    btnLearnMore: 'Meer informatie',
    btnTurnOn: 'Aanzetten',
    btnTurnOff: 'Uitzetten',
    btnLink: 'Kanalen koppelen',
    btnLinkBelow: 'Gebruik onderstaand menu om kanalen te koppelen',
    btnUnlink: 'Kanalen ontkoppelen',
    btnSetWatermark: 'Watermerk instellen',
    btnRemoveWatermark: 'Watermerk verwijderen',
    btnGetPremium: 'Premium - $1.99',

    loading: 'Loading...',

    yes: 'Ja',
    no: 'Nee',

    errorText: 'Er is een fout opgetreden bij het genereren van de meme. Probeer het later opnieuw.',
  },
  ukrainian: {
    settingsTitle: 'Налаштування',
    settingsDescription: 'Тут ви можете змінити як працює бот у цьому каналі.',

    settingsMemesTitle: 'Меми в чаті',
    settingsMemesDescription: 'Тут ви можете налаштувати як і які меми бот буде надсилати в чат без запиту.',
    settingsMemesFrequencyTitle: 'Частота',
    settingsMemesFrequencyDescription: 'Як часто бот буде надсилати рандомний мем?',

    settingsMemesFrequencyOptionNeverTitle: 'Ніколи',
    settingsMemesFrequencyOptionNeverDescription: 'Не надсилати меми без запиту',

    settingsMemesFrequencyOptionHardlyEverTitle: 'Дуже рідко',
    settingsMemesFrequencyOptionHardlyEverDescription: 'Раз в ~100 повідомлень',

    settingsMemesFrequencyOptionRarelyTitle: 'Рідко',
    settingsMemesFrequencyOptionRarelyDescription: 'Раз в ~50 повідомлень',

    settingsMemesFrequencyOptionSometimesTitle: 'Іноді',
    settingsMemesFrequencyOptionSometimesDescription: 'Раз в ~20 повідомлень (рекомендується)',

    settingsMemesFrequencyOptionOftenTitle: 'Часто',
    settingsMemesFrequencyOptionOftenDescription: 'Раз в ~10 повідомлень',

    settingsMemesTemplatesTitle: 'Які меми будуть надсилатися?',
    settingsMemesTemplatesDescription: 'Ви можете вибрати які меми ви хочете бачити в чаті. Ви також можете вимкнути деякі з них, якщо вони вам не подобаються.',

    settingsMemesTemplatesOptionWojakPointingTitle: 'Чел вказує пальцем',
    settingsMemesTemplatesOptionUncannyTitle: 'Uncanny',
    settingsMemesTemplatesOptionSteppedInShitTitle: 'Наступив в лайно',
    settingsMemesTemplatesOptionSpeechbubbleTitle: 'Сказав щось',
    settingsMemesTemplatesOptionLooksAtPaperAngryTitle: 'Дивиться на папір сердито',
    settingsMemesTemplatesOptionFancyBearTitle: 'Вінні Пух',
    settingsMemesTemplatesOptionCycleTitle: 'Цикл',
    settingsMemesTemplatesOptionGreentextTitle: 'Гринтекст',
    settingsMemesTemplatesOptionIsThisAPigeonTitle: 'Це голуб?',
    settingsMemesTemplatesOptionYesChadTitle: 'Так Чад',
    settingsMemesTemplatesOptionTextingTitle: 'Пише новини',
    settingsMemesTemplatesOptionConnorTitle: 'Коннор',
    settingsMemesTemplatesOptionBigThumbsUpTitle: 'Молодець, великий палець вгору',
    settingsMemesTemplatesOptionBuzzTitle: 'Баззлайтер',
    settingsMemesTemplatesOptionSpongebobTitle: 'Губка Боб',
    settingsMemesTemplatesOptionCryingTitle: 'Плаче',
    settingsMemesTemplatesOptionAbsoluteCinemaTitle: 'Абсолютне кіно',
    settingsMemesTemplatesOptionLiveReactionTitle: 'Live Reaction',
    settingsMemesTemplatesOptionTf2HahahaTitle: 'TF2 Хахаха',
    settingsMemesTemplatesOptionPoliticalCompassTitle: 'Політичні координати',
    settingsMemesTemplatesOptionSleepyTitle: 'Сонний',
    settingsMemesTemplatesOptionWhyDoYouLikeThisMovieTitle: 'Чому тобі подобається цей фільм?',
    settingsMemesTemplatesOptionHomerHidingTitle: 'Гомер ховається',
    settingsMemesTemplatesOptionSpongebobHappyTitle: 'Губка Боб щасливий',

    settingsButtonBetaSettings: 'Бета-функції',

    settingsBetaTitle: 'Бета-функції',
    settingsBetaDescription: 'Ці функції не повністю готові та можуть працювати не так, як очікувалося. Якщо ви знайдете будь-які помилки, повідомте про них на [сервері підтримки](https://discord.gg/n8DFFcnwDt) або надішліть на [support@jstmemit.com](mailto:support@jstmemit.com). Деякі зміни тут можуть застосовуватися довше 30 секунд, будь ласка, будьте терплячі.',

    settingsBetaEngineTitle: 'Двіжок для мемів',
    settingsBetaEngineDescription: "На основі метрик бот вибере кращий двіжок для вашого каналу, але ви можете змінити, який двіжок для мемів ви дійсно хочете використовувати. Наразі доступні два двіжок:\n\n- **v1** - генерує текст для мемів за допомогою ланцюгів Маркова. Не має власної логіки, тому не розуміє зв'язків між текстами.\n- **v2-alpha** - новий двіжок, який перетворює повідомлення каналу в текст для мемів за допомогою LLM. Він має власну логіку і теоретично повинен створювати кращі меми, але може бути набагато повільнішим і працювати не так, як очікувалося.\n- **v2-alpha-qwen** - та сама логіка, що і v2-alpha, але використовує локальну модель Qwen 3. Він трохи повільніший і менш стабільний, але надає більше приватності. Ніякі навчальні дані не надсилаються в OpenAI або іншим третім сторонам.",

    settingsBetaEngineV1Title: 'v1 - Ланцюги маркова (рекомендовано)',
    settingsBetaEngineV1Description: "Не розуміє зв'язків між текстами на одному й тому ж мемі, але зазвичай випадковість це смішно.",

    settingsBetaEngineV2Title: 'v2-alpha - LLM (рекомендовано)',
    settingsBetaEngineV2Description: 'Якщо ви хочете, щоб меми мали сенс і реальну логіку, це той двіжок, який вам потрібен.',

    settingsBetaEngineV2QwenTitle: 'v2-alpha-qwen - LLM',
    settingsBetaEngineV2QwenDescription: 'Те саме, що і v2-alpha, але використовує локальну модель Qwen 3. Повільніший, але більш приватний.',

    settingsFooterDisabled: '🔴 Навчання **вимкнено** у цьому каналі!',
    settingsFooterNotEnoughContext: "Повідомлень у пам'яті: **{{amount}}/30**  {{progressBar}}",
    settingsFooterReady: '🧠 Зібрано достатньо контексту! **{{amount}} повідомлень**',
    settingsButtonGeneralSettings: 'Загальні',
    settingsButtonMemeSettings: 'Меми в чаті',
    settingsButtonDataRetentionSettings: 'Зберігання даних',
    settingsButtonPremiumSettings: 'Преміум',
    enableDescriptionReady: "Налаштування завершено! Бот навчається на нових повідомленнях і почне генерувати меми, як тільки в його пам'яті буде ~30 повідомлень. Ви можете змінити налаштування в меню нижче.",
    enableMessagesInMemory: "Повідомлень у пам'яті: **{{amount}}/30**",
    enableMessagesInMemoryEnough: "Повідомлень у пам'яті: **{{amount}}**",

    settingsDataRetentionTitle: 'Зберігання даних',
    settingsDataRetentionDescription: "Ви можете вибрати як довго бот буде зберігати дані, пов'язані з цим каналом. Якщо ви хочете видалити всі збережені повідомлення, ви також можете зробити це тут.",

    settingsDataRetentionHowLongTitle: 'Як довго бот буде зберігати дані?',
    settingsDataRetentionHowLongDescription: 'Після цього часу бот видалить збережені повідомлення для цього каналу. Але чим більше контексту = тим кращі меми.',

    settingsDataRetentionHowLongOption2DaysTitle: '2 дні',
    settingsDataRetentionHowLongOption2DaysDescription: 'Для дуже активних каналів',

    settingsDataRetentionHowLongOption7DaysTitle: '7 днів',
    settingsDataRetentionHowLongOption7DaysDescription: 'Для активних каналів',

    settingsDataRetentionHowLongOption14DaysTitle: '14 днів',
    settingsDataRetentionHowLongOption14DaysDescription: 'Для каналів із середньою активністю (рекомендується)',

    settingsDataRetentionHowLongOption30DaysTitle: '30 днів',
    settingsDataRetentionHowLongOption30DaysDescription: 'Для каналів з низькою активністю',

    settingsDataRetentionUserImagesTitle: 'Використовувати чи ні надіслані зображення в мемах?',
    settingsDataRetentionUserImagesDescription: 'Якщо встановлено **так**, то іноді замість аватарів будуть використовуватися надіслані зображення. Але тільки ті, що були надіслані не більше 24 годин тому. __Не може бути відключено через нові обмеження Intents, буде виправлено незабаром.__',

    settingsFooterChannelId: 'ID каналу:',

    settingsStatusEnabled: '🎉 Бот готовий!',
    settingsStatusDisabled: '🔴 Бот **вимкнений** в цьому каналі!',

    notEnoughContextTitle: '🤓 Бот все ще збирає контекст!',
    notEnoughContextDescription: "Jstmemit не зміг згенерувати мем цього разу, тому що йому потрібно більше даних для навчання з цього каналу.\n\nПовідомлень у пам'яті: **{{amount}}/30**",

    noPermissionsTitle: 'Недостатньо прав!',
    noPermissionsDescription: 'Щоб використовувати цю команду, вам потрібно право **{{permission}}**.\nБудь ласка, попросіть адміністраторів вашого сервера виконати цю команду.',

    enableDescription: 'Ви можете змінити це натиснувши на кнопку під повідомленням. Набагато більше параметрів доступні в меню налаштувань.',

    premiumTitle: 'Преміум',
    premiumDescription: "Ви можете підтримати розробку цього бота підписавшись на преміум. Цей сервер отримає доступ до **більшої персоналізації**, **можливості пов'язувати канали** та деяких інших функцій, які ви можете побачити нижче.\n\nВсі користувачі на цьому сервері отримають **Преміум** можливості. Навіть якщо тільки одна людина підпишеться.",
    premiumDescriptionSettingsVariant: "Ви можете підтримати розробку цього бота підписавшись на преміум. Цей сервер отримає доступ до **більшої персоналізації**, **можливості пов'язувати канали** та деяких інших функцій. Більше можливостей вже в дорозі!\n\nВсі користувачі на цьому сервері отримають **Преміум** можливості. Навіть якщо тільки одна людина підпишеться.",

    premiumStatusActive: 'Преміум **активний** на цьому сервері!',
    premiumStatusInactive: 'Преміум **не активний** на цьому сервері.',

    premiumCustomizationTitle: 'Більше персоналізації',
    premiumCustomizationDescription: 'Ці функції дадуть вам більше контролю над тим, як бот виглядає і поводиться в цьому каналі. Функції ізольовані на рівні каналу, тому ви можете мати різні налаштування в різних каналах.',

    premiumSetOwnWatermarkTitle: 'Встановити власний водяний знак',
    premiumSetOwnWatermarkDescription: 'За замовчуванням на мемах немає водяних знаків, але з преміумом ви можете встановити власний логотип сервера як водяний знак на мемах. Він буде розміщений у правому нижньому куті мему.',
    premiumSetOwnWatermarkActive: '✔️  Власний водяний знак **встановлено**!',
    premiumSetOwnWatermarkInactive: '❌  Водяний знак не встановлено',

    premiumLinkChannelsTogetherTitle: "Зв'язати канали разом",
    premiumLinkChannelsTogetherDescription: "Якщо ви не хочете засмічувати загальний чат мемами, ви можете прив'язати канал для \"флуду\". Бот буде працювати там з даними з цього каналу, тому він зможе генерувати меми на основі контексту цього каналу.",
    premiumLinkChannelsTogetherActive: "✔️  <#{{thischannel}}> та <#{{floodchannel}}> **пов'язані**!",
    premiumLinkChannelsTogetherInactive: "❌  Канали не пов'язані",
    premiumSelectChannelPlaceholder: "🔗  Оберіть канал для зв'язку",

    premiumTurnOffMentionsTitle: 'Вимкнути @згадування в текстових мемах',
    premiumTurnOffMentionsDescription: 'За замовчуванням бот може в деяких випадках згадувати користувачів у текстових мемах. Хоча @everyone і @here згадки завжди вимкнені навіть у безкоштовній версії.',
    premiumTurnOffMentionsActive: '✔️  Згадування **замінюються** в текстових мемах!',
    premiumTurnOffMentionsInactive: '❌  Згадування **не замінюються** в текстових мемах',

    surveyDescription: 'Ви можете допомогти нам покращити Jstmemit, відповівши на кілька запитань. Це не займе більше хвилини.',
    surveyProgress: 'Запитання',
    surveyCompleted: 'Опитування завершено!',
    surveyCompletedDescription: 'Дякуємо за ваші відповіді! Ваш відгук дуже важливий для нас і допоможе нам покращити Jstmemit.',
    surveyTextResponseTitle: 'Ваша відповідь',
    surveyTextResponseLabel: 'Пропозиції',
    surveySelectOptionsPlaceholder: 'Виберіть один або декілька варіантів...',
    surveySelectOptionPlaceholder: 'Виберіть варіант...',
    surveyWriteYourResponse: '✏️ Напишіть вашу відповідь',
    surveyOpenLink: '🔗 Відкрити посилання',

    btnDisable: 'Вимкнути',
    btnDisableTraining: 'Вимкнути навчання',
    btnEnable: 'Увімкнути',
    btnEnableTraining: 'Увімкнути навчання',
    btnEraseData: 'Очистити дані',
    btnSettings: 'Налаштування',
    btnPremiumActive: 'Преміум активний!',
    btnManagePremium: 'Налаштування преміум',
    btnLearnMore: 'Дізнатися більше',
    btnTurnOn: 'Увімкнути',
    btnTurnOff: 'Вимкнути',
    btnLink: "Зв'язати канали",
    btnLinkBelow: "Використовуйте меню нижче для зв'язку каналів",
    btnUnlink: "Розв'язати канали",
    btnSetWatermark: 'Встановити водяний знак',
    btnRemoveWatermark: 'Видалити водяний знак',
    btnGetPremium: 'Преміум - $1.99',

    loading: 'Загрузка...',

    yes: 'Так',
    no: 'Ні',

    errorText: 'Сталася помилка при генерації мему. Будь ласка, спробуйте ще раз пізніше.',
  },
  polish: {
    settingsTitle: 'Ustawienia bota',
    settingsDescription: 'To jest twój panel kontrolny bota. Tutaj możesz dostosować, jak bot zachowuje się na tym kanale.',
    settingsFooterDisabled: '🔴 Trenowanie jest **wyłączone** na tym kanale!',
    settingsFooterNotEnoughContext: 'Wiadomości w pamięci: **{{amount}}/30**  {{progressBar}}',
    settingsFooterReady: '🧠 Zebrano wystarczająco dużo kontekstu! **{{amount}} wiadomości**',

    settingsButtonGeneralSettings: 'Ogólne',
    settingsButtonMemeSettings: 'Generowanie memów',
    settingsButtonDataRetentionSettings: 'Przechowywanie danych',
    settingsButtonPremiumSettings: 'Premium',

    settingsMemesTitle: 'Generowanie memów',
    settingsMemesDescription: 'Ta sekcja zawiera opcje związane z losowymi memami na czacie. Możesz kontrolować, jak często bot będzie wysyłał memy, a także jakie memy chcesz widzieć.',
    settingsMemesFrequencyTitle: 'Częstotliwość',
    settingsMemesFrequencyDescription: 'Jak często bot powinien wysyłać losowego mema na czacie bez pytania?',

    settingsMemesFrequencyOptionNeverTitle: 'Nigdy',
    settingsMemesFrequencyOptionNeverDescription: 'Nie wysyłaj memów, chyba że na prośbę przez komendę',

    settingsMemesFrequencyOptionHardlyEverTitle: 'Bardzo rzadko',
    settingsMemesFrequencyOptionHardlyEverDescription: 'Raz na ~100 wiadomości',

    settingsMemesFrequencyOptionRarelyTitle: 'Rzadko',
    settingsMemesFrequencyOptionRarelyDescription: 'Raz na ~50 wiadomości',

    settingsMemesFrequencyOptionSometimesTitle: 'Czasami',
    settingsMemesFrequencyOptionSometimesDescription: 'Raz na ~20 wiadomości (zalecane)',

    settingsMemesFrequencyOptionOftenTitle: 'Często',
    settingsMemesFrequencyOptionOftenDescription: 'Raz na ~10 wiadomości',

    settingsMemesTemplatesTitle: 'Jakie memy będą wysyłane?',
    settingsMemesTemplatesDescription: 'Możesz wybrać, jakie memy chcesz widzieć na czacie. Możesz również wyłączyć niektóre z nich, jeśli ci się nie podobają.',

    settingsMemesTemplatesOptionWojakPointingTitle: 'Wojak wskazujący palcem',
    settingsMemesTemplatesOptionUncannyTitle: 'Uncanny',
    settingsMemesTemplatesOptionSteppedInShitTitle: 'Wdepnął w gówno',
    settingsMemesTemplatesOptionSpeechbubbleTitle: 'Dymek z tekstem',
    settingsMemesTemplatesOptionLooksAtPaperAngryTitle: 'Patrzy wściekle na kartkę',
    settingsMemesTemplatesOptionFancyBearTitle: 'Kubuś Puchatek',
    settingsMemesTemplatesOptionCycleTitle: 'Cykl',
    settingsMemesTemplatesOptionGreentextTitle: 'Greentext',
    settingsMemesTemplatesOptionIsThisAPigeonTitle: 'Czy to gołąb?',
    settingsMemesTemplatesOptionYesChadTitle: 'Tak Chad',
    settingsMemesTemplatesOptionTextingTitle: 'Pisze na telefonie',
    settingsMemesTemplatesOptionConnorTitle: 'Connor',
    settingsMemesTemplatesOptionBigThumbsUpTitle: 'Wielki kciuk w górę',
    settingsMemesTemplatesOptionBuzzTitle: 'Buzz Astral',
    settingsMemesTemplatesOptionSpongebobTitle: 'SpongeBob',
    settingsMemesTemplatesOptionCryingTitle: 'Płacze',
    settingsMemesTemplatesOptionAbsoluteCinemaTitle: 'Absolutne kino',
    settingsMemesTemplatesOptionLiveReactionTitle: 'Live Reaction',
    settingsMemesTemplatesOptionTf2HahahaTitle: 'TF2 Hahaha',
    settingsMemesTemplatesOptionPoliticalCompassTitle: 'Kompas polityczny',
    settingsMemesTemplatesOptionSleepyTitle: 'Śpiący',
    settingsMemesTemplatesOptionWhyDoYouLikeThisMovieTitle: 'Dlaczego lubisz ten film?',
    settingsMemesTemplatesOptionHomerHidingTitle: 'Homer chowa się w krzakach',
    settingsMemesTemplatesOptionSpongebobHappyTitle: 'Szczęśliwy SpongeBob',

    settingsDataRetentionTitle: 'Przechowywanie danych',
    settingsDataRetentionDescription: 'Możesz wybrać, jak długo bot będzie przechowywał dane związane z tym kanałem. Jeśli chcesz usunąć wszystkie dane, możesz to również zrobić tutaj.',

    settingsDataRetentionHowLongTitle: 'Jak długo bot ma przechowywać dane?',
    settingsDataRetentionHowLongDescription: 'Po tej liczbie dni bot usunie zapisane wiadomości dla tego kanału. Więcej kontekstu = lepsze memy.',

    settingsDataRetentionHowLongOption2DaysTitle: '2 dni',
    settingsDataRetentionHowLongOption2DaysDescription: 'Dla bardzo aktywnych kanałów',

    settingsDataRetentionHowLongOption7DaysTitle: '7 dni',
    settingsDataRetentionHowLongOption7DaysDescription: 'Dla aktywnych kanałów',

    settingsDataRetentionHowLongOption14DaysTitle: '14 dni',
    settingsDataRetentionHowLongOption14DaysDescription: 'Dla kanałów o średniej aktywności (zalecane)',

    settingsDataRetentionHowLongOption30DaysTitle: '30 dni',
    settingsDataRetentionHowLongOption30DaysDescription: 'Dla kanałów o niskiej aktywności',

    settingsDataRetentionUserImagesTitle: 'Czy bot ma używać obrazków wysłanych przez użytkowników w memach?',
    settingsDataRetentionUserImagesDescription: 'Jeśli ustawione na **tak**, bot czasami zamiast awatarów będzie używał obrazków wysłanych przez użytkowników. Używane będą tylko obrazki wysłane w ciągu ostatnich 24 godzin. __Nie można wyłączyć z powodu nowych ograniczeń Intents Discorda, zostanie to wkrótce naprawione.__',

    settingsButtonBetaSettings: 'Funkcje Beta',

    settingsBetaTitle: 'Funkcje Beta',
    settingsBetaDescription: 'Te funkcje nie są w pełni przetestowane i mogą nie działać zgodnie z oczekiwaniami. Jeśli znajdziesz jakieś błędy, zgłoś je na [serwerze wsparcia](https://discord.gg/n8DFFcnwDt) lub wyślij e-mailem na adres [support@jstmemit.com](mailto:support@jstmemit.com).',

    settingsBetaEngineTitle: 'Silnik memów',
    settingsBetaEngineDescription: 'Na podstawie metryk bot wybierze lepszy silnik dla Twojego kanału, ale możesz nadpisać, którego silnika memów chcesz używać. Obecnie dostępne są trzy silniki:\n\n- **v1** - generuje tekst dla memów za pomocą łańcuchów Markowa. Nie ma własnej logiki, więc nie rozumie powiązań między tekstami.\n- **v2-alpha** - nowy silnik, który przekształca wiadomości kanału w tekst dla memów za pomocą LLM. Ma własną logikę i teoretycznie powinien tworzyć lepsze memy, ale może być znacznie wolniejszy i działać nie tak, jak oczekiwano.\n- **v2-alpha-qwen** - ta sama logika co v2-alpha, ale używa lokalnego modelu Qwen 3. Jest trochę wolniejszy i mniej stabilny, ale zapewnia większą prywatność. Żadne dane treningowe nie są wysyłane do OpenAI ani innym stronom trzecim.',

    settingsBetaEngineV1Title: 'v1 - Łańcuchy Markowa',
    settingsBetaEngineV1Description: 'Nie rozumie powiązań między różnymi tekstami na tym samym memie, ale zazwyczaj losowość = zabawa.',

    settingsBetaEngineV2Title: 'v2-alpha - LLM',
    settingsBetaEngineV2Description: 'Jeśli chcesz, aby memy miały sens i faktyczną logikę, to jest silnik, którego chcesz użyć.',

    settingsFooterChannelId: 'ID kanału:',

    settingsStatusEnabled: '🎉 Bot jest gotowy!',
    settingsStatusDisabled: '🔴 Trenowanie jest **wyłączone** na tym kanale!',

    notEnoughContextTitle: '🤓 Bot wciąż zbiera kontekst!',
    notEnoughContextDescription: 'Jstmemit nie mógł tym razem wygenerować mema, ponieważ potrzebuje więcej danych treningowych z tego kanału.\n\nWiadomości w pamięci: **{{amount}}/30**',

    noPermissionsTitle: 'Brak uprawnień!',
    noPermissionsDescription: 'Aby użyć tej komendy, potrzebujesz uprawnienia **{{permission}}**.\nPoproś administratorów serwera o wykonanie tej akcji.',

    enableDescription: 'Bot jest wyłączony na tym kanale! Aby szanować Twoją prywatność, Jstmemit musi zostać włączony, zanim zacznie uczyć się z wiadomości. Kliknij przycisk poniżej, aby kontynuować.',
    enableDescriptionReady: 'Konfiguracja zakończona! Bot trenuje na nowych wiadomościach i zacznie generować memy, gdy tylko będzie miał ~30 wiadomości w pamięci. Możesz zmienić ustawienia w menu poniżej.',
    enableMessagesInMemory: 'Wiadomości w pamięci: **{{amount}}/30** ',
    enableMessagesInMemoryEnough: 'Wiadomości w pamięci: **{{amount}}** ',

    premiumTitle: 'Premium',
    premiumDescription: 'Możesz wesprzeć rozwój tego bota, subskrybując premium. Ten serwer otrzyma dostęp do **większej personalizacji**, **możliwości łączenia kanałów** i innych funkcji, które możesz zobaczyć poniżej. Więcej nowości już wkrótce!\n\nWszyscy na tym serwerze otrzymają korzyści **Premium**, nawet jeśli tylko jedna osoba wykupi subskrypcję.\n\n*Czasami Discord nie renderuje przycisku poprawnie, jeśli wyświetla się "Produkt niedostępny", wciąż możesz zdobyć premium w sklepie w profilu bota.*',
    premiumDescriptionSettingsVariant: 'Możesz wesprzeć rozwój tego bota, subskrybując premium. Ten serwer otrzyma dostęp do **większej personalizacji**, **możliwości łączenia kanałów** i innych funkcji. Więcej nowości już wkrótce!\n\nWszyscy na tym serwerze otrzymają korzyści **Premium**, nawet jeśli tylko jedna osoba wykupi subskrypcję.',
    premiumStatusActive: 'Premium jest **aktywne** na tym serwerze!',
    premiumStatusInactive: 'Premium jest **nieaktywne** na tym serwerze',

    premiumCustomizationTitle: 'Większa personalizacja',
    premiumCustomizationDescription: 'Te funkcje dadzą ci większą kontrolę nad tym, jak bot wygląda i zachowuje się na tym kanale. Funkcje są odizolowane na poziomie kanału, więc możesz mieć różne ustawienia na różnych kanałach.',

    premiumSetOwnWatermarkTitle: 'Ustaw własny znak wodny',
    premiumSetOwnWatermarkDescription: 'Domyślnie na memach nie ma znaków wodnych, ale z premium możesz ustawić logo swojego serwera jako znak wodny na memach. Zostanie on umieszczony w prawym dolnym rogu mema.',
    premiumSetOwnWatermarkActive: '✔️ Twój własny znak wodny jest **ustawiony**!',
    premiumSetOwnWatermarkInactive: '❌ Nie ustawiono znaku wodnego',

    premiumLinkChannelsTogetherTitle: 'Połącz dane treningowe kanałów',
    premiumLinkChannelsTogetherDescription: 'Jeśli nie chcesz zaśmiecać ogólnego czatu memami, możesz połączyć go z kanałem do "floodu". Bot będzie tam działał z danymi treningowymi z tego kanału, dzięki czemu będzie mógł generować memy na podstawie kontekstu tego kanału.',
    premiumLinkChannelsTogetherActive: '✔️ <#{{thischannel}}> i <#{{floodchannel}}> są **połączone**!',
    premiumLinkChannelsTogetherInactive: '❌ Żaden kanał nie jest połączony',
    premiumSelectChannelPlaceholder: '🔗 Wybierz kanał do połączenia',

    premiumTurnOffMentionsTitle: 'Zamieniaj @wzmianki na nazwy użytkowników w memach tekstowych',
    premiumTurnOffMentionsDescription: 'Domyślnie bot może czasami wzmiankować użytkowników w memach tekstowych. Jednak wzmianki @everyone i @here są zawsze wyłączone, nawet w darmowej wersji.',
    premiumTurnOffMentionsActive: '✔️ Wzmianki są **zamieniane** w memach tekstowych!',
    premiumTurnOffMentionsInactive: '❌ Wzmianki **nie są zamieniane** w memach tekstowych',

    surveyDescription: 'Możesz pomóc nam ulepszyć Jstmemit, odpowiadając na kilka pytań. Nie zajmie to więcej niż minutę.',
    surveyProgress: 'Pytanie',
    surveyCompleted: 'Ankieta zakończona!',
    surveyCompletedDescription: 'Dziękujemy za odpowiedzi! Twoja opinia jest dla nas bardzo ważna i pomoże nam ulepszyć Jstmemit.',
    surveyTextResponseTitle: 'Twoja odpowiedź',
    surveyTextResponseLabel: 'Sugestie',
    surveySelectOptionsPlaceholder: 'Wybierz jedną lub więcej opcji...',
    surveySelectOptionPlaceholder: 'Wybierz opcję...',
    surveyWriteYourResponse: '✏️ Napisz swoją odpowiedź',
    surveyOpenLink: '🔗 Otwórz link',

    btnDisable: 'Wyłącz',
    btnDisableTraining: 'Wyłącz trenowanie',
    btnEnable: 'Włącz',
    btnEnableTraining: 'Włącz trenowanie',
    btnEraseData: 'Usuń dane',
    btnSettings: 'Otwórz ustawienia',
    btnPremiumActive: 'Premium jest aktywne!',
    btnManagePremium: 'Ustawienia premium',
    btnLearnMore: 'Dowiedz się więcej',
    btnTurnOn: 'Włącz',
    btnTurnOff: 'Wyłącz',
    btnLink: 'Połącz kanały',
    btnLinkBelow: 'Użyj menu poniżej, aby połączyć kanały',
    btnUnlink: 'Rozłącz kanały',
    btnSetWatermark: 'Ustaw znak wodny',
    btnRemoveWatermark: 'Usuń znak wodny',
    btnGetPremium: 'Premium - $1.99',

    loading: 'Ładowanie...',

    yes: 'Tak',
    no: 'Nie',

    errorText: 'Wystąpił błąd podczas generowania mema. Spróbuj ponownie później.',
  },
};
