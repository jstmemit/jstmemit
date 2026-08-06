import { Locale } from "discord.js";
import type { TranslationString } from "@jstmemit/shared/models/TranslationString";

export const locale: Partial<TranslationString> = {
    [Locale.EnglishUS]: {
        "enable.heading.enabled": "🎉 Bot is ready!",
        "enable.heading.disabled": "🔴 Jstmemit is off in this channel",
        "enable.body.enabled":
            "Jstmemit is now active and will generate memes during chats here. Quality improves as it picks up on your channel, with much better results once it has around **~30 messages** in memory.",
        "enable.body.disabled.ready":
            "You already have over **{{messagesAmount}} messages** in memory, so Jstmemit is ready to make memes. Just turn the bot back on and it'll start generating them during active chats.",
        "enable.body.disabled.notReady":
            "Bot can't make memes here until you enable it for this channel. Turn it on and it will start generating memes during active chats.",
        "enable.memory.progress": "Messages in memory: **{{messagesAmount}}**",
        "enable.memory.full": "Messages in memory: **{{messagesAmount}}**",
        "enable.permissions.heading": "Some permissions are missing!",
        "enable.permissions.description":
            "Bot needs a couple permissions to work, such as **Attach Files** to be able to send the memes it generated, **View Channel** to get context for the memes or **Embed links** for the `/settings` menu to work properly:\n",
        "enable.permissions.sendMessages": "Send Messages",
        "enable.permissions.attachFiles": "Attach Files",
        "enable.permissions.embedLinks": "Embed Links",
        "enable.permissions.readHistory": "Read Message History",
        "enable.permissions.viewChannel": "View Channel",

        "enable.button.turnOff": "Turn off",
        "enable.button.turnOn": "Turn on",
        "enable.button.firstMeme": "Generate your first meme",
        "enable.button.settings": "⚙️ Open settings",

        "error.heading": "⚠️ Something went wrong",
        "error.body": "Please try again, and if it keeps happening, report the error so we can look into it.",
        "error.id": "**Error ID:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Try again",
        "error.button.reportError": "💬 Report error",

        "notEnoughContext.heading": "🤔 Not enough context yet",
        "notEnoughContext.body":
            "Jstmemit needs more time to learn about your channel before it can make a meme. Try to chat a bit more and send a couple of GIFs. If this error persists, please contact support.",
        "unknownTemplate.heading": "🤔 I don't know such template",
        "unknownTemplate.body":
            "Make sure to select one of the autocomplete options when choosing a template in `/custom`",
        "wrongFileFormat.heading": "🤔 Unknown image file format",
        "wrongFileFormat.body": 'The file for "{{file}}" is not an image. Please try again with a PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 You don't have permission for that",
        "missingPermissions.body":
            "Only members with the **Manage Server** or **Manage Channels** permission can change Jstmemit's settings. Ask a server admin if you need this changed.",
        "missingBotPermissions.heading": "🔒 Jstmemit can't send memes here",
        "missingBotPermissions.body":
            "Bot is missing some permissions in this channel. Someone who can manage this channel can fix this by going into channel settings and giving them to the bot.\n\nIt's required for auto-generating memes during a conversation, but requesting memes with `/meme` or `/custom` is possible without them.",
        "deleteData.confirm.heading": "🗑️ Delete all data for this channel?",
        "deleteData.confirm.body":
            "This permanently deletes all saved messages and image links for this channel from Jstmemit and can't be undone. The bot stays enabled and will start learning again from new messages. If you wish to stop it entirely afterwards, turn it off with `/enable`.",
        "deleteData.success.heading": "✅ Data deleted!",
        "deleteData.success.body":
            "All saved messages and image links for this channel were deleted. The bot is still on and will start learning again from new messages. Turn it off with `/enable` if you wish to stop using it.",
        "deleteData.button.cancel": "Cancel",
        "deleteData.button.delete": "Delete all data",

        "settings.about.heading": "<:jstmemit:1533562196980797462> Hey, I'm Jstmemit",
        "settings.about.body":
            "The bot that makes memes from your chat. Talk about anything and...\nit will turn that into a meme on one of 300+ templates ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Enable Jstmemit below to start!",
        "settings.button.disable": "Disable",
        "settings.button.enable": "Enable",
        "settings.status.enabled": "**✅ Jstmemit is turned on in this channel!**",
        "settings.status.disabled": "**⚠️ Jstmemit needs to be enabled to make memes here!**",
        "settings.meme.heading": "💬 Meme settings",
        "settings.meme.body": "You can control how often the bot is going to send memes and what's on them",
        "settings.quality.heading": "Image quality",
        "settings.quality.body":
            "Choose if you'd like to receive memes in better quality or have instant meme generation",
        "settings.quality.image.label": "Better quality (~1.2s per meme)",
        "settings.quality.image.description": "Don't compress images on memes and turn on antialiasing",
        "settings.quality.speed.label": "Faster generation (~0.3s per meme)",
        "settings.quality.speed.description": "Compress and downscale images on memes, reduce text quality",
        "settings.frequency.heading": "Frequency",
        "settings.frequency.body": "How often should the bot send a random meme in the chat without being asked to?",
        "settings.frequency.never.label": "Never",
        "settings.frequency.never.description": "Don't send memes, unless requested via a /meme command",
        "settings.frequency.rarely.label": "Rarely",
        "settings.frequency.rarely.description": "Once every ~100 messages",
        "settings.frequency.sometimes.label": "Sometimes",
        "settings.frequency.sometimes.description": "Once every ~50 messages (for bigger servers)",
        "settings.frequency.often.label": "Often",
        "settings.frequency.often.description": "Once every ~20 messages (for medium servers)",
        "settings.frequency.quiteOften.label": "Quite often",
        "settings.frequency.quiteOften.description": "Once every ~10 messages (for smaller servers)",
        "settings.frequency.veryOften.label": "Very often",
        "settings.frequency.veryOften.description": "Once every ~5 messages (can produce spam)",
        "settings.avatars.heading": "Avatars in memes",
        "settings.avatars.body": "Include profile pictures in generated memes?",
        "settings.avatars.yes.label": "Yes",
        "settings.avatars.yes.description": "Bot will use avatars for memes (recommended)",
        "settings.avatars.no.label": "No",
        "settings.avatars.no.description": "Bot won't use avatars for memes",
        "settings.milestones.heading": "Milestones",
        "settings.milestones.body":
            "Get a celebration recap when the channel hits a meme count milestone.\nSomething similar to a Spotify Wrapped, but about memes.",
        "settings.milestones.yes.label": "Yes",
        "settings.milestones.yes.description":
            "Bot will send a recap every time the channel hits a meme count milestone.",
        "settings.milestones.no.label": "No",
        "settings.milestones.no.description": "Turn off milestone notifications to keep channel quiet",
        "settings.footer.body": "Want to remove all message data about this channel?",
        "settings.footer.deleteButton": "Delete all data",
        "feedback.submit.heading": "💬 Feedback submitted!",
        "feedback.submit.body":
            "Thank you very much for your message, our team has received it and will look into it. If you'd like to discuss it further feel free to join our [Support server](https://discord.gg/THRnn8fhkZ), this way we can send our reply to you.",
        "feedback.submit.yourMessage": "Your message:",

        "modal.customMeme.title": "Generate a custom meme",
        "modal.customMeme.text.label": "Text #{{id}}",
        "modal.customMeme.text.placeholder": "Something funny here",
        "modal.customMeme.image.label": "Image #{{id}}",
        "modal.feedback.title": "Send feedback",
        "modal.feedback.title.error": "Report error",
        "modal.feedback.label": "Your message",
        "modal.feedback.description": "Report a bug, suggest a feature or tell us what you think",
        "modal.feedback.description.error": "Please describe what you were doing when the error happened",
        "modal.feedback.placeholder": "Hello, could you please add ... meme template?",
        "modal.feedback.placeholder.error": "I got an error after ...",

        "help.about.heading": `<:jstmemit:1533562196980797462> Hey, I'm Jstmemit`,
        "help.about.commands.user":
            "### 👤 Anywhere on Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 In servers with the bot: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  But how exactly does that work?",
        "help.autoMemes.description":
            "Once every few dozen messages it picks a meme template, takes a few images/gifs/messages and mixes it all together into a meme.\n\nEach generated meme has **:thumbsup: Like**, **:repeat: Regenerate** and** :thumbsdown: Dislike** buttons that improve the quality of future memes by helping the bot to understand what was funny.",
        "help.rightClick.heading": "## 🖱 Turn anything into a meme",
        "help.rightClick.description":
            'With it you can also remake any existing (even voice!) message into a quote, a fake news report or a Grok tweet. Or put someone\'s profile picture into a "MrBeast style" YouTube thumbnail.\n\nOpen the Apps menu after a right-click or long-press on mobile, choose Jstmemit and select the meme you want to get.',
        "help.voice.heading": "## 🔊  Make voice messages",
        "help.voice.description":
            "Use `/voice` to narrate your text using one of 23 different voices. Perfect for making soundboard phrases or simply narrating funny messages.",
        "help.faq.heading": "## ❓ Frequently asked questions",
        "help.faq.description":
            "Can't find an answer to your question? We can help you in the [Support server](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "I added the bot, what now?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Run /enable in a channel.** The bot will start learning from new messages there. After chatting for a bit run /meme to generate a meme. Memes will also come automatically when the channel is active and there is a conversation ongoing. You can change frequency for those in /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "Can I have different settings for every channel?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Yes!** All channel information, such as data for memes, frequency and other settings are stored separately for each channel. Nothing stops you from having very low meme frequency in your main chat, and setting it to high in your spam channel.",
        "help.faq.isThereALimit.question": "Is there a limit on how many memes the bot can make daily?",
        "help.faq.isThereALimit.answer":
            "**No, there are no limits.** You can run `/meme` as many times a day as you want. And it's free, because each generation only takes milliseconds to finish. There are also no watermarks on memes so that they look cleaner than if they were made with other meme generators.",
        "help.faq.canIDeleteStoredData.question": "Can I delete stored meme generation data?",
        "help.faq.canIDeleteStoredData.answer":
            '**Yes, at any time.** Run `/settings` and then press the "Delete all data" button to delete everything that the bot stored for the channel.',
        "help.faq.addBotToMyApps.question": 'Can I add the bot to "My Apps" and use it anywhere?',
        "help.faq.addBotToMyApps.answer":
            '**Yes, but without some features.** You\'ll be able to use `/custom` and right-click actions (like `"Make it a Quote"` or `"Make it a News Report"`) everywhere on Discord. But memes based on your chat won\'t work for privacy reasons.',
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "What if I want to make a custom meme with specific text and/or image?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Use `/custom`!** It lets you use the giant meme template library of Jstmemit as an ordinary meme generator with your own text and images. And of course there are no limits or watermarks on memes generated this way too.",
        "help.button.addJstmemit": "🔗 Add Jstmemit",
        "help.button.faq": "❓ Frequently asked questions",
        "help.button.features": "✨ Features list",
        "help.button.website": "🌐 Website",

        "milestones.heading": `Yay! {{count}} memes in **<#{{channelId}}>**!`,
        "milestones.description": `Below are some stats about how you reacted to them.`,
        "milestones.nextGoal": "Next goal: {{currentGoal}}/{{nextGoal}} memes",
        "milestones.turnOffInSettings":
            "-# If you don't want to receive these messages you can disable them in **/settings**",

        "stats.likes": "Likes: {{count}}",
        "stats.dislikes": "Dislikes: {{count}}",
        "stats.templates": "Templates used: {{count}}",
        "stats.voices": "Voices used: {{count}}",
    },

    [Locale.Russian]: {
        "enable.heading.enabled": "🎉 Бот готов к работе!",
        "enable.heading.disabled": "🔴 Jstmemit выключен в этом канале",
        "enable.body.enabled":
            "Jstmemit теперь активен и будет генерировать мемы во время общения тут. Качество улучшается по мере того, как бот изучает ваш канал, и результаты станут заметно лучше, когда в памяти будет около **~30 сообщений**.",
        "enable.body.disabled.ready":
            "У вас уже более **{{messagesAmount}} сообщений** в памяти, так что Jstmemit готов делать мемы. Просто включите бота обратно, и он начнёт генерировать их во время активных чатов.",
        "enable.body.disabled.notReady":
            "Бот не может делать мемы тут, пока вы не включите его для этого канала. Включите его, и он начнёт генерировать мемы во время активного общения.",
        "enable.memory.progress": "Сообщений в памяти: **{{messagesAmount}}**",
        "enable.memory.full": "Сообщений в памяти: **{{messagesAmount}}**",
        "enable.permissions.heading": "Не хватает некоторых прав!",
        "enable.permissions.sendMessages": "Отправлять сообщения",
        "enable.permissions.attachFiles": "Прикреплять файлы",
        "enable.permissions.embedLinks": "Встраивать ссылки",
        "enable.permissions.readHistory": "Читать историю сообщений",
        "enable.permissions.viewChannel": "Просмотр канала",
        "enable.permissions.description":
            "Боту нужна пара прав для работы, например **Прикреплять файлы**, чтобы отправлять сделанные мемы, **Просмотр канала**, чтобы получать контекст для мемов, или **Встраивать ссылки**, чтобы меню `/settings` работало нормально:\n",

        "enable.button.turnOff": "Выключить",
        "enable.button.turnOn": "Включить",
        "enable.button.settings": "⚙️ Открыть настройки",

        "error.heading": "⚠️ Что-то пошло не так",
        "error.body": "Попробуйте ещё раз, а если это повторяется, сообщите об ошибке, чтобы мы могли разобраться.",
        "error.id": "**ID ошибки:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Попробовать снова",
        "error.button.reportError": "💬 Сообщить об ошибке",

        "notEnoughContext.heading": "🤔 Пока недостаточно контекста",
        "notEnoughContext.body":
            "Jstmemit нужно больше времени, чтобы изучить ваш канал, прежде чем он сможет сделать мем. Пообщайтесь ещё немного и отправьте пару GIF. Если ошибка повторяется, обратитесь в поддержку.",
        "unknownTemplate.heading": "🤔 Я не знаю такой шаблон",
        "unknownTemplate.body": "Обязательно выберите один из вариантов автодополнения при выборе шаблона в `/custom`",
        "wrongFileFormat.heading": "🤔 Неизвестный формат изображения",
        "wrongFileFormat.body":
            'Файл для "{{file}}" не является изображением. Попробуйте ещё раз с PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 У вас нет прав для этого",
        "missingPermissions.body":
            "Только участники с правом **Управлять сервером** или **Управлять каналами** могут менять настройки Jstmemit. Обратитесь к администратору сервера, если вам нужно это изменить.",
        "missingBotPermissions.heading": "🔒 Jstmemit не может отправлять мемы тут",
        "missingBotPermissions.body":
            "У бота нет некоторых прав в этом канале. Любой, кто может управлять этим каналом, может это исправить, зайдя в настройки канала и выдав их боту.\n\nОни нужны для автогенерации мемов во время переписки, но генерировать мемы через `/meme` или `/custom` можно и без них.",
        "deleteData.confirm.heading": "🗑️ Удалить все данные для этого канала?",
        "deleteData.confirm.body":
            "Это навсегда удалит все сохранённые сообщения и ссылки на изображения для этого канала из Jstmemit, и это нельзя отменить. Бот останется включённым и начнёт обучаться заново на новых сообщениях. Если после этого вы хотите полностью его остановить, выключите его через `/enable`.",
        "deleteData.success.heading": "✅ Данные удалены!",
        "deleteData.success.body":
            "Все сохранённые сообщения и ссылки на изображения для этого канала были удалены. Бот всё ещё включён и начнёт обучаться заново на новых сообщениях. Выключите его через `/enable`, если больше не хотите им пользоваться.",
        "deleteData.button.cancel": "Отмена",
        "deleteData.button.delete": "Удалить все данные",

        "settings.about.heading": "<:jstmemit:1533562196980797462> Хэй, я Jstmemit",
        "settings.about.body":
            "Бот, который делает мемы из вашего чата. Говорите о чём угодно, а он...\nпревратит это в мем на одном из 300+ шаблонов и постебётся над вами ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Включите Jstmemit чтобы начать!",
        "settings.button.disable": "Выключить",
        "settings.button.enable": "Включить",
        "settings.status.enabled": "**✅ Jstmemit включён в этом канале!**",
        "settings.status.disabled": "**⚠️ Чтобы делать мемы в этом канале нужно включить Jstmemit!**",
        "settings.meme.heading": "💬 Настройки мемов",
        "settings.meme.body": "Вы можете настроить, как часто бот будет отправлять мемы и что на них будет",
        "settings.quality.heading": "Качество изображения",
        "settings.quality.body": "Выберите, что важнее: качество мемов или скорость генерации",
        "settings.quality.image.label": "Лучшее качество (~1,2с на мем)",
        "settings.quality.image.description": "Картинки без сжатия, сглаживание включено",
        "settings.quality.speed.label": "Быстрая генерация (~0,3с на мем)",
        "settings.quality.speed.description": "Картинки сжимаются и уменьшаются, текст чуть хуже",
        "settings.frequency.heading": "Редкость",
        "settings.frequency.body": "Как часто бот должен отправлять случайный мем в чат без запроса?",
        "settings.frequency.never.label": "Никогда",
        "settings.frequency.never.description": "Не отправлять мемы, кроме запросов через команду /meme",
        "settings.frequency.rarely.label": "Редко",
        "settings.frequency.rarely.description": "Раз в ~100 сообщений",
        "settings.frequency.sometimes.label": "Иногда",
        "settings.frequency.sometimes.description": "Раз в ~50 сообщений (для больших серверов)",
        "settings.frequency.often.label": "Часто",
        "settings.frequency.often.description": "Раз в ~20 сообщений (для средних серверов)",
        "settings.frequency.quiteOften.label": "Довольно часто",
        "settings.frequency.quiteOften.description": "Раз в ~10 сообщений (для небольших серверов)",
        "settings.frequency.veryOften.label": "Очень часто",
        "settings.frequency.veryOften.description": "Раз в ~5 сообщений (может делать спам)",
        "settings.avatars.heading": "Аватары в мемах",
        "settings.avatars.body": "Использовать аватары в сгенерированных мемах?",
        "settings.avatars.yes.label": "Да",
        "settings.avatars.yes.description": "Бот будет использовать аватары для мемов (рекомендуется)",
        "settings.avatars.no.label": "Нет",
        "settings.avatars.no.description": "Бот не будет использовать аватары для мемов",
        "settings.milestones.heading": "Достижения",
        "settings.milestones.body":
            "Итоги канала, когда он берёт новую отметку по мемам.\nЧто-то вроде Spotify Wrapped, только про мемы.",
        "settings.milestones.yes.label": "Да",
        "settings.milestones.yes.description": "Бот пришлёт итоги, когда канал возьмёт новую отметку",
        "settings.milestones.no.label": "Нет",
        "settings.milestones.no.description": "Отключить их, чтобы в канале было тихо",
        "settings.footer.body": "Хотите удалить все данные сообщений этого канала?",
        "settings.footer.deleteButton": "Удалить все данные",
        "feedback.submit.heading": "💬 Идея отправлена!",
        "feedback.submit.body":
            "Большое спасибо за ваше сообщение, наша команда получила его и рассмотрит. Если хотите обсудить его подробнее, присоединяйтесь к нашему [серверу поддержки](https://discord.gg/THRnn8fhkZ), так мы сможем отправить вам ответ.",
        "feedback.submit.yourMessage": "Ваше сообщение:",

        "modal.customMeme.title": "Сделать свой мем",
        "modal.customMeme.text.label": "Текст #{{id}}",
        "modal.customMeme.text.placeholder": "Что-нибудь смешное",
        "modal.customMeme.image.label": "Картинка #{{id}}",
        "modal.feedback.title": "Отправить отзыв",
        "modal.feedback.label": "Ваше сообщение",
        "modal.feedback.description": "Сообщите о баге, предложите идею или просто напишите что думаете",
        "modal.feedback.placeholder": "Привет, добавьте пожалуйста шаблон мема ...",
        "modal.feedback.title.error": "Сообщить об ошибке",
        "modal.feedback.description.error": "Опишите, что вы делали, когда появилась ошибка",
        "modal.feedback.placeholder.error": "Ошибка появилась после ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Хэй, я Jstmemit",
        "help.about.commands.user": "### 👤 Везде в Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 На серверах с ботом: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  А как это вообще работает?",
        "help.autoMemes.description":
            "Раз в несколько десятков сообщений он выбирает шаблон мема, берёт несколько картинок/гифок/сообщений и смешивает всё это в мем.\n\nУ каждого сгенерированного мема есть кнопки **:thumbsup: Нравится**, **:repeat: Заново** и **:thumbsdown: Не нравится**, которые улучшают качество будущих мемов, помогая боту понять, что было смешно.",
        "help.rightClick.heading": "## 🖱 Превратить что угодно в мем",
        "help.rightClick.description":
            "С ним ещё можно переделать любое существующее (даже голосовое!) сообщение в цитату, срочные новости или твит от Grok. Или поставить чью-то аватарку на превью YouTube в стиле MrBeast.\n\nОткройте меню «Приложения» правым кликом или долгим нажатием на телефоне, выберите Jstmemit и нужный мем.",
        "help.voice.heading": "## 🔊  Голосовые сообщения",
        "help.voice.description":
            "Используйте `/voice`, чтобы озвучить свой текст одним из 23 разных голосов. Отлично подходит для фразочек в саундборд или просто озвучки смешных сообщений.",
        "help.button.faq": "❓ Частые вопросы",
        "help.button.features": "✨ Список возможностей",
        "help.faq.heading": "## ❓ Частые вопросы",
        "help.faq.description":
            "Не нашли ответ на свой вопрос? Мы поможем вам на [сервере поддержки](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Я добавил бота, что дальше?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Запустите /enable в канале.** Бот начнёт учиться на новых сообщениях там. Пообщайтесь немного и запустите /meme, чтобы сгенерировать мем. Мемы также будут приходить сами, когда канал активен и идёт разговор. Частоту таких мемов можно поменять в /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "Можно сделать разные настройки для каждого канала?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Да!** Вся информация о канале, например данные для мемов, частота и другие настройки, хранится отдельно для каждого канала. Ничто не мешает поставить очень низкую частоту мемов в основном чате, а во флудилке выкрутить её на максимум.",
        "help.faq.isThereALimit.question": "Есть ли лимит на количество мемов в день?",
        "help.faq.isThereALimit.answer":
            "**Нет, никаких лимитов.** Можете запускать `/meme` сколько угодно раз в день. И это бесплатно, потому что каждая генерация занимает лишь миллисекунды. А ещё на мемах нет водяных знаков, поэтому они выглядят чище, чем сделанные в других генераторах мемов.",
        "help.faq.canIDeleteStoredData.question": "Можно удалить сохранённые данные для генерации мемов?",
        "help.faq.canIDeleteStoredData.answer":
            "**Да, в любой момент.** Запустите `/settings` и нажмите кнопку «Удалить все данные», чтобы стереть всё, что бот сохранил для канала.",
        "help.faq.addBotToMyApps.question": "Можно добавить бота в «Мои приложения» и использовать его где угодно?",
        "help.faq.addBotToMyApps.answer":
            "**Да, но без части функций.** Вы сможете использовать `/custom` и действия по правому клику (например «Превратить в цитату» или «Превратить в срочные новости») где угодно в Discord. Но мемы на основе вашего чата работать не будут из соображений приватности.",
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "А если я хочу сделать свой мем с конкретным текстом и/или картинкой?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Используйте `/custom`!** Эта команда позволяет использовать огромную библиотеку шаблонов Jstmemit как обычный генератор мемов с вашим текстом и картинками. И конечно, на таких мемах тоже нет ни лимитов, ни водяных знаков.",
        "help.button.addJstmemit": "🔗 Добавить Jstmemit",
        "help.button.website": "🌐 Сайт",

        "milestones.heading": `Ура! {{count}} мемов в **<#{{channelId}}>**!`,
        "milestones.description": `Ниже немного статистики о том, как вы на них реагировали.`,
        "milestones.nextGoal": "Следующая цель: {{currentGoal}}/{{nextGoal}} мемов",
        "milestones.turnOffInSettings":
            "-# Если вы не хотите получать такие сообщения, их можно отключить в **/settings**",

        "stats.likes": "Лайки: {{count}}",
        "stats.dislikes": "Дизлайки: {{count}}",
        "stats.templates": "Использовано шаблонов: {{count}}",
        "stats.voices": "Использовано голосов: {{count}}",
    },
    [Locale.Ukrainian]: {
        "enable.heading.enabled": "🎉 Бот готовий до роботи!",
        "enable.heading.disabled": "🔴 Jstmemit вимкнено у цьому каналі",
        "enable.body.enabled":
            "Jstmemit тепер активний і буде генерувати меми під час спілкування тут. Якість покращується у міру того, як бот вивчає ваш канал, і результати стануть помітно кращими, коли у пам'яті буде близько **~30 повідомлень**.",
        "enable.body.disabled.ready":
            "У вас вже понад **{{messagesAmount}} повідомлень** у пам'яті, тож Jstmemit готовий робити меми. Просто увімкніть бота знову, і він почне генерувати їх під час активного спілкування.",
        "enable.body.disabled.notReady":
            "Бот не може робити меми тут, поки ви не увімкнете його для цього каналу. Увімкніть його, і він почне генерувати меми під час активного спілкування.",
        "enable.memory.progress": "Повідомлень у пам'яті: **{{messagesAmount}}**",
        "enable.memory.full": "Повідомлень у пам'яті: **{{messagesAmount}}**",
        "enable.permissions.heading": "Бракує деяких прав!",
        "enable.permissions.sendMessages": "Надсилати повідомлення",
        "enable.permissions.attachFiles": "Прикріплювати файли",
        "enable.permissions.embedLinks": "Вставляти посилання",
        "enable.permissions.readHistory": "Читати історію повідомлень",
        "enable.permissions.viewChannel": "Переглядати канал",
        "enable.permissions.description":
            "Боту потрібна пара прав для роботи, наприклад **Прикріплювати файли**, щоб надсилати зроблені меми, **Переглядати канал**, щоб отримувати контекст для мемів, або **Вставляти посилання**, щоб меню `/settings` працювало нормально:\n",

        "enable.button.turnOff": "Вимкнути",
        "enable.button.turnOn": "Увімкнути",
        "enable.button.settings": "⚙️ Відкрити налаштування",

        "error.heading": "⚠️ Щось пішло не так",
        "error.body": "Спробуйте ще раз, а якщо це повторюється, повідомте про помилку, щоб ми могли розібратися.",
        "error.id": "**ID помилки:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Спробувати ще раз",
        "error.button.reportError": "💬 Повідомити про помилку",

        "notEnoughContext.heading": "🤔 Поки що недостатньо контексту",
        "notEnoughContext.body":
            "Jstmemit потрібно більше часу, щоб вивчити ваш канал, перш ніж він зможе зробити мем. Поспілкуйтеся ще трохи і надішліть кілька GIF. Якщо помилка повторюється, зверніться до підтримки.",
        "unknownTemplate.heading": "🤔 Я не знаю такого шаблону",
        "unknownTemplate.body": "Обов'язково оберіть один з варіантів автодоповнення при виборі шаблону в `/custom`",
        "wrongFileFormat.heading": "🤔 Невідомий формат зображення",
        "wrongFileFormat.body": 'Файл для "{{file}}" не є зображенням. Спробуйте ще раз із PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 У вас немає прав для цього",
        "missingPermissions.body":
            "Тільки учасники з правом **Керувати сервером** або **Керувати каналами** можуть змінювати налаштування Jstmemit. Зверніться до адміністратора сервера, якщо вам потрібно це змінити.",
        "missingBotPermissions.heading": "🔒 Jstmemit не може надсилати меми тут",
        "missingBotPermissions.body":
            "У бота немає деяких прав у цьому каналі. Будь-хто, хто може керувати цим каналом, може це виправити, зайшовши в налаштування каналу і надавши їх боту.\n\nВони потрібні для автогенерації мемів під час розмови, але запитувати меми через `/meme` чи `/custom` можна й без них.",
        "deleteData.confirm.heading": "🗑️ Видалити всі дані для цього каналу?",
        "deleteData.confirm.body":
            "Це назавжди видалить усі збережені повідомлення та посилання на зображення для цього каналу з Jstmemit, і це не можна скасувати. Бот залишиться увімкненим і почне навчатися заново на нових повідомленнях. Якщо після цього ви хочете повністю його зупинити, вимкніть його через `/enable`.",
        "deleteData.success.heading": "✅ Дані видалено!",
        "deleteData.success.body":
            "Усі збережені повідомлення та посилання на зображення для цього каналу було видалено. Бот все ще увімкнений і почне навчатися заново на нових повідомленнях. Вимкніть його через `/enable`, якщо більше не хочете ним користуватися.",
        "deleteData.button.cancel": "Скасувати",
        "deleteData.button.delete": "Видалити всі дані",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Хей, я Jstmemit",
        "settings.about.body":
            "Бот, який робить меми з вашого чату. Говоріть про що завгодно, а він...\nперетворить це на мем на одному з 300+ шаблонів і постібеться з вас ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Увімкніть Jstmemit, щоб почати!",
        "settings.button.disable": "Вимкнути",
        "settings.button.enable": "Увімкнути",
        "settings.status.enabled": "**✅ Jstmemit увімкнено у цьому каналі!**",
        "settings.status.disabled": "**⚠️ Щоб робити меми у цьому каналі, потрібно увімкнути Jstmemit!**",
        "settings.meme.heading": "💬 Налаштування мемів",
        "settings.meme.body": "Ви можете налаштувати, як часто бот буде надсилати меми і що на них буде",
        "settings.quality.heading": "Якість зображення",
        "settings.quality.body": "Оберіть, що важливіше: якість мемів чи швидкість генерації",
        "settings.quality.image.label": "Краща якість (~1,2с на мем)",
        "settings.quality.image.description": "Картинки без стиснення, згладжування увімкнене",
        "settings.quality.speed.label": "Швидка генерація (~0,3с на мем)",
        "settings.quality.speed.description": "Картинки стискаються і зменшуються, текст трохи гірший",
        "settings.frequency.heading": "Частота",
        "settings.frequency.body": "Як часто бот має надсилати випадковий мем у чат без запиту?",
        "settings.frequency.never.label": "Ніколи",
        "settings.frequency.never.description": "Не надсилати меми, окрім запитів через команду /meme",
        "settings.frequency.rarely.label": "Рідко",
        "settings.frequency.rarely.description": "Раз на ~100 повідомлень",
        "settings.frequency.sometimes.label": "Іноді",
        "settings.frequency.sometimes.description": "Раз на ~50 повідомлень (для великих серверів)",
        "settings.frequency.often.label": "Часто",
        "settings.frequency.often.description": "Раз на ~20 повідомлень (для середніх серверів)",
        "settings.frequency.quiteOften.label": "Досить часто",
        "settings.frequency.quiteOften.description": "Раз на ~10 повідомлень (для невеликих серверів)",
        "settings.frequency.veryOften.label": "Дуже часто",
        "settings.frequency.veryOften.description": "Раз на ~5 повідомлень (може робити спам)",
        "settings.avatars.heading": "Аватари у мемах",
        "settings.avatars.body": "Використовувати аватари у згенерованих мемах?",
        "settings.avatars.yes.label": "Так",
        "settings.avatars.yes.description": "Бот буде використовувати аватари для мемів (рекомендовано)",
        "settings.avatars.no.label": "Ні",
        "settings.avatars.no.description": "Бот не буде використовувати аватари для мемів",
        "settings.milestones.heading": "Досягнення",
        "settings.milestones.body":
            "Підсумки каналу, коли він бере нову позначку за мемами.\nЩось на кшталт Spotify Wrapped, тільки про меми.",
        "settings.milestones.yes.label": "Так",
        "settings.milestones.yes.description": "Бот надішле підсумки, коли канал візьме нову позначку",
        "settings.milestones.no.label": "Ні",
        "settings.milestones.no.description": "Вимкнути їх, щоб у каналі було тихо",
        "settings.footer.body": "Хочете видалити всі дані повідомлень цього каналу?",
        "settings.footer.deleteButton": "Видалити всі дані",
        "feedback.submit.heading": "💬 Ідею відправлено!",
        "feedback.submit.body":
            "Дуже дякуємо за ваше повідомлення, наша команда отримала його і розгляне. Якщо хочете обговорити його детальніше, приєднуйтесь до нашого [сервера підтримки](https://discord.gg/THRnn8fhkZ), так ми зможемо надіслати вам відповідь.",
        "feedback.submit.yourMessage": "Ваше повідомлення:",
        "modal.customMeme.title": "Зробити свій мем",
        "modal.customMeme.text.label": "Текст #{{id}}",
        "modal.customMeme.text.placeholder": "Щось смішне сюди",
        "modal.customMeme.image.label": "Картинка #{{id}}",
        "modal.feedback.title": "Відправити ідею",
        "modal.feedback.label": "Ваше повідомлення",
        "modal.feedback.description": "Повідомте про баг, запропонуйте ідею або просто напишіть, що думаєте",
        "modal.feedback.placeholder": "Привіт, додайте будь ласка шаблон мема ...",
        "modal.feedback.title.error": "Повідомити про помилку",
        "modal.feedback.description.error": "Опишіть, що ви робили, коли з'явилася помилка",
        "modal.feedback.placeholder.error": "Помилка з'явилася після ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Хей, я Jstmemit",
        "help.about.commands.user":
            "### 👤 Будь-де в Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 На серверах із ботом: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  А як це взагалі працює?",
        "help.autoMemes.description":
            "Раз на кілька десятків повідомлень він обирає шаблон мема, бере кілька картинок/гіфок/повідомлень і змішує все це в мем.\n\nУ кожного згенерованого мема є кнопки **:thumbsup: Подобається**, **:repeat: Заново** та **:thumbsdown: Не подобається**, які покращують якість майбутніх мемів, допомагаючи боту зрозуміти, що було смішно.",
        "help.rightClick.heading": "## 🖱 Перетворити будь-що на мем",
        "help.rightClick.description":
            "З ним ще можна переробити будь-яке наявне (навіть голосове!) повідомлення на цитату, гарячі новини чи твіт від Grok. Або поставити чиюсь аватарку на прев'ю YouTube у стилі MrBeast.\n\nВідкрийте меню «Застосунки» правим кліком або довгим натисканням на телефоні, оберіть Jstmemit і потрібний мем.",
        "help.voice.heading": "## 🔊  Голосові повідомлення",
        "help.voice.description":
            "Використовуйте `/voice`, щоб озвучити свій текст одним із 23 різних голосів. Чудово підходить для фразочок у саундборд або просто озвучки смішних повідомлень.",
        "help.button.faq": "❓ Часті питання",
        "help.button.features": "✨ Список можливостей",
        "help.faq.heading": "## ❓ Часті питання",
        "help.faq.description":
            "Не знайшли відповідь на своє питання? Ми допоможемо вам на [сервері підтримки](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Я додав бота, що далі?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Запустіть /enable у каналі.** Бот почне вчитися на нових повідомленнях там. Поспілкуйтесь трохи і запустіть /meme, щоб згенерувати мем. Меми також з'являтимуться самі, коли канал активний і триває розмова. Частоту таких мемів можна змінити в /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "Чи можна зробити різні налаштування для кожного каналу?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Так!** Уся інформація про канал, наприклад дані для мемів, частота та інші налаштування, зберігається окремо для кожного каналу. Ніщо не заважає поставити дуже низьку частоту мемів в основному чаті, а у флудилці викрутити її на максимум.",
        "help.faq.isThereALimit.question": "Чи є ліміт на кількість мемів на день?",
        "help.faq.isThereALimit.answer":
            "**Ні, жодних лімітів.** Можете запускати `/meme` скільки завгодно разів на день. І це безкоштовно, бо кожна генерація займає лише мілісекунди. До того ж на мемах немає водяних знаків, тому вони виглядають чистіше, ніж зроблені в інших генераторах мемів.",
        "help.faq.canIDeleteStoredData.question": "Чи можна видалити збережені дані для генерації мемів?",
        "help.faq.canIDeleteStoredData.answer":
            "**Так, будь-коли.** Запустіть `/settings` і натисніть кнопку «Видалити всі дані», щоб стерти все, що бот зберіг для каналу.",
        "help.faq.addBotToMyApps.question": "Чи можна додати бота в «Мої застосунки» і користуватися ним будь-де?",
        "help.faq.addBotToMyApps.answer":
            "**Так, але без частини функцій.** Ви зможете використовувати `/custom` та дії за правим кліком (наприклад «Переробити у цитату» чи «Переробити у гарячі новини») будь-де в Discord. Але меми на основі вашого чату не працюватимуть з міркувань приватності.",
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "А якщо я хочу зробити власний мем з конкретним текстом та/або картинкою?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Використовуйте `/custom`!** Ця команда дозволяє використовувати величезну бібліотеку шаблонів Jstmemit як звичайний генератор мемів з вашим текстом і картинками. І звісно, на таких мемах теж немає ні лімітів, ні водяних знаків.",
        "help.button.addJstmemit": "🔗 Додати Jstmemit",
        "help.button.website": "🌐 Сайт",

        "milestones.heading": `Ура! {{count}} мемів у **<#{{channelId}}>**!`,
        "milestones.description": `Нижче трохи статистики про те, як ви на них реагували.`,
        "milestones.nextGoal": "Наступна ціль: {{currentGoal}}/{{nextGoal}} мемів",
        "milestones.turnOffInSettings":
            "-# Якщо ви не хочете отримувати такі повідомлення, їх можна вимкнути в **/settings**",

        "stats.likes": "Лайки: {{count}}",
        "stats.dislikes": "Дизлайки: {{count}}",
        "stats.templates": "Використано шаблонів: {{count}}",
        "stats.voices": "Використано голосів: {{count}}",
    },
    [Locale.Dutch]: {
        "enable.heading.enabled": "🎉 De bot is er klaar voor!",
        "enable.heading.disabled": "🔴 Jstmemit staat uit in dit kanaal",
        "enable.body.enabled":
            "Jstmemit is nu actief en gaat memes maken tijdens gesprekken hier. De kwaliteit wordt beter naarmate de bot je kanaal leert kennen, met veel betere resultaten zodra er zo'n **~30 berichten** in het geheugen zitten.",
        "enable.body.disabled.ready":
            "Je hebt al meer dan **{{messagesAmount}} berichten** in het geheugen, dus Jstmemit is klaar om memes te maken. Zet de bot gewoon weer aan en hij begint ze te maken tijdens actieve gesprekken.",
        "enable.body.disabled.notReady":
            "De bot kan hier geen memes maken totdat je hem inschakelt voor dit kanaal. Zet hem aan en hij begint memes te maken tijdens actieve gesprekken.",
        "enable.memory.progress": "Berichten in geheugen: **{{messagesAmount}}**",
        "enable.memory.full": "Berichten in geheugen: **{{messagesAmount}}**",
        "enable.permissions.heading": "Er ontbreken een paar permissies!",
        "enable.permissions.sendMessages": "Berichten verzenden",
        "enable.permissions.attachFiles": "Bestanden bijvoegen",
        "enable.permissions.embedLinks": "Links insluiten",
        "enable.permissions.readHistory": "Berichtgeschiedenis lezen",
        "enable.permissions.viewChannel": "Kanaal bekijken",
        "enable.permissions.description":
            "De bot heeft een paar permissies nodig om te werken, zoals **Bestanden bijvoegen** om de memes die hij maakt te kunnen sturen, **Kanaal bekijken** om context voor de memes op te halen of **Links insluiten** zodat het `/settings` menu goed werkt:\n",

        "enable.button.turnOff": "Uitzetten",
        "enable.button.turnOn": "Aanzetten",
        "enable.button.settings": "⚙️ Instellingen openen",

        "error.heading": "⚠️ Er ging iets mis",
        "error.body":
            "Probeer het opnieuw en als het blijft gebeuren, meld de fout dan even zodat we ernaar kunnen kijken.",
        "error.id": "**Fout-ID:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Opnieuw proberen",
        "error.button.reportError": "💬 Fout melden",

        "notEnoughContext.heading": "🤔 Nog niet genoeg context",
        "notEnoughContext.body":
            "Jstmemit heeft meer tijd nodig om je kanaal te leren kennen voordat hij een meme kan maken. Chat nog wat verder en stuur een paar GIF's. Blijft deze fout terugkomen, neem dan contact op met support.",
        "unknownTemplate.heading": "🤔 Die template ken ik niet",
        "unknownTemplate.body":
            "Kies zeker een van de autocomplete opties bij het kiezen van een template in `/custom`",
        "wrongFileFormat.heading": "🤔 Onbekend afbeeldingsformaat",
        "wrongFileFormat.body":
            'Het bestand voor "{{file}}" is geen afbeelding. Probeer het opnieuw met een PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 Daar heb je geen rechten voor",
        "missingPermissions.body":
            "Alleen leden met de permissie **Server beheren** of **Kanalen beheren** kunnen de instellingen van Jstmemit aanpassen. Vraag een serveradmin als je dit wilt veranderen.",
        "missingBotPermissions.heading": "🔒 Jstmemit kan hier geen memes sturen",
        "missingBotPermissions.body":
            "De bot mist een paar permissies in dit kanaal. Iemand die dit kanaal kan beheren kan dit oplossen door naar de kanaalinstellingen te gaan en ze aan de bot te geven.\n\nZe zijn nodig om memes automatisch te maken tijdens een gesprek, maar memes genereren via `/meme` of `/custom` kan ook zonder.",
        "deleteData.confirm.heading": "🗑️ Alle data van dit kanaal verwijderen?",
        "deleteData.confirm.body":
            "Dit verwijdert permanent alle opgeslagen berichten en afbeeldingslinks van dit kanaal uit Jstmemit en kan niet ongedaan gemaakt worden. De bot blijft ingeschakeld en begint opnieuw te leren van nieuwe berichten. Wil je hem daarna helemaal stoppen, zet hem dan uit met `/enable`.",
        "deleteData.success.heading": "✅ Data verwijderd!",
        "deleteData.success.body":
            "Alle opgeslagen berichten en afbeeldingslinks van dit kanaal zijn verwijderd. De bot staat nog aan en begint opnieuw te leren van nieuwe berichten. Zet hem uit met `/enable` als je hem niet meer wilt gebruiken.",
        "deleteData.button.cancel": "Annuleren",
        "deleteData.button.delete": "Alle data verwijderen",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Hey, ik ben Jstmemit",
        "settings.about.body":
            "De bot die memes maakt van jullie chat. Praat waar je maar over wilt en...\nhij plakt het op een van zijn 300+ meme templates en pest je ermee ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Schakel Jstmemit in om te beginnen!",
        "settings.button.disable": "Uitschakelen",
        "settings.button.enable": "Inschakelen",
        "settings.status.enabled": "**✅ Jstmemit staat aan in dit kanaal!**",
        "settings.status.disabled": "**⚠️ Om memes te maken in dit kanaal moet Jstmemit ingeschakeld zijn!**",
        "settings.meme.heading": "💬 Meme instellingen",
        "settings.meme.body": "Je kunt instellen hoe vaak de bot memes stuurt en wat erop staat",
        "settings.quality.heading": "Beeldkwaliteit",
        "settings.quality.body": "Wat vind je belangrijker: mooiere memes of memes die meteen klaar zijn?",
        "settings.quality.image.label": "Betere kwaliteit (~1,2s per meme)",
        "settings.quality.image.description": "Afbeeldingen zonder compressie, met antialiasing",
        "settings.quality.speed.label": "Snellere generatie (~0,3s per meme)",
        "settings.quality.speed.description":
            "Afbeeldingen worden gecomprimeerd en verkleind, tekst iets minder scherp",
        "settings.frequency.heading": "Frequentie",
        "settings.frequency.body": "Hoe vaak moet de bot ongevraagd een random meme in de chat sturen?",
        "settings.frequency.never.label": "Nooit",
        "settings.frequency.never.description": "Geen memes sturen, behalve via een /meme commando",
        "settings.frequency.rarely.label": "Zelden",
        "settings.frequency.rarely.description": "Eén per ~100 berichten",
        "settings.frequency.sometimes.label": "Soms",
        "settings.frequency.sometimes.description": "Eén per ~50 berichten (voor grotere servers)",
        "settings.frequency.often.label": "Vaak",
        "settings.frequency.often.description": "Eén per ~20 berichten (voor middelgrote servers)",
        "settings.frequency.quiteOften.label": "Vrij vaak",
        "settings.frequency.quiteOften.description": "Eén per ~10 berichten (voor kleinere servers)",
        "settings.frequency.veryOften.label": "Heel vaak",
        "settings.frequency.veryOften.description": "Eén per ~5 berichten (kan spam opleveren)",
        "settings.avatars.heading": "Avatars in memes",
        "settings.avatars.body": "Profielfoto's gebruiken in gegenereerde memes?",
        "settings.avatars.yes.label": "Ja",
        "settings.avatars.yes.description": "De bot gebruikt avatars voor memes (aanbevolen)",
        "settings.avatars.no.label": "Nee",
        "settings.avatars.no.description": "De bot gebruikt geen avatars voor memes",
        "settings.milestones.heading": "Mijlpalen",
        "settings.milestones.body":
            "Een recap als het kanaal een meme-mijlpaal haalt.\nEen soort Spotify Wrapped, maar dan over memes.",
        "settings.milestones.yes.label": "Ja",
        "settings.milestones.yes.description": "De bot stuurt een recap als het kanaal een mijlpaal haalt",
        "settings.milestones.no.label": "Nee",
        "settings.milestones.no.description": "Zet ze uit om het kanaal rustig te houden",
        "settings.footer.body": "Wil je alle berichtdata van dit kanaal verwijderen?",
        "settings.footer.deleteButton": "Alle data verwijderen",
        "feedback.submit.heading": "💬 Feedback verstuurd!",
        "feedback.submit.body":
            "Heel erg bedankt voor je bericht, ons team heeft het ontvangen en gaat ernaar kijken. Wil je er verder over praten, kom dan gerust naar onze [Support server](https://discord.gg/THRnn8fhkZ), zo kunnen we je een antwoord sturen.",
        "feedback.submit.yourMessage": "Jouw bericht:",
        "modal.customMeme.title": "Maak je eigen meme",
        "modal.customMeme.text.label": "Tekst #{{id}}",
        "modal.customMeme.text.placeholder": "Iets grappigs hier",
        "modal.customMeme.image.label": "Afbeelding #{{id}}",
        "modal.feedback.title": "Feedback versturen",
        "modal.feedback.label": "Jouw bericht",
        "modal.feedback.description": "Meld een bug, stel een feature voor of laat weten wat je vindt",
        "modal.feedback.placeholder": "Hoi, kunnen jullie het ... meme template toevoegen?",
        "modal.feedback.title.error": "Fout melden",
        "modal.feedback.description.error": "Beschrijf wat je deed toen de fout optrad",
        "modal.feedback.placeholder.error": "Ik kreeg een fout nadat ik ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Hey, ik ben Jstmemit",
        "help.about.commands.user":
            "### 👤 Overal op Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 In servers met de bot: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Maar hoe werkt dat precies?",
        "help.autoMemes.description":
            "Eens per paar dozijn berichten kiest hij een meme template, pakt een paar afbeeldingen/gifs/berichten en gooit alles samen tot een meme.\n\nElke gegenereerde meme heeft **:thumbsup: Like**, **:repeat: Opnieuw** en **:thumbsdown: Dislike** knoppen die de kwaliteit van toekomstige memes verbeteren door de bot te laten snappen wat grappig was.",
        "help.rightClick.heading": "## 🖱 Maak van alles een meme",
        "help.rightClick.description":
            'Je kunt er ook elk bestaand bericht (zelfs een spraakbericht!) mee omtoveren tot een quote, breaking news of een Grok tweet. Of iemands profielfoto in een YouTube thumbnail in "MrBeast stijl" plakken.\n\nOpen het Apps menu na een rechtsklik of lang indrukken op mobiel, kies Jstmemit en selecteer de meme die je wilt.',
        "help.voice.heading": "## 🔊  Spraakberichten maken",
        "help.voice.description":
            "Gebruik `/voice` om je tekst te laten voorlezen door een van de 23 verschillende stemmen. Perfect voor soundboard kreten of gewoon om grappige berichten voor te lezen.",
        "help.button.faq": "❓ Veelgestelde vragen",
        "help.button.features": "✨ Lijst met features",
        "help.faq.heading": "## ❓ Veelgestelde vragen",
        "help.faq.description":
            "Kun je het antwoord op je vraag niet vinden? We helpen je graag in de [Support server](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Ik heb de bot toegevoegd, wat nu?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Voer /enable uit in een kanaal.** De bot begint daar te leren van nieuwe berichten. Chat even en voer dan /meme uit om een meme te maken. Memes komen ook vanzelf wanneer het kanaal actief is en er een gesprek gaande is. De frequentie daarvan kun je aanpassen in /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question": "Kan ik per kanaal andere instellingen hebben?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Ja!** Alle kanaalinformatie, zoals data voor memes, frequentie en andere instellingen, wordt per kanaal apart opgeslagen. Niets houdt je tegen om een hele lage meme frequentie in je hoofdchat te hebben en hem in je spamkanaal juist hoog te zetten.",
        "help.faq.isThereALimit.question": "Zit er een limiet op hoeveel memes de bot per dag kan maken?",
        "help.faq.isThereALimit.answer":
            "**Nee, er zijn geen limieten.** Je kunt `/meme` zo vaak per dag uitvoeren als je wilt. En het is gratis, want elke generatie duurt maar milliseconden. Er staan ook geen watermerken op de memes, dus ze zien er strakker uit dan bij andere meme generators.",
        "help.faq.canIDeleteStoredData.question": "Kan ik opgeslagen data voor het genereren van memes verwijderen?",
        "help.faq.canIDeleteStoredData.answer":
            '**Ja, op elk moment.** Voer `/settings` uit en druk op de knop "Alle data verwijderen" om alles te wissen wat de bot voor het kanaal heeft opgeslagen.',
        "help.faq.addBotToMyApps.question": 'Kan ik de bot toevoegen aan "Mijn apps" en hem overal gebruiken?',
        "help.faq.addBotToMyApps.answer":
            '**Ja, maar zonder sommige functies.** Je kunt `/custom` en de rechtsklik acties (zoals "Maak er een quote van" of "Maak er breaking news van") overal op Discord gebruiken. Maar memes op basis van je chat werken dan niet, vanwege privacy.',
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "Wat als ik een eigen meme wil maken met specifieke tekst en/of afbeelding?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Gebruik `/custom`!** Daarmee gebruik je de gigantische template bibliotheek van Jstmemit als een gewone meme generator met je eigen tekst en afbeeldingen. En natuurlijk zitten er ook op deze memes geen limieten of watermerken.",
        "help.button.addJstmemit": "🔗 Jstmemit toevoegen",
        "help.button.website": "🌐 Website",

        "milestones.heading": `Yes! {{count}} memes in **<#{{channelId}}>**!`,
        "milestones.description": `Hieronder wat stats over hoe jullie erop reageerden.`,
        "milestones.nextGoal": "Volgend doel: {{currentGoal}}/{{nextGoal}} memes",
        "milestones.turnOffInSettings":
            "-# Wil je deze berichten niet ontvangen, dan kun je ze uitzetten in **/settings**",

        "stats.likes": "Likes: {{count}}",
        "stats.dislikes": "Dislikes: {{count}}",
        "stats.templates": "Gebruikte templates: {{count}}",
        "stats.voices": "Gebruikte stemmen: {{count}}",
    },
    [Locale.French]: {
        "enable.heading.enabled": "🎉 Le bot est prêt !",
        "enable.heading.disabled": "🔴 Jstmemit est désactivé dans ce salon",
        "enable.body.enabled":
            "Jstmemit est maintenant actif et va générer des mèmes pendant les discussions ici. La qualité s'améliore au fur et à mesure qu'il apprend à connaître votre salon, avec de bien meilleurs résultats une fois qu'il a environ **~30 messages** en mémoire.",
        "enable.body.disabled.ready":
            "Vous avez déjà plus de **{{messagesAmount}} messages** en mémoire, donc Jstmemit est prêt à faire des mèmes. Réactivez simplement le bot et il commencera à en générer pendant les discussions actives.",
        "enable.body.disabled.notReady":
            "Le bot ne peut pas faire de mèmes ici tant que vous ne l'avez pas activé pour ce salon. Activez-le et il commencera à générer des mèmes pendant les discussions actives.",
        "enable.memory.progress": "Messages en mémoire : **{{messagesAmount}}**",
        "enable.memory.full": "Messages en mémoire : **{{messagesAmount}}**",
        "enable.permissions.heading": "Il manque quelques permissions !",
        "enable.permissions.sendMessages": "Envoyer des messages",
        "enable.permissions.attachFiles": "Joindre des fichiers",
        "enable.permissions.embedLinks": "Intégrer des liens",
        "enable.permissions.readHistory": "Voir les anciens messages",
        "enable.permissions.viewChannel": "Voir le salon",
        "enable.permissions.description":
            "Le bot a besoin de quelques permissions pour fonctionner, comme **Joindre des fichiers** pour pouvoir envoyer les mèmes qu'il génère, **Voir le salon** pour récupérer du contexte pour les mèmes ou **Intégrer des liens** pour que le menu `/settings` marche correctement :\n",

        "enable.button.turnOff": "Désactiver",
        "enable.button.turnOn": "Activer",
        "enable.button.settings": "⚙️ Ouvrir les paramètres",

        "error.heading": "⚠️ Quelque chose s'est mal passé",
        "error.body": "Réessayez, et si cela continue, signalez l'erreur pour qu'on puisse regarder ça.",
        "error.id": "**ID d'erreur :** {{interactionId}}",
        "error.button.tryAgain": "🔁 Réessayer",
        "error.button.reportError": "💬 Signaler l'erreur",

        "notEnoughContext.heading": "🤔 Pas encore assez de contexte",
        "notEnoughContext.body":
            "Jstmemit a besoin de plus de temps pour apprendre à connaître votre salon avant de pouvoir faire un mème. Discutez encore un peu et envoyez quelques GIF. Si cette erreur persiste, contactez le support.",
        "unknownTemplate.heading": "🤔 Je ne connais pas ce modèle",
        "unknownTemplate.body":
            "Veillez à sélectionner une des options d'autocomplétion en choisissant un modèle dans `/custom`",
        "wrongFileFormat.heading": "🤔 Format d'image inconnu",
        "wrongFileFormat.body":
            'Le fichier pour "{{file}}" n\'est pas une image. Réessayez avec un PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 Vous n'avez pas la permission pour ça",
        "missingPermissions.body":
            "Seuls les membres avec la permission **Gérer le serveur** ou **Gérer les salons** peuvent modifier les paramètres de Jstmemit. Demandez à un admin du serveur si vous voulez changer cela.",
        "missingBotPermissions.heading": "🔒 Jstmemit ne peut pas envoyer de mèmes ici",
        "missingBotPermissions.body":
            "Le bot n'a pas certaines permissions dans ce salon. Quelqu'un qui peut gérer ce salon peut corriger ça en allant dans les paramètres du salon et en les donnant au bot.\n\nElles sont nécessaires pour générer des mèmes automatiquement pendant une conversation, mais demander des mèmes avec `/meme` ou `/custom` reste possible sans elles.",
        "deleteData.confirm.heading": "🗑️ Supprimer toutes les données de ce salon ?",
        "deleteData.confirm.body":
            "Cela supprime définitivement tous les messages et liens d'images enregistrés pour ce salon de Jstmemit, et c'est irréversible. Le bot reste activé et recommencera à apprendre avec les nouveaux messages. Si vous voulez l'arrêter complètement ensuite, désactivez-le avec `/enable`.",
        "deleteData.success.heading": "✅ Données supprimées !",
        "deleteData.success.body":
            "Tous les messages et liens d'images enregistrés pour ce salon ont été supprimés. Le bot est toujours actif et recommencera à apprendre avec les nouveaux messages. Désactivez-le avec `/enable` si vous ne voulez plus l'utiliser.",
        "deleteData.button.cancel": "Annuler",
        "deleteData.button.delete": "Supprimer toutes les données",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Hey, moi c'est Jstmemit",
        "settings.about.body":
            "Le bot qui fait des mèmes à partir de votre chat. Parlez de ce que vous voulez et...\nil en fera un mème sur un de ses 300+ modèles pour se moquer de vous ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Activez Jstmemit pour commencer !",
        "settings.button.disable": "Désactiver",
        "settings.button.enable": "Activer",
        "settings.status.enabled": "**✅ Jstmemit est activé dans ce salon !**",
        "settings.status.disabled": "**⚠️ Pour faire des mèmes dans ce salon, il faut activer Jstmemit !**",
        "settings.meme.heading": "💬 Paramètres des mèmes",
        "settings.meme.body": "Vous pouvez contrôler la fréquence d'envoi des mèmes et ce qu'ils contiennent",
        "settings.quality.heading": "Qualité d'image",
        "settings.quality.body":
            "Qu'est-ce qui compte le plus pour vous : des mèmes plus jolis ou générés instantanément ?",
        "settings.quality.image.label": "Meilleure qualité (~1,2s par mème)",
        "settings.quality.image.description": "Images sans compression, avec anticrénelage",
        "settings.quality.speed.label": "Génération plus rapide (~0,3s par mème)",
        "settings.quality.speed.description": "Images compressées et réduites, texte un peu moins net",
        "settings.frequency.heading": "Fréquence",
        "settings.frequency.body":
            "À quelle fréquence le bot doit-il envoyer un mème aléatoire dans le chat sans qu'on lui demande ?",
        "settings.frequency.never.label": "Jamais",
        "settings.frequency.never.description": "Ne pas envoyer de mèmes, sauf via la commande /meme",
        "settings.frequency.rarely.label": "Rarement",
        "settings.frequency.rarely.description": "Un tous les ~100 messages",
        "settings.frequency.sometimes.label": "Parfois",
        "settings.frequency.sometimes.description": "Un tous les ~50 messages (pour les grands serveurs)",
        "settings.frequency.often.label": "Souvent",
        "settings.frequency.often.description": "Un tous les ~20 messages (pour les serveurs moyens)",
        "settings.frequency.quiteOften.label": "Assez souvent",
        "settings.frequency.quiteOften.description": "Un tous les ~10 messages (pour les petits serveurs)",
        "settings.frequency.veryOften.label": "Très souvent",
        "settings.frequency.veryOften.description": "Un tous les ~5 messages (peut produire du spam)",
        "settings.avatars.heading": "Avatars dans les mèmes",
        "settings.avatars.body": "Inclure les photos de profil dans les mèmes générés ?",
        "settings.avatars.yes.label": "Oui",
        "settings.avatars.yes.description": "Le bot utilisera les avatars pour les mèmes (recommandé)",
        "settings.avatars.no.label": "Non",
        "settings.avatars.no.description": "Le bot n'utilisera pas les avatars pour les mèmes",
        "settings.milestones.heading": "Paliers",
        "settings.milestones.body":
            "Un récap quand le salon atteint un palier de mèmes.\nUn peu comme un Spotify Wrapped, mais sur les mèmes.",
        "settings.milestones.yes.label": "Oui",
        "settings.milestones.yes.description": "Le bot enverra un récap quand le salon atteint un palier",
        "settings.milestones.no.label": "Non",
        "settings.milestones.no.description": "Les désactiver pour garder le salon calme",
        "settings.footer.body": "Vous voulez supprimer toutes les données de messages de ce salon ?",
        "settings.footer.deleteButton": "Supprimer toutes les données",
        "feedback.submit.heading": "💬 Avis envoyé !",
        "feedback.submit.body":
            "Merci beaucoup pour votre message, notre équipe l'a bien reçu et va l'examiner. Si vous voulez en discuter davantage, rejoignez notre [serveur de support](https://discord.gg/THRnn8fhkZ), on pourra ainsi vous répondre.",
        "feedback.submit.yourMessage": "Votre message :",
        "modal.customMeme.title": "Générer un mème perso",
        "modal.customMeme.text.label": "Texte #{{id}}",
        "modal.customMeme.text.placeholder": "Quelque chose de drôle ici",
        "modal.customMeme.image.label": "Image #{{id}}",
        "modal.feedback.title": "Envoyer un avis",
        "modal.feedback.label": "Votre message",
        "modal.feedback.description": "Signalez un bug, proposez une fonctionnalité ou donnez votre avis",
        "modal.feedback.placeholder": "Bonjour, pourriez-vous ajouter le modèle de mème ... ?",
        "modal.feedback.title.error": "Signaler l'erreur",
        "modal.feedback.description.error": "Décrivez ce que vous faisiez quand l'erreur est apparue",
        "modal.feedback.placeholder.error": "J'ai eu une erreur après ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Hey, moi c'est Jstmemit",
        "help.about.commands.user":
            "### 👤 Partout sur Discord : **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild":
            "### 🏠 Sur les serveurs avec le bot : **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Mais comment ça marche exactement ?",
        "help.autoMemes.description":
            "Toutes les quelques dizaines de messages, il choisit un modèle de mème, prend quelques images/gifs/messages et mélange le tout en un mème.\n\nChaque mème généré a des boutons **:thumbsup: J'aime**, **:repeat: Regénérer** et **:thumbsdown: Je n'aime pas** qui améliorent la qualité des futurs mèmes en aidant le bot à comprendre ce qui était drôle.",
        "help.rightClick.heading": "## 🖱 Transformez n'importe quoi en mème",
        "help.rightClick.description":
            "Vous pouvez aussi transformer n'importe quel message existant (même vocal !) en citation, en flash info ou en tweet de Grok. Ou mettre la photo de profil de quelqu'un dans une miniature YouTube « style MrBeast ».\n\nOuvrez le menu Applications après un clic droit ou un appui long sur mobile, choisissez Jstmemit et sélectionnez le mème que vous voulez.",
        "help.voice.heading": "## 🔊  Créer des messages vocaux",
        "help.voice.description":
            "Utilisez `/voice` pour faire lire votre texte par une des 23 voix disponibles. Parfait pour des répliques de soundboard ou simplement pour lire des messages drôles.",
        "help.button.faq": "❓ Questions fréquentes",
        "help.button.features": "✨ Liste des fonctionnalités",
        "help.faq.heading": "## ❓ Questions fréquentes",
        "help.faq.description":
            "Vous ne trouvez pas la réponse à votre question ? On peut vous aider sur le [serveur de support](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "J'ai ajouté le bot, et maintenant ?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Lancez /enable dans un salon.** Le bot commencera à apprendre des nouveaux messages là-bas. Après avoir discuté un peu, lancez /meme pour générer un mème. Les mèmes arriveront aussi tout seuls quand le salon est actif et qu'une conversation est en cours. Vous pouvez régler leur fréquence dans /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "Puis-je avoir des paramètres différents pour chaque salon ?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Oui !** Toutes les informations du salon, comme les données pour les mèmes, la fréquence et les autres paramètres, sont stockées séparément pour chaque salon. Rien ne vous empêche d'avoir une fréquence très basse dans votre chat principal et de la mettre au maximum dans votre salon de flood.",
        "help.faq.isThereALimit.question": "Y a-t-il une limite au nombre de mèmes par jour ?",
        "help.faq.isThereALimit.answer":
            "**Non, aucune limite.** Vous pouvez lancer `/meme` autant de fois par jour que vous voulez. Et c'est gratuit, car chaque génération ne prend que quelques millisecondes. Il n'y a pas non plus de filigrane sur les mèmes, donc ils sont plus propres que ceux faits avec d'autres générateurs.",
        "help.faq.canIDeleteStoredData.question":
            "Puis-je supprimer les données stockées pour la génération de mèmes ?",
        "help.faq.canIDeleteStoredData.answer":
            "**Oui, à tout moment.** Lancez `/settings` puis appuyez sur le bouton « Supprimer toutes les données » pour effacer tout ce que le bot a stocké pour le salon.",
        "help.faq.addBotToMyApps.question": "Puis-je ajouter le bot à « Mes applications » et l'utiliser partout ?",
        "help.faq.addBotToMyApps.answer":
            "**Oui, mais sans certaines fonctionnalités.** Vous pourrez utiliser `/custom` et les actions par clic droit (comme « En faire une citation » ou « En faire un flash info ») partout sur Discord. Mais les mèmes basés sur votre chat ne fonctionneront pas, pour des raisons de confidentialité.",
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "Et si je veux faire un mème perso avec un texte et/ou une image en particulier ?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Utilisez `/custom` !** Ça vous permet d'utiliser l'énorme bibliothèque de modèles de Jstmemit comme un générateur de mèmes classique avec vos propres textes et images. Et bien sûr, ces mèmes-là non plus n'ont ni limites ni filigranes.",
        "help.button.addJstmemit": "🔗 Ajouter Jstmemit",
        "help.button.website": "🌐 Site web",

        "milestones.heading": `Youpi ! {{count}} mèmes dans **<#{{channelId}}>** !`,
        "milestones.description": `Voici quelques stats sur la façon dont vous y avez réagi.`,
        "milestones.nextGoal": "Prochain objectif : {{currentGoal}}/{{nextGoal}} mèmes",
        "milestones.turnOffInSettings":
            "-# Si vous ne voulez pas recevoir ces messages, vous pouvez les désactiver dans **/settings**",

        "stats.likes": "J'aime : {{count}}",
        "stats.dislikes": "Je n'aime pas : {{count}}",
        "stats.templates": "Modèles utilisés : {{count}}",
        "stats.voices": "Voix utilisées : {{count}}",
    },
    [Locale.German]: {
        "enable.heading.enabled": "🎉 Der Bot ist bereit!",
        "enable.heading.disabled": "🔴 Jstmemit ist in diesem Kanal deaktiviert",
        "enable.body.enabled":
            "Jstmemit ist jetzt aktiv und wird während der Chats hier Memes erstellen. Die Qualität wird besser, je mehr der Bot deinen Kanal kennenlernt, mit deutlich besseren Ergebnissen sobald etwa **~30 Nachrichten** im Speicher sind.",
        "enable.body.disabled.ready":
            "Du hast bereits über **{{messagesAmount}} Nachrichten** im Speicher, also ist Jstmemit bereit, Memes zu machen. Schalte den Bot einfach wieder ein und er fängt an, sie während aktiver Chats zu erstellen.",
        "enable.body.disabled.notReady":
            "Der Bot kann hier keine Memes machen, bis du ihn für diesen Kanal aktivierst. Schalte ihn ein und er beginnt, während aktiver Chats Memes zu erstellen.",
        "enable.memory.progress": "Nachrichten im Speicher: **{{messagesAmount}}**",
        "enable.memory.full": "Nachrichten im Speicher: **{{messagesAmount}}**",
        "enable.permissions.heading": "Ein paar Berechtigungen fehlen!",
        "enable.permissions.sendMessages": "Nachrichten senden",
        "enable.permissions.attachFiles": "Dateien anhängen",
        "enable.permissions.embedLinks": "Links einbetten",
        "enable.permissions.readHistory": "Nachrichtenverlauf anzeigen",
        "enable.permissions.viewChannel": "Kanal anzeigen",
        "enable.permissions.description":
            "Der Bot braucht ein paar Berechtigungen, um zu funktionieren, zum Beispiel **Dateien anhängen**, um die erstellten Memes senden zu können, **Kanal anzeigen**, um Kontext für die Memes zu bekommen, oder **Links einbetten**, damit das `/settings` Menü richtig funktioniert:\n",

        "enable.button.turnOff": "Ausschalten",
        "enable.button.turnOn": "Einschalten",
        "enable.button.settings": "⚙️ Einstellungen öffnen",

        "error.heading": "⚠️ Etwas ist schiefgelaufen",
        "error.body":
            "Versuche es erneut, und wenn es weiterhin passiert, melde den Fehler, damit wir uns das ansehen können.",
        "error.id": "**Fehler-ID:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Erneut versuchen",
        "error.button.reportError": "💬 Fehler melden",

        "notEnoughContext.heading": "🤔 Noch nicht genug Kontext",
        "notEnoughContext.body":
            "Jstmemit braucht mehr Zeit, um deinen Kanal kennenzulernen, bevor er ein Meme machen kann. Chattet noch ein bisschen und schickt ein paar GIFs. Wenn dieser Fehler weiterhin auftritt, wende dich an den Support.",
        "unknownTemplate.heading": "🤔 Diese Vorlage kenne ich nicht",
        "unknownTemplate.body":
            "Wähle unbedingt eine der Autovervollständigungs-Optionen, wenn du eine Vorlage in `/custom` auswählst",
        "wrongFileFormat.heading": "🤔 Unbekanntes Bildformat",
        "wrongFileFormat.body":
            'Die Datei für "{{file}}" ist kein Bild. Versuche es erneut mit einem PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 Dafür hast du keine Berechtigung",
        "missingPermissions.body":
            "Nur Mitglieder mit der Berechtigung **Server verwalten** oder **Kanäle verwalten** können die Einstellungen von Jstmemit ändern. Frag einen Server-Admin, wenn du das ändern möchtest.",
        "missingBotPermissions.heading": "🔒 Jstmemit kann hier keine Memes senden",
        "missingBotPermissions.body":
            "Dem Bot fehlen ein paar Berechtigungen in diesem Kanal. Wer diesen Kanal verwalten kann, behebt das in den Kanaleinstellungen, indem er sie dem Bot gibt.\n\nSie sind nötig, um Memes während eines Gesprächs automatisch zu erstellen, aber Memes mit `/meme` oder `/custom` anzufordern geht auch ohne sie.",
        "deleteData.confirm.heading": "🗑️ Alle Daten für diesen Kanal löschen?",
        "deleteData.confirm.body":
            "Das löscht dauerhaft alle gespeicherten Nachrichten und Bildlinks für diesen Kanal aus Jstmemit und kann nicht rückgängig gemacht werden. Der Bot bleibt aktiviert und beginnt, aus neuen Nachrichten neu zu lernen. Wenn du ihn danach komplett stoppen willst, schalte ihn mit `/enable` aus.",
        "deleteData.success.heading": "✅ Daten gelöscht!",
        "deleteData.success.body":
            "Alle gespeicherten Nachrichten und Bildlinks für diesen Kanal wurden gelöscht. Der Bot ist noch an und beginnt, aus neuen Nachrichten neu zu lernen. Schalte ihn mit `/enable` aus, wenn du ihn nicht mehr nutzen möchtest.",
        "deleteData.button.cancel": "Abbrechen",
        "deleteData.button.delete": "Alle Daten löschen",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Hey, ich bin Jstmemit",
        "settings.about.body":
            "Der Bot, der Memes aus eurem Chat macht. Redet über was ihr wollt und...\ner macht daraus ein Meme auf einer von 300+ Vorlagen und zieht euch damit auf ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Aktiviere Jstmemit, um loszulegen!",
        "settings.button.disable": "Deaktivieren",
        "settings.button.enable": "Aktivieren",
        "settings.status.enabled": "**✅ Jstmemit ist in diesem Kanal eingeschaltet!**",
        "settings.status.disabled": "**⚠️ Um in diesem Kanal Memes zu machen, muss Jstmemit aktiviert werden!**",
        "settings.meme.heading": "💬 Meme-Einstellungen",
        "settings.meme.body": "Du kannst steuern, wie oft der Bot Memes schickt und was darauf zu sehen ist",
        "settings.quality.heading": "Bildqualität",
        "settings.quality.body": "Was ist dir wichtiger: schönere Memes oder Memes, die sofort da sind?",
        "settings.quality.image.label": "Bessere Qualität (~1,2s pro Meme)",
        "settings.quality.image.description": "Bilder ohne Komprimierung, mit Kantenglättung",
        "settings.quality.speed.label": "Schnellere Generierung (~0,3s pro Meme)",
        "settings.quality.speed.description": "Bilder werden komprimiert und verkleinert, Text etwas unschärfer",
        "settings.frequency.heading": "Häufigkeit",
        "settings.frequency.body": "Wie oft soll der Bot ungefragt ein zufälliges Meme in den Chat schicken?",
        "settings.frequency.never.label": "Nie",
        "settings.frequency.never.description": "Keine Memes schicken, außer über den /meme Befehl",
        "settings.frequency.rarely.label": "Selten",
        "settings.frequency.rarely.description": "Eins pro ~100 Nachrichten",
        "settings.frequency.sometimes.label": "Manchmal",
        "settings.frequency.sometimes.description": "Eins pro ~50 Nachrichten (für größere Server)",
        "settings.frequency.often.label": "Oft",
        "settings.frequency.often.description": "Eins pro ~20 Nachrichten (für mittelgroße Server)",
        "settings.frequency.quiteOften.label": "Ziemlich oft",
        "settings.frequency.quiteOften.description": "Eins pro ~10 Nachrichten (für kleinere Server)",
        "settings.frequency.veryOften.label": "Sehr oft",
        "settings.frequency.veryOften.description": "Eins pro ~5 Nachrichten (kann Spam erzeugen)",
        "settings.avatars.heading": "Avatare in Memes",
        "settings.avatars.body": "Profilbilder in generierten Memes verwenden?",
        "settings.avatars.yes.label": "Ja",
        "settings.avatars.yes.description": "Der Bot verwendet Avatare für Memes (empfohlen)",
        "settings.avatars.no.label": "Nein",
        "settings.avatars.no.description": "Der Bot verwendet keine Avatare für Memes",
        "settings.milestones.heading": "Meilensteine",
        "settings.milestones.body":
            "Ein Rückblick, wenn der Kanal einen Meme-Meilenstein erreicht.\nSo ähnlich wie Spotify Wrapped, nur mit Memes.",
        "settings.milestones.yes.label": "Ja",
        "settings.milestones.yes.description": "Der Bot schickt einen Rückblick, wenn ein Meilenstein erreicht ist",
        "settings.milestones.no.label": "Nein",
        "settings.milestones.no.description": "Ausschalten, damit der Kanal ruhig bleibt",
        "settings.footer.body": "Möchtest du alle Nachrichtendaten dieses Kanals entfernen?",
        "settings.footer.deleteButton": "Alle Daten löschen",
        "feedback.submit.heading": "💬 Feedback abgeschickt!",
        "feedback.submit.body":
            "Vielen Dank für deine Nachricht, unser Team hat sie erhalten und wird sie sich ansehen. Wenn du weiter darüber sprechen möchtest, komm gerne auf unseren [Support-Server](https://discord.gg/THRnn8fhkZ), so können wir dir antworten.",
        "feedback.submit.yourMessage": "Deine Nachricht:",
        "modal.customMeme.title": "Eigenes Meme erstellen",
        "modal.customMeme.text.label": "Text #{{id}}",
        "modal.customMeme.text.placeholder": "Etwas Lustiges hier",
        "modal.customMeme.image.label": "Bild #{{id}}",
        "modal.feedback.title": "Feedback senden",
        "modal.feedback.label": "Deine Nachricht",
        "modal.feedback.description": "Melde einen Bug, schlag ein Feature vor oder sag uns deine Meinung",
        "modal.feedback.placeholder": "Hallo, könnt ihr bitte die Meme-Vorlage ... hinzufügen?",
        "modal.feedback.title.error": "Fehler melden",
        "modal.feedback.description.error": "Beschreibe, was du gemacht hast, als der Fehler auftrat",
        "modal.feedback.placeholder.error": "Ich habe einen Fehler bekommen, nachdem ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Hey, ich bin Jstmemit",
        "help.about.commands.user":
            "### 👤 Überall auf Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 Auf Servern mit dem Bot: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Aber wie funktioniert das genau?",
        "help.autoMemes.description":
            "Alle paar Dutzend Nachrichten sucht er eine Meme-Vorlage aus, nimmt ein paar Bilder/GIFs/Nachrichten und mischt alles zu einem Meme zusammen.\n\nJedes generierte Meme hat **:thumbsup: Gefällt mir**, **:repeat: Nochmal** und **:thumbsdown: Gefällt mir nicht** Buttons, die die Qualität zukünftiger Memes verbessern, weil der Bot dadurch versteht, was lustig war.",
        "help.rightClick.heading": "## 🖱 Mach aus allem ein Meme",
        "help.rightClick.description":
            'Damit kannst du auch jede vorhandene Nachricht (sogar Sprachnachrichten!) in ein Zitat, eine Eilmeldung oder einen Grok-Tweet verwandeln. Oder jemandes Profilbild in ein YouTube-Thumbnail im "MrBeast-Stil" packen.\n\nÖffne das Apps-Menü per Rechtsklick oder langem Drücken auf dem Handy, wähl Jstmemit und dann das Meme, das du haben willst.',
        "help.voice.heading": "## 🔊  Sprachnachrichten erstellen",
        "help.voice.description":
            "Nutze `/voice`, um deinen Text von einer der 23 verschiedenen Stimmen vorlesen zu lassen. Perfekt für Soundboard-Sprüche oder einfach, um lustige Nachrichten vorzulesen.",
        "help.button.faq": "❓ Häufige Fragen",
        "help.button.features": "✨ Funktionsübersicht",
        "help.faq.heading": "## ❓ Häufige Fragen",
        "help.faq.description":
            "Keine Antwort auf deine Frage gefunden? Wir helfen dir auf dem [Support-Server](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Ich habe den Bot hinzugefügt, was jetzt?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Führe /enable in einem Kanal aus.** Der Bot fängt dort an, aus neuen Nachrichten zu lernen. Chattet ein bisschen und führe dann /meme aus, um ein Meme zu generieren. Memes kommen auch von selbst, wenn der Kanal aktiv ist und gerade eine Unterhaltung läuft. Die Häufigkeit dafür kannst du in /settings ändern.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "Kann ich für jeden Kanal andere Einstellungen haben?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Ja!** Alle Kanalinformationen, wie Daten für Memes, Häufigkeit und andere Einstellungen, werden für jeden Kanal separat gespeichert. Nichts hält dich davon ab, im Hauptchat eine sehr niedrige Meme-Häufigkeit zu haben und sie im Spam-Kanal hochzudrehen.",
        "help.faq.isThereALimit.question": "Gibt es ein Limit, wie viele Memes der Bot pro Tag machen kann?",
        "help.faq.isThereALimit.answer":
            "**Nein, es gibt keine Limits.** Du kannst `/meme` so oft am Tag ausführen, wie du willst. Und es ist kostenlos, weil jede Generierung nur Millisekunden dauert. Auf den Memes sind auch keine Wasserzeichen, dadurch sehen sie sauberer aus als bei anderen Meme-Generatoren.",
        "help.faq.canIDeleteStoredData.question": "Kann ich gespeicherte Daten für die Meme-Generierung löschen?",
        "help.faq.canIDeleteStoredData.answer":
            '**Ja, jederzeit.** Führe `/settings` aus und drücke den Button "Alle Daten löschen", um alles zu löschen, was der Bot für den Kanal gespeichert hat.',
        "help.faq.addBotToMyApps.question": 'Kann ich den Bot zu "Meine Apps" hinzufügen und überall nutzen?',
        "help.faq.addBotToMyApps.answer":
            '**Ja, aber ohne manche Funktionen.** Du kannst `/custom` und die Rechtsklick-Aktionen (wie "Mach ein Zitat draus" oder "Mach eine Eilmeldung draus") überall auf Discord nutzen. Aber Memes auf Basis eures Chats funktionieren dann nicht, aus Datenschutzgründen.',
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "Was, wenn ich ein eigenes Meme mit bestimmtem Text und/oder Bild machen will?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Nutze `/custom`!** Damit kannst du die riesige Vorlagen-Bibliothek von Jstmemit als ganz normalen Meme-Generator mit eigenem Text und eigenen Bildern verwenden. Und natürlich gibt es auch bei diesen Memes keine Limits und keine Wasserzeichen.",
        "help.button.addJstmemit": "🔗 Jstmemit hinzufügen",
        "help.button.website": "🌐 Website",

        "milestones.heading": `Yay! {{count}} Memes in **<#{{channelId}}>**!`,
        "milestones.description": `Unten ein paar Statistiken dazu, wie ihr darauf reagiert habt.`,
        "milestones.nextGoal": "Nächstes Ziel: {{currentGoal}}/{{nextGoal}} Memes",
        "milestones.turnOffInSettings":
            "-# Wenn du diese Nachrichten nicht bekommen willst, kannst du sie in **/settings** deaktivieren",

        "stats.likes": "Gefällt mir: {{count}}",
        "stats.dislikes": "Gefällt mir nicht: {{count}}",
        "stats.templates": "Verwendete Vorlagen: {{count}}",
        "stats.voices": "Verwendete Stimmen: {{count}}",
    },
    [Locale.Polish]: {
        "enable.heading.enabled": "🎉 Bot jest gotowy!",
        "enable.heading.disabled": "🔴 Jstmemit jest wyłączony na tym kanale",
        "enable.body.enabled":
            "Jstmemit jest teraz aktywny i będzie generować memy podczas rozmów tutaj. Jakość poprawia się w miarę jak bot poznaje twój kanał, a wyniki będą znacznie lepsze, gdy w pamięci znajdzie się około **~30 wiadomości**.",
        "enable.body.disabled.ready":
            "Masz już ponad **{{messagesAmount}} wiadomości** w pamięci, więc Jstmemit jest gotowy do robienia memów. Po prostu włącz bota z powrotem, a zacznie je generować podczas aktywnych rozmów.",
        "enable.body.disabled.notReady":
            "Bot nie może robić memów tutaj, dopóki nie włączysz go dla tego kanału. Włącz go, a zacznie generować memy podczas aktywnych rozmów.",
        "enable.memory.progress": "Wiadomości w pamięci: **{{messagesAmount}}**",
        "enable.memory.full": "Wiadomości w pamięci: **{{messagesAmount}}**",
        "enable.permissions.heading": "Brakuje kilku uprawnień!",
        "enable.permissions.sendMessages": "Wysyłanie wiadomości",
        "enable.permissions.attachFiles": "Załączanie plików",
        "enable.permissions.embedLinks": "Osadzanie linków",
        "enable.permissions.readHistory": "Czytanie historii wiadomości",
        "enable.permissions.viewChannel": "Wyświetlanie kanału",
        "enable.permissions.description":
            "Bot potrzebuje kilku uprawnień, żeby działać, na przykład **Załączanie plików**, żeby móc wysyłać zrobione memy, **Wyświetlanie kanału**, żeby mieć kontekst do memów, albo **Osadzanie linków**, żeby menu `/settings` działało poprawnie:\n",

        "enable.button.turnOff": "Wyłącz",
        "enable.button.turnOn": "Włącz",
        "enable.button.settings": "⚙️ Otwórz ustawienia",

        "error.heading": "⚠️ Coś poszło nie tak",
        "error.body": "Spróbuj ponownie, a jeśli to się powtarza, zgłoś błąd, żebyśmy mogli się temu przyjrzeć.",
        "error.id": "**ID błędu:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Spróbuj ponownie",
        "error.button.reportError": "💬 Zgłoś błąd",

        "notEnoughContext.heading": "🤔 Jeszcze za mało kontekstu",
        "notEnoughContext.body":
            "Jstmemit potrzebuje więcej czasu, żeby poznać twój kanał, zanim będzie mógł zrobić mema. Porozmawiajcie jeszcze trochę i wyślijcie kilka GIF-ów. Jeśli ten błąd się powtarza, skontaktuj się z supportem.",
        "unknownTemplate.heading": "🤔 Nie znam takiego szablonu",
        "unknownTemplate.body": "Koniecznie wybierz jedną z opcji autouzupełniania przy wyborze szablonu w `/custom`",
        "wrongFileFormat.heading": "🤔 Nieznany format obrazka",
        "wrongFileFormat.body": 'Plik dla "{{file}}" nie jest obrazkiem. Spróbuj ponownie z PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 Nie masz do tego uprawnień",
        "missingPermissions.body":
            "Tylko członkowie z uprawnieniem **Zarządzanie serwerem** lub **Zarządzanie kanałami** mogą zmieniać ustawienia Jstmemit. Poproś admina serwera, jeśli chcesz to zmienić.",
        "missingBotPermissions.heading": "🔒 Jstmemit nie może wysyłać memów tutaj",
        "missingBotPermissions.body":
            "Bot nie ma niektórych uprawnień na tym kanale. Ktoś, kto może zarządzać tym kanałem, może to naprawić, wchodząc w ustawienia kanału i nadając je botowi.\n\nSą one potrzebne do automatycznego robienia memów podczas rozmowy, ale zamawianie memów przez `/meme` lub `/custom` działa też bez nich.",
        "deleteData.confirm.heading": "🗑️ Usunąć wszystkie dane tego kanału?",
        "deleteData.confirm.body":
            "To trwale usunie wszystkie zapisane wiadomości i linki do obrazków dla tego kanału z Jstmemit i nie można tego cofnąć. Bot pozostanie włączony i zacznie uczyć się od nowa z nowych wiadomości. Jeśli potem chcesz go całkowicie zatrzymać, wyłącz go przez `/enable`.",
        "deleteData.success.heading": "✅ Dane usunięte!",
        "deleteData.success.body":
            "Wszystkie zapisane wiadomości i linki do obrazków dla tego kanału zostały usunięte. Bot jest nadal włączony i zacznie uczyć się od nowa z nowych wiadomości. Wyłącz go przez `/enable`, jeśli nie chcesz już z niego korzystać.",
        "deleteData.button.cancel": "Anuluj",
        "deleteData.button.delete": "Usuń wszystkie dane",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Hej, jestem Jstmemit",
        "settings.about.body":
            "Bot, który robi memy z waszego czatu. Gadajcie o czym chcecie, a on...\nwrzuci to na jeden z 300+ szablonów i zrobi sobie z was jaja ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Włącz Jstmemit, żeby zacząć!",
        "settings.button.disable": "Wyłącz",
        "settings.button.enable": "Włącz",
        "settings.status.enabled": "**✅ Jstmemit jest włączony na tym kanale!**",
        "settings.status.disabled": "**⚠️ Żeby robić memy na tym kanale, trzeba włączyć Jstmemit!**",
        "settings.meme.heading": "💬 Ustawienia memów",
        "settings.meme.body": "Możesz kontrolować, jak często bot będzie wysyłać memy i co na nich będzie",
        "settings.quality.heading": "Jakość obrazu",
        "settings.quality.body": "Co jest dla ciebie ważniejsze: ładniejsze memy czy memy od razu?",
        "settings.quality.image.label": "Lepsza jakość (~1,2s na mema)",
        "settings.quality.image.description": "Obrazki bez kompresji, z wygładzaniem",
        "settings.quality.speed.label": "Szybsze generowanie (~0,3s na mema)",
        "settings.quality.speed.description": "Obrazki są kompresowane i zmniejszane, tekst trochę gorszy",
        "settings.frequency.heading": "Częstotliwość",
        "settings.frequency.body": "Jak często bot ma wysyłać losowego mema na czat bez pytania?",
        "settings.frequency.never.label": "Nigdy",
        "settings.frequency.never.description": "Nie wysyłaj memów, chyba że przez komendę /meme",
        "settings.frequency.rarely.label": "Rzadko",
        "settings.frequency.rarely.description": "Raz na ~100 wiadomości",
        "settings.frequency.sometimes.label": "Czasami",
        "settings.frequency.sometimes.description": "Raz na ~50 wiadomości (dla większych serwerów)",
        "settings.frequency.often.label": "Często",
        "settings.frequency.often.description": "Raz na ~20 wiadomości (dla średnich serwerów)",
        "settings.frequency.quiteOften.label": "Dość często",
        "settings.frequency.quiteOften.description": "Raz na ~10 wiadomości (dla mniejszych serwerów)",
        "settings.frequency.veryOften.label": "Bardzo często",
        "settings.frequency.veryOften.description": "Raz na ~5 wiadomości (może robić spam)",
        "settings.avatars.heading": "Awatary w memach",
        "settings.avatars.body": "Używać zdjęć profilowych w generowanych memach?",
        "settings.avatars.yes.label": "Tak",
        "settings.avatars.yes.description": "Bot będzie używać awatarów do memów (zalecane)",
        "settings.avatars.no.label": "Nie",
        "settings.avatars.no.description": "Bot nie będzie używać awatarów do memów",
        "settings.milestones.heading": "Kamienie milowe",
        "settings.milestones.body":
            "Podsumowanie, gdy kanał osiągnie kolejny próg memów.\nCoś jak Spotify Wrapped, tylko o memach.",
        "settings.milestones.yes.label": "Tak",
        "settings.milestones.yes.description": "Bot wyśle podsumowanie, gdy kanał osiągnie kolejny próg",
        "settings.milestones.no.label": "Nie",
        "settings.milestones.no.description": "Wyłącz je, żeby na kanale było cicho",
        "settings.footer.body": "Chcesz usunąć wszystkie dane wiadomości tego kanału?",
        "settings.footer.deleteButton": "Usuń wszystkie dane",
        "feedback.submit.heading": "💬 Opinia wysłana!",
        "feedback.submit.body":
            "Bardzo dziękujemy za wiadomość, nasz zespół ją otrzymał i się nią zajmie. Jeśli chcesz porozmawiać o niej więcej, dołącz do naszego [serwera supportu](https://discord.gg/THRnn8fhkZ), dzięki temu będziemy mogli ci odpowiedzieć.",
        "feedback.submit.yourMessage": "Twoja wiadomość:",
        "modal.customMeme.title": "Zrób własnego mema",
        "modal.customMeme.text.label": "Tekst #{{id}}",
        "modal.customMeme.text.placeholder": "Coś śmiesznego tutaj",
        "modal.customMeme.image.label": "Obrazek #{{id}}",
        "modal.feedback.title": "Wyślij opinię",
        "modal.feedback.label": "Twoja wiadomość",
        "modal.feedback.description": "Zgłoś błąd, zaproponuj funkcję lub podziel się opinią",
        "modal.feedback.placeholder": "Cześć, moglibyście dodać szablon mema ...?",
        "modal.feedback.title.error": "Zgłoś błąd",
        "modal.feedback.description.error": "Opisz, co się działo, gdy pojawił się błąd",
        "modal.feedback.placeholder.error": "Dostałem błąd po ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Hej, jestem Jstmemit",
        "help.about.commands.user":
            "### 👤 Wszędzie na Discordzie: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 Na serwerach z botem: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Ale jak to właściwie działa?",
        "help.autoMemes.description":
            "Raz na kilkadziesiąt wiadomości wybiera szablon mema, bierze kilka obrazków/gifów/wiadomości i miesza to wszystko w mema.\n\nKażdy wygenerowany mem ma przyciski **:thumbsup: Lubię to**, **:repeat: Jeszcze raz** i **:thumbsdown: Nie lubię**, które poprawiają jakość przyszłych memów, pomagając botowi zrozumieć, co było śmieszne.",
        "help.rightClick.heading": "## 🖱 Zrób mema z czegokolwiek",
        "help.rightClick.description":
            "Możesz nim też przerobić dowolną istniejącą wiadomość (nawet głosową!) na cytat, pilne wiadomości albo tweeta Groka. Albo wstawić czyjeś zdjęcie profilowe na miniaturę YouTube „w stylu MrBeasta”.\n\nOtwórz menu Aplikacje prawym kliknięciem lub długim przytrzymaniem na telefonie, wybierz Jstmemit i mema, który cię interesuje.",
        "help.voice.heading": "## 🔊  Twórz wiadomości głosowe",
        "help.voice.description":
            "Użyj `/voice`, żeby przeczytać swój tekst jednym z 23 różnych głosów. Świetne do tekstów na soundboard albo po prostu do czytania śmiesznych wiadomości.",
        "help.button.faq": "❓ Częste pytania",
        "help.button.features": "✨ Lista funkcji",
        "help.faq.heading": "## ❓ Częste pytania",
        "help.faq.description":
            "Nie możesz znaleźć odpowiedzi na swoje pytanie? Pomożemy ci na [serwerze supportu](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Dodałem bota, co dalej?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Uruchom /enable na kanale.** Bot zacznie się tam uczyć z nowych wiadomości. Po chwili rozmowy uruchom /meme, żeby wygenerować mema. Memy będą też pojawiać się same, gdy kanał jest aktywny i trwa rozmowa. Ich częstotliwość możesz zmienić w /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "Czy mogę mieć różne ustawienia dla każdego kanału?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Tak!** Wszystkie informacje o kanale, takie jak dane do memów, częstotliwość i inne ustawienia, są przechowywane osobno dla każdego kanału. Nic nie stoi na przeszkodzie, żeby mieć bardzo niską częstotliwość memów na głównym czacie, a na spamie wykręcić ją na maksa.",
        "help.faq.isThereALimit.question": "Czy jest limit memów, które bot może zrobić dziennie?",
        "help.faq.isThereALimit.answer":
            "**Nie, nie ma żadnych limitów.** Możesz uruchamiać `/meme` ile razy dziennie chcesz. I to za darmo, bo każda generacja trwa tylko milisekundy. Na memach nie ma też znaków wodnych, więc wyglądają czyściej niż te zrobione w innych generatorach memów.",
        "help.faq.canIDeleteStoredData.question": "Czy mogę usunąć zapisane dane do generowania memów?",
        "help.faq.canIDeleteStoredData.answer":
            "**Tak, w każdej chwili.** Uruchom `/settings` i naciśnij przycisk „Usuń wszystkie dane”, żeby skasować wszystko, co bot zapisał dla kanału.",
        "help.faq.addBotToMyApps.question": "Czy mogę dodać bota do „Moich aplikacji” i używać go wszędzie?",
        "help.faq.addBotToMyApps.answer":
            "**Tak, ale bez niektórych funkcji.** Będziesz mógł używać `/custom` i akcji z prawego kliknięcia (jak „Zrób z tego cytat” czy „Zrób z tego pilne wiadomości”) wszędzie na Discordzie. Ale memy na podstawie waszego czatu nie będą działać ze względu na prywatność.",
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "A co, jeśli chcę zrobić własnego mema z konkretnym tekstem i/lub obrazkiem?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Użyj `/custom`!** Ta komenda pozwala korzystać z ogromnej biblioteki szablonów Jstmemit jak ze zwykłego generatora memów z własnym tekstem i obrazkami. I oczywiście na tych memach też nie ma limitów ani znaków wodnych.",
        "help.button.addJstmemit": "🔗 Dodaj Jstmemit",
        "help.button.website": "🌐 Strona",

        "milestones.heading": `Hurra! {{count}} memów w **<#{{channelId}}>**!`,
        "milestones.description": `Poniżej trochę statystyk o tym, jak na nie reagowaliście.`,
        "milestones.nextGoal": "Następny cel: {{currentGoal}}/{{nextGoal}} memów",
        "milestones.turnOffInSettings":
            "-# Jeśli nie chcesz dostawać takich wiadomości, możesz je wyłączyć w **/settings**",

        "stats.likes": "Polubienia: {{count}}",
        "stats.dislikes": "Łapki w dół: {{count}}",
        "stats.templates": "Użyte szablony: {{count}}",
        "stats.voices": "Użyte głosy: {{count}}",
    },
    [Locale.SpanishES]: {
        "enable.heading.enabled": "🎉 ¡El bot está listo!",
        "enable.heading.disabled": "🔴 Jstmemit está desactivado en este canal",
        "enable.body.enabled":
            "Jstmemit ya está activo y generará memes durante las conversaciones aquí. La calidad mejora a medida que conoce tu canal, con resultados mucho mejores cuando tenga unos **~30 mensajes** en memoria.",
        "enable.body.disabled.ready":
            "Ya tienes más de **{{messagesAmount}} mensajes** en memoria, así que Jstmemit está listo para hacer memes. Solo vuelve a activar el bot y empezará a generarlos durante las conversaciones activas.",
        "enable.body.disabled.notReady":
            "El bot no puede hacer memes aquí hasta que lo actives para este canal. Actívalo y empezará a generar memes durante las conversaciones activas.",
        "enable.memory.progress": "Mensajes en memoria: **{{messagesAmount}}**",
        "enable.memory.full": "Mensajes en memoria: **{{messagesAmount}}**",
        "enable.permissions.heading": "¡Faltan algunos permisos!",
        "enable.permissions.sendMessages": "Enviar mensajes",
        "enable.permissions.attachFiles": "Adjuntar archivos",
        "enable.permissions.embedLinks": "Insertar enlaces",
        "enable.permissions.readHistory": "Leer el historial de mensajes",
        "enable.permissions.viewChannel": "Ver canal",
        "enable.permissions.description":
            "El bot necesita un par de permisos para funcionar, como **Adjuntar archivos** para poder enviar los memes que genera, **Ver canal** para obtener contexto para los memes o **Insertar enlaces** para que el menú `/settings` funcione bien:\n",

        "enable.button.turnOff": "Desactivar",
        "enable.button.turnOn": "Activar",
        "enable.button.settings": "⚙️ Abrir ajustes",

        "error.heading": "⚠️ Algo ha salido mal",
        "error.body": "Inténtalo de nuevo y si sigue pasando, informa del error para que podamos investigarlo.",
        "error.id": "**ID de error:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Intentar de nuevo",
        "error.button.reportError": "💬 Informar del error",

        "notEnoughContext.heading": "🤔 Aún no hay suficiente contexto",
        "notEnoughContext.body":
            "Jstmemit necesita más tiempo para conocer tu canal antes de poder hacer un meme. Chatead un poco más y enviad un par de GIFs. Si este error persiste, contacta con soporte.",
        "unknownTemplate.heading": "🤔 No conozco esa plantilla",
        "unknownTemplate.body":
            "Asegúrate de seleccionar una de las opciones de autocompletado al elegir una plantilla en `/custom`",
        "wrongFileFormat.heading": "🤔 Formato de imagen desconocido",
        "wrongFileFormat.body":
            'El archivo de "{{file}}" no es una imagen. Inténtalo de nuevo con un PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 No tienes permiso para eso",
        "missingPermissions.body":
            "Solo los miembros con el permiso **Gestionar servidor** o **Gestionar canales** pueden cambiar los ajustes de Jstmemit. Pídeselo a un admin del servidor si necesitas cambiarlo.",
        "missingBotPermissions.heading": "🔒 Jstmemit no puede enviar memes aquí",
        "missingBotPermissions.body":
            "Al bot le faltan algunos permisos en este canal. Cualquiera que pueda gestionar este canal puede arreglarlo entrando en los ajustes del canal y dándoselos al bot.\n\nHacen falta para generar memes automáticamente durante una conversación, pero pedir memes con `/meme` o `/custom` sigue siendo posible sin ellos.",
        "deleteData.confirm.heading": "🗑️ ¿Borrar todos los datos de este canal?",
        "deleteData.confirm.body":
            "Esto borra permanentemente todos los mensajes y enlaces de imágenes guardados de este canal en Jstmemit y no se puede deshacer. El bot sigue activado y empezará a aprender de nuevo con los mensajes nuevos. Si después quieres detenerlo por completo, desactívalo con `/enable`.",
        "deleteData.success.heading": "✅ ¡Datos borrados!",
        "deleteData.success.body":
            "Todos los mensajes y enlaces de imágenes guardados de este canal han sido borrados. El bot sigue activo y empezará a aprender de nuevo con los mensajes nuevos. Desactívalo con `/enable` si ya no quieres usarlo.",
        "deleteData.button.cancel": "Cancelar",
        "deleteData.button.delete": "Borrar todos los datos",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Ey, soy Jstmemit",
        "settings.about.body":
            "El bot que hace memes de vuestro chat. Hablad de lo que queráis y...\nlo convertirá en un meme con una de sus 300+ plantillas para reírse de vosotros ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "¡Activa Jstmemit para empezar!",
        "settings.button.disable": "Desactivar",
        "settings.button.enable": "Activar",
        "settings.status.enabled": "**✅ ¡Jstmemit está activado en este canal!**",
        "settings.status.disabled": "**⚠️ ¡Para hacer memes en este canal hay que activar Jstmemit!**",
        "settings.meme.heading": "💬 Ajustes de memes",
        "settings.meme.body": "Puedes controlar con qué frecuencia el bot enviará memes y qué aparece en ellos",
        "settings.quality.heading": "Calidad de imagen",
        "settings.quality.body": "¿Qué prefieres: memes con mejor calidad o memes al instante?",
        "settings.quality.image.label": "Mejor calidad (~1,2s por meme)",
        "settings.quality.image.description": "Imágenes sin comprimir, con suavizado",
        "settings.quality.speed.label": "Generación más rápida (~0,3s por meme)",
        "settings.quality.speed.description": "Las imágenes se comprimen y reducen, el texto queda algo peor",
        "settings.frequency.heading": "Frecuencia",
        "settings.frequency.body":
            "¿Con qué frecuencia debe el bot enviar un meme aleatorio al chat sin que se lo pidan?",
        "settings.frequency.never.label": "Nunca",
        "settings.frequency.never.description": "No enviar memes, salvo que se pidan con el comando /meme",
        "settings.frequency.rarely.label": "Rara vez",
        "settings.frequency.rarely.description": "Uno cada ~100 mensajes",
        "settings.frequency.sometimes.label": "A veces",
        "settings.frequency.sometimes.description": "Uno cada ~50 mensajes (para servidores grandes)",
        "settings.frequency.often.label": "A menudo",
        "settings.frequency.often.description": "Uno cada ~20 mensajes (para servidores medianos)",
        "settings.frequency.quiteOften.label": "Bastante a menudo",
        "settings.frequency.quiteOften.description": "Uno cada ~10 mensajes (para servidores pequeños)",
        "settings.frequency.veryOften.label": "Muy a menudo",
        "settings.frequency.veryOften.description": "Uno cada ~5 mensajes (puede generar spam)",
        "settings.avatars.heading": "Avatares en los memes",
        "settings.avatars.body": "¿Incluir fotos de perfil en los memes generados?",
        "settings.avatars.yes.label": "Sí",
        "settings.avatars.yes.description": "El bot usará avatares para los memes (recomendado)",
        "settings.avatars.no.label": "No",
        "settings.avatars.no.description": "El bot no usará avatares para los memes",
        "settings.milestones.heading": "Hitos",
        "settings.milestones.body":
            "Un resumen cuando el canal alcanza un hito de memes.\nAlgo parecido a un Spotify Wrapped, pero de memes.",
        "settings.milestones.yes.label": "Sí",
        "settings.milestones.yes.description": "El bot enviará un resumen cuando el canal alcance un hito",
        "settings.milestones.no.label": "No",
        "settings.milestones.no.description": "Desactivarlos para mantener el canal tranquilo",
        "settings.footer.body": "¿Quieres eliminar todos los datos de mensajes de este canal?",
        "settings.footer.deleteButton": "Borrar todos los datos",
        "feedback.submit.heading": "💬 ¡Sugerencia enviada!",
        "feedback.submit.body":
            "Muchas gracias por tu mensaje, nuestro equipo lo ha recibido y lo revisará. Si quieres comentarlo más a fondo, únete a nuestro [servidor de soporte](https://discord.gg/THRnn8fhkZ), así podremos enviarte una respuesta.",
        "feedback.submit.yourMessage": "Tu mensaje:",
        "modal.customMeme.title": "Generar mi meme",
        "modal.customMeme.text.label": "Texto #{{id}}",
        "modal.customMeme.text.placeholder": "Algo gracioso aquí",
        "modal.customMeme.image.label": "Imagen #{{id}}",
        "modal.feedback.title": "Enviar sugerencia",
        "modal.feedback.label": "Tu mensaje",
        "modal.feedback.description": "Informa de un error, sugiere una función o dinos qué opinas",
        "modal.feedback.placeholder": "Hola, ¿podríais añadir la plantilla de meme ...?",
        "modal.feedback.title.error": "Informar del error",
        "modal.feedback.description.error": "Cuéntanos qué estabas haciendo cuando apareció el error",
        "modal.feedback.placeholder.error": "Me dio un error después de ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Ey, soy Jstmemit",
        "help.about.commands.user":
            "### 👤 En cualquier parte de Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 En servidores con el bot: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Pero ¿cómo funciona exactamente?",
        "help.autoMemes.description":
            "Una vez cada varias docenas de mensajes elige una plantilla de meme, coge un par de imágenes/gifs/mensajes y lo mezcla todo en un meme.\n\nCada meme generado tiene botones de **:thumbsup: Me gusta**, **:repeat: Regenerar** y **:thumbsdown: No me gusta** que mejoran la calidad de los memes futuros ayudando al bot a entender qué tuvo gracia.",
        "help.rightClick.heading": "## 🖱 Convierte cualquier cosa en un meme",
        "help.rightClick.description":
            "Con él también puedes convertir cualquier mensaje ya enviado (¡incluso de voz!) en una cita, una noticia urgente o un tweet de Grok. O poner la foto de perfil de alguien en una miniatura de YouTube «estilo MrBeast».\n\nAbre el menú Aplicaciones con clic derecho o pulsación larga en el móvil, elige Jstmemit y selecciona el meme que quieras.",
        "help.voice.heading": "## 🔊  Crea mensajes de voz",
        "help.voice.description":
            "Usa `/voice` para narrar tu texto con una de las 23 voces disponibles. Perfecto para frases de soundboard o simplemente para leer mensajes graciosos.",
        "help.button.faq": "❓ Preguntas frecuentes",
        "help.button.features": "✨ Lista de funciones",
        "help.faq.heading": "## ❓ Preguntas frecuentes",
        "help.faq.description":
            "¿No encuentras respuesta a tu pregunta? Podemos ayudarte en el [servidor de soporte](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Ya he añadido el bot, ¿y ahora qué?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Ejecuta /enable en un canal.** El bot empezará a aprender de los mensajes nuevos ahí. Después de chatear un rato, ejecuta /meme para generar un meme. Los memes también llegarán solos cuando el canal esté activo y haya una conversación en marcha. Puedes cambiar su frecuencia en /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "¿Puedo tener ajustes distintos para cada canal?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**¡Sí!** Toda la información del canal, como los datos para memes, la frecuencia y demás ajustes, se guarda por separado para cada canal. Nada te impide tener una frecuencia muy baja en el chat principal y ponerla al máximo en el canal de spam.",
        "help.faq.isThereALimit.question": "¿Hay un límite de memes que el bot puede hacer al día?",
        "help.faq.isThereALimit.answer":
            "**No, no hay límites.** Puedes ejecutar `/meme` tantas veces al día como quieras. Y es gratis, porque cada generación solo tarda milisegundos. Además los memes no llevan marca de agua, así que quedan más limpios que los hechos con otros generadores de memes.",
        "help.faq.canIDeleteStoredData.question": "¿Puedo borrar los datos guardados para generar memes?",
        "help.faq.canIDeleteStoredData.answer":
            "**Sí, en cualquier momento.** Ejecuta `/settings` y pulsa el botón «Borrar todos los datos» para eliminar todo lo que el bot ha guardado del canal.",
        "help.faq.addBotToMyApps.question": "¿Puedo añadir el bot a «Mis aplicaciones» y usarlo en cualquier parte?",
        "help.faq.addBotToMyApps.answer":
            "**Sí, pero sin algunas funciones.** Podrás usar `/custom` y las acciones del clic derecho (como «Convertir en cita» o «Convertir en noticia urgente») en cualquier parte de Discord. Pero los memes basados en vuestro chat no funcionarán, por privacidad.",
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "¿Y si quiero hacer un meme con un texto y/o imagen concretos?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**¡Usa `/custom`!** Te permite usar la enorme biblioteca de plantillas de Jstmemit como un generador de memes normal con tus propios textos e imágenes. Y por supuesto, estos memes tampoco tienen límites ni marcas de agua.",
        "help.button.addJstmemit": "🔗 Añadir Jstmemit",
        "help.button.website": "🌐 Web",

        "milestones.heading": `¡Yuju! ¡{{count}} memes en **<#{{channelId}}>**!`,
        "milestones.description": `Abajo tienes algunas estadísticas de cómo reaccionasteis a ellos.`,
        "milestones.nextGoal": "Próximo objetivo: {{currentGoal}}/{{nextGoal}} memes",
        "milestones.turnOffInSettings":
            "-# Si no quieres recibir estos mensajes, puedes desactivarlos en **/settings**",

        "stats.likes": "Me gusta: {{count}}",
        "stats.dislikes": "No me gusta: {{count}}",
        "stats.templates": "Plantillas usadas: {{count}}",
        "stats.voices": "Voces usadas: {{count}}",
    },
    [Locale.SpanishLATAM]: {
        "enable.heading.enabled": "🎉 ¡El bot está listo!",
        "enable.heading.disabled": "🔴 Jstmemit está desactivado en este canal",
        "enable.body.enabled":
            "Jstmemit ya está activo y generará memes durante las conversaciones aquí. La calidad mejora a medida que conoce tu canal, con resultados mucho mejores cuando tenga unos **~30 mensajes** en memoria.",
        "enable.body.disabled.ready":
            "Ya tienes más de **{{messagesAmount}} mensajes** en memoria, así que Jstmemit está listo para hacer memes. Solo vuelve a activar el bot y empezará a generarlos durante las conversaciones activas.",
        "enable.body.disabled.notReady":
            "El bot no puede hacer memes aquí hasta que lo actives para este canal. Actívalo y empezará a generar memes durante las conversaciones activas.",
        "enable.memory.progress": "Mensajes en memoria: **{{messagesAmount}}**",
        "enable.memory.full": "Mensajes en memoria: **{{messagesAmount}}**",
        "enable.permissions.heading": "¡Faltan algunos permisos!",
        "enable.permissions.sendMessages": "Enviar mensajes",
        "enable.permissions.attachFiles": "Adjuntar archivos",
        "enable.permissions.embedLinks": "Insertar enlaces",
        "enable.permissions.readHistory": "Leer el historial de mensajes",
        "enable.permissions.viewChannel": "Ver canal",
        "enable.permissions.description":
            "El bot necesita un par de permisos para funcionar, como **Adjuntar archivos** para poder enviar los memes que genera, **Ver canal** para obtener contexto para los memes o **Insertar enlaces** para que el menú `/settings` funcione bien:\n",

        "enable.button.turnOff": "Desactivar",
        "enable.button.turnOn": "Activar",
        "enable.button.settings": "⚙️ Abrir configuración",

        "error.heading": "⚠️ Algo salió mal",
        "error.body": "Intenta de nuevo y si sigue pasando, reporta el error para que podamos revisarlo.",
        "error.id": "**ID de error:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Intentar de nuevo",
        "error.button.reportError": "💬 Reportar el error",

        "notEnoughContext.heading": "🤔 Todavía no hay suficiente contexto",
        "notEnoughContext.body":
            "Jstmemit necesita más tiempo para conocer tu canal antes de poder hacer un meme. Chateen un poco más y manden un par de GIFs. Si este error persiste, contacta a soporte.",
        "unknownTemplate.heading": "🤔 No conozco esa plantilla",
        "unknownTemplate.body":
            "Asegúrate de seleccionar una de las opciones de autocompletado al elegir una plantilla en `/custom`",
        "wrongFileFormat.heading": "🤔 Formato de imagen desconocido",
        "wrongFileFormat.body":
            'El archivo de "{{file}}" no es una imagen. Intenta de nuevo con un PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 No tienes permiso para eso",
        "missingPermissions.body":
            "Solo los miembros con el permiso **Gestionar servidor** o **Gestionar canales** pueden cambiar la configuración de Jstmemit. Pídele a un admin del servidor si necesitas cambiarlo.",
        "missingBotPermissions.heading": "🔒 Jstmemit no puede enviar memes aquí",
        "missingBotPermissions.body":
            "Al bot le faltan algunos permisos en este canal. Cualquiera que pueda gestionar este canal puede arreglarlo entrando en la configuración del canal y dándoselos al bot.\n\nHacen falta para generar memes automáticamente durante una conversación, pero pedir memes con `/meme` o `/custom` sigue siendo posible sin ellos.",
        "deleteData.confirm.heading": "🗑️ ¿Borrar todos los datos de este canal?",
        "deleteData.confirm.body":
            "Esto borra permanentemente todos los mensajes y enlaces de imágenes guardados de este canal en Jstmemit y no se puede deshacer. El bot sigue activado y empezará a aprender de nuevo con los mensajes nuevos. Si después quieres detenerlo por completo, desactívalo con `/enable`.",
        "deleteData.success.heading": "✅ ¡Datos borrados!",
        "deleteData.success.body":
            "Todos los mensajes y enlaces de imágenes guardados de este canal fueron borrados. El bot sigue activo y empezará a aprender de nuevo con los mensajes nuevos. Desactívalo con `/enable` si ya no quieres usarlo.",
        "deleteData.button.cancel": "Cancelar",
        "deleteData.button.delete": "Borrar todos los datos",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Ey, soy Jstmemit",
        "settings.about.body":
            "El bot que hace memes de su chat. Hablen de lo que quieran y...\nlo va a convertir en un meme con una de sus 300+ plantillas para burlarse de ustedes ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "¡Activa Jstmemit para empezar!",
        "settings.button.disable": "Desactivar",
        "settings.button.enable": "Activar",
        "settings.status.enabled": "**✅ ¡Jstmemit está activado en este canal!**",
        "settings.status.disabled": "**⚠️ ¡Para hacer memes en este canal hay que activar Jstmemit!**",
        "settings.meme.heading": "💬 Configuración de memes",
        "settings.meme.body": "Puedes controlar con qué frecuencia el bot enviará memes y qué aparece en ellos",
        "settings.quality.heading": "Calidad de imagen",
        "settings.quality.body": "¿Qué prefieres: memes con mejor calidad o memes al instante?",
        "settings.quality.image.label": "Mejor calidad (~1,2s por meme)",
        "settings.quality.image.description": "Imágenes sin comprimir, con suavizado",
        "settings.quality.speed.label": "Generación más rápida (~0,3s por meme)",
        "settings.quality.speed.description": "Las imágenes se comprimen y achican, el texto queda algo peor",
        "settings.frequency.heading": "Frecuencia",
        "settings.frequency.body":
            "¿Con qué frecuencia debe el bot enviar un meme al azar al chat sin que se lo pidan?",
        "settings.frequency.never.label": "Nunca",
        "settings.frequency.never.description": "No enviar memes, salvo que se pidan con el comando /meme",
        "settings.frequency.rarely.label": "Rara vez",
        "settings.frequency.rarely.description": "Uno cada ~100 mensajes",
        "settings.frequency.sometimes.label": "A veces",
        "settings.frequency.sometimes.description": "Uno cada ~50 mensajes (para servidores grandes)",
        "settings.frequency.often.label": "Seguido",
        "settings.frequency.often.description": "Uno cada ~20 mensajes (para servidores medianos)",
        "settings.frequency.quiteOften.label": "Bastante seguido",
        "settings.frequency.quiteOften.description": "Uno cada ~10 mensajes (para servidores chicos)",
        "settings.frequency.veryOften.label": "Muy seguido",
        "settings.frequency.veryOften.description": "Uno cada ~5 mensajes (puede generar spam)",
        "settings.avatars.heading": "Avatares en los memes",
        "settings.avatars.body": "¿Incluir fotos de perfil en los memes generados?",
        "settings.avatars.yes.label": "Sí",
        "settings.avatars.yes.description": "El bot usará avatares para los memes (recomendado)",
        "settings.avatars.no.label": "No",
        "settings.avatars.no.description": "El bot no usará avatares para los memes",
        "settings.milestones.heading": "Hitos",
        "settings.milestones.body":
            "Un resumen cuando el canal alcanza un hito de memes.\nAlgo parecido a un Spotify Wrapped, pero de memes.",
        "settings.milestones.yes.label": "Sí",
        "settings.milestones.yes.description": "El bot enviará un resumen cuando el canal alcance un hito",
        "settings.milestones.no.label": "No",
        "settings.milestones.no.description": "Desactivarlos para que el canal quede tranquilo",
        "settings.footer.body": "¿Quieres eliminar todos los datos de mensajes de este canal?",
        "settings.footer.deleteButton": "Borrar todos los datos",
        "feedback.submit.heading": "💬 ¡Sugerencia enviada!",
        "feedback.submit.body":
            "Muchas gracias por tu mensaje, nuestro equipo lo recibió y lo revisará. Si quieres platicarlo más a fondo, únete a nuestro [servidor de soporte](https://discord.gg/THRnn8fhkZ), así podremos enviarte una respuesta.",
        "feedback.submit.yourMessage": "Tu mensaje:",
        "modal.customMeme.title": "Generar mi meme",
        "modal.customMeme.text.label": "Texto #{{id}}",
        "modal.customMeme.text.placeholder": "Algo gracioso aquí",
        "modal.customMeme.image.label": "Imagen #{{id}}",
        "modal.feedback.title": "Enviar sugerencia",
        "modal.feedback.label": "Tu mensaje",
        "modal.feedback.description": "Reporta un error, sugiere una función o dinos qué opinas",
        "modal.feedback.placeholder": "Hola, ¿podrían agregar la plantilla de meme ...?",
        "modal.feedback.title.error": "Reportar el error",
        "modal.feedback.description.error": "Cuéntanos qué estabas haciendo cuando salió el error",
        "modal.feedback.placeholder.error": "Me salió un error después de ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Ey, soy Jstmemit",
        "help.about.commands.user":
            "### 👤 En cualquier parte de Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 En servidores con el bot: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Pero ¿cómo funciona exactamente?",
        "help.autoMemes.description":
            "Una vez cada varias decenas de mensajes elige una plantilla de meme, toma un par de imágenes/gifs/mensajes y mezcla todo en un meme.\n\nCada meme generado tiene botones de **:thumbsup: Me gusta**, **:repeat: Regenerar** y **:thumbsdown: No me gusta** que mejoran la calidad de los memes futuros ayudando al bot a entender qué fue gracioso.",
        "help.rightClick.heading": "## 🖱 Convierte cualquier cosa en un meme",
        "help.rightClick.description":
            "Con él también puedes convertir cualquier mensaje ya enviado (¡incluso de voz!) en una cita, una noticia urgente o un tweet de Grok. O poner la foto de perfil de alguien en una miniatura de YouTube «estilo MrBeast».\n\nAbre el menú Aplicaciones con clic derecho o dejando presionado en el celular, elige Jstmemit y selecciona el meme que quieras.",
        "help.voice.heading": "## 🔊  Crea mensajes de voz",
        "help.voice.description":
            "Usa `/voice` para narrar tu texto con una de las 23 voces disponibles. Perfecto para frases de soundboard o simplemente para leer mensajes graciosos.",
        "help.button.faq": "❓ Preguntas frecuentes",
        "help.button.features": "✨ Lista de funciones",
        "help.faq.heading": "## ❓ Preguntas frecuentes",
        "help.faq.description":
            "¿No encuentras respuesta a tu pregunta? Podemos ayudarte en el [servidor de soporte](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Ya agregué el bot, ¿y ahora qué?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Ejecuta /enable en un canal.** El bot va a empezar a aprender de los mensajes nuevos ahí. Después de chatear un rato, ejecuta /meme para generar un meme. Los memes también van a llegar solos cuando el canal esté activo y haya una conversación en marcha. Puedes cambiar su frecuencia en /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "¿Puedo tener configuraciones distintas para cada canal?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**¡Sí!** Toda la información del canal, como los datos para memes, la frecuencia y demás configuraciones, se guarda por separado para cada canal. Nada te impide tener una frecuencia muy baja en el chat principal y ponerla al máximo en el canal de spam.",
        "help.faq.isThereALimit.question": "¿Hay un límite de memes que el bot puede hacer al día?",
        "help.faq.isThereALimit.answer":
            "**No, no hay límites.** Puedes ejecutar `/meme` todas las veces que quieras al día. Y es gratis, porque cada generación tarda solo milisegundos. Además los memes no llevan marca de agua, así que se ven más limpios que los hechos con otros generadores de memes.",
        "help.faq.canIDeleteStoredData.question": "¿Puedo borrar los datos guardados para generar memes?",
        "help.faq.canIDeleteStoredData.answer":
            "**Sí, en cualquier momento.** Ejecuta `/settings` y presiona el botón «Borrar todos los datos» para eliminar todo lo que el bot guardó del canal.",
        "help.faq.addBotToMyApps.question": "¿Puedo agregar el bot a «Mis aplicaciones» y usarlo donde sea?",
        "help.faq.addBotToMyApps.answer":
            "**Sí, pero sin algunas funciones.** Vas a poder usar `/custom` y las acciones del clic derecho (como «Convertir en cita» o «Convertir en noticia urgente») en cualquier parte de Discord. Pero los memes basados en su chat no van a funcionar, por privacidad.",
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "¿Y si quiero hacer un meme con un texto y/o imagen específicos?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**¡Usa `/custom`!** Te permite usar la enorme biblioteca de plantillas de Jstmemit como un generador de memes normal con tus propios textos e imágenes. Y claro, estos memes tampoco tienen límites ni marcas de agua.",
        "help.button.addJstmemit": "🔗 Agregar Jstmemit",
        "help.button.website": "🌐 Sitio web",

        "milestones.heading": `¡Yuju! ¡{{count}} memes en **<#{{channelId}}>**!`,
        "milestones.description": `Abajo hay algunas estadísticas de cómo reaccionaron a ellos.`,
        "milestones.nextGoal": "Próximo objetivo: {{currentGoal}}/{{nextGoal}} memes",
        "milestones.turnOffInSettings":
            "-# Si no quieres recibir estos mensajes, puedes desactivarlos en **/settings**",

        "stats.likes": "Me gusta: {{count}}",
        "stats.dislikes": "No me gusta: {{count}}",
        "stats.templates": "Plantillas usadas: {{count}}",
        "stats.voices": "Voces usadas: {{count}}",
    },
    [Locale.PortugueseBR]: {
        "enable.heading.enabled": "🎉 O bot está pronto!",
        "enable.heading.disabled": "🔴 O Jstmemit está desligado neste canal",
        "enable.body.enabled":
            "O Jstmemit agora está ativo e vai gerar memes durante as conversas aqui. A qualidade melhora conforme ele conhece o seu canal, com resultados muito melhores quando tiver cerca de **~30 mensagens** na memória.",
        "enable.body.disabled.ready":
            "Você já tem mais de **{{messagesAmount}} mensagens** na memória, então o Jstmemit está pronto para fazer memes. É só ligar o bot de novo e ele começa a gerá-los durante as conversas ativas.",
        "enable.body.disabled.notReady":
            "O bot não pode fazer memes aqui até você ativá-lo para este canal. Ative-o e ele vai começar a gerar memes durante as conversas ativas.",
        "enable.memory.progress": "Mensagens na memória: **{{messagesAmount}}**",
        "enable.memory.full": "Mensagens na memória: **{{messagesAmount}}**",
        "enable.permissions.heading": "Estão faltando algumas permissões!",
        "enable.permissions.sendMessages": "Enviar mensagens",
        "enable.permissions.attachFiles": "Anexar arquivos",
        "enable.permissions.embedLinks": "Inserir links",
        "enable.permissions.readHistory": "Ver histórico de mensagens",
        "enable.permissions.viewChannel": "Ver canal",
        "enable.permissions.description":
            "O bot precisa de algumas permissões para funcionar, como **Anexar arquivos** para conseguir enviar os memes que ele gera, **Ver canal** para pegar contexto para os memes ou **Inserir links** para o menu `/settings` funcionar direito:\n",

        "enable.button.turnOff": "Desligar",
        "enable.button.turnOn": "Ligar",
        "enable.button.settings": "⚙️ Abrir configurações",

        "error.heading": "⚠️ Algo deu errado",
        "error.body": "Tente de novo e, se continuar acontecendo, reporte o erro para a gente dar uma olhada.",
        "error.id": "**ID do erro:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Tentar de novo",
        "error.button.reportError": "💬 Reportar erro",

        "notEnoughContext.heading": "🤔 Ainda não há contexto suficiente",
        "notEnoughContext.body":
            "O Jstmemit precisa de mais tempo para conhecer o seu canal antes de poder fazer um meme. Conversem um pouco mais e mandem alguns GIFs. Se esse erro persistir, entre em contato com o suporte.",
        "unknownTemplate.heading": "🤔 Não conheço esse template",
        "unknownTemplate.body":
            "Não esqueça de selecionar uma das opções do autocompletar ao escolher um template no `/custom`",
        "wrongFileFormat.heading": "🤔 Formato de imagem desconhecido",
        "wrongFileFormat.body": 'O arquivo de "{{file}}" não é uma imagem. Tente de novo com um PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 Você não tem permissão para isso",
        "missingPermissions.body":
            "Só membros com a permissão **Gerenciar servidor** ou **Gerenciar canais** podem mudar as configurações do Jstmemit. Peça a um admin do servidor se precisar mudar isso.",
        "missingBotPermissions.heading": "🔒 O Jstmemit não pode enviar memes aqui",
        "missingBotPermissions.body":
            "O bot está sem algumas permissões neste canal. Qualquer pessoa que possa gerenciar este canal consegue resolver isso indo nas configurações do canal e dando as permissões ao bot.\n\nElas são necessárias para gerar memes automaticamente durante uma conversa, mas pedir memes com `/meme` ou `/custom` funciona mesmo sem elas.",
        "deleteData.confirm.heading": "🗑️ Apagar todos os dados deste canal?",
        "deleteData.confirm.body":
            "Isso apaga permanentemente todas as mensagens e links de imagens salvos deste canal no Jstmemit e não pode ser desfeito. O bot continua ativado e vai começar a aprender de novo com as mensagens novas. Se depois quiser pará-lo de vez, desligue-o com `/enable`.",
        "deleteData.success.heading": "✅ Dados apagados!",
        "deleteData.success.body":
            "Todas as mensagens e links de imagens salvos deste canal foram apagados. O bot ainda está ligado e vai começar a aprender de novo com as mensagens novas. Desligue-o com `/enable` se não quiser mais usá-lo.",
        "deleteData.button.cancel": "Cancelar",
        "deleteData.button.delete": "Apagar todos os dados",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Ei, eu sou o Jstmemit",
        "settings.about.body":
            "O bot que faz memes do seu chat. Falem do que quiserem e...\nele transforma isso em meme com um dos 300+ templates pra tirar sarro de vocês ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Ative o Jstmemit para começar!",
        "settings.button.disable": "Desativar",
        "settings.button.enable": "Ativar",
        "settings.status.enabled": "**✅ O Jstmemit está ligado neste canal!**",
        "settings.status.disabled": "**⚠️ Para fazer memes neste canal é preciso ativar o Jstmemit!**",
        "settings.meme.heading": "💬 Configurações de memes",
        "settings.meme.body": "Você pode controlar com que frequência o bot vai mandar memes e o que aparece neles",
        "settings.quality.heading": "Qualidade da imagem",
        "settings.quality.body": "O que você prefere: memes com mais qualidade ou memes na hora?",
        "settings.quality.image.label": "Mais qualidade (~1,2s por meme)",
        "settings.quality.image.description": "Imagens sem compressão, com suavização de bordas",
        "settings.quality.speed.label": "Geração mais rápida (~0,3s por meme)",
        "settings.quality.speed.description": "As imagens são comprimidas e reduzidas, o texto fica um pouco pior",
        "settings.frequency.heading": "Frequência",
        "settings.frequency.body": "Com que frequência o bot deve mandar um meme aleatório no chat sem ser pedido?",
        "settings.frequency.never.label": "Nunca",
        "settings.frequency.never.description": "Não mandar memes, a não ser pelo comando /meme",
        "settings.frequency.rarely.label": "Raramente",
        "settings.frequency.rarely.description": "Um a cada ~100 mensagens",
        "settings.frequency.sometimes.label": "Às vezes",
        "settings.frequency.sometimes.description": "Um a cada ~50 mensagens (para servidores maiores)",
        "settings.frequency.often.label": "Frequentemente",
        "settings.frequency.often.description": "Um a cada ~20 mensagens (para servidores médios)",
        "settings.frequency.quiteOften.label": "Bem frequentemente",
        "settings.frequency.quiteOften.description": "Um a cada ~10 mensagens (para servidores menores)",
        "settings.frequency.veryOften.label": "Muito frequentemente",
        "settings.frequency.veryOften.description": "Um a cada ~5 mensagens (pode virar spam)",
        "settings.avatars.heading": "Avatares nos memes",
        "settings.avatars.body": "Incluir fotos de perfil nos memes gerados?",
        "settings.avatars.yes.label": "Sim",
        "settings.avatars.yes.description": "O bot vai usar avatares nos memes (recomendado)",
        "settings.avatars.no.label": "Não",
        "settings.avatars.no.description": "O bot não vai usar avatares nos memes",
        "settings.milestones.heading": "Marcos",
        "settings.milestones.body":
            "Um resumo quando o canal atinge um marco de memes.\nAlgo tipo um Spotify Wrapped, mas de memes.",
        "settings.milestones.yes.label": "Sim",
        "settings.milestones.yes.description": "O bot vai mandar um resumo quando o canal atingir um marco",
        "settings.milestones.no.label": "Não",
        "settings.milestones.no.description": "Desligar para manter o canal quieto",
        "settings.footer.body": "Quer remover todos os dados de mensagens deste canal?",
        "settings.footer.deleteButton": "Apagar todos os dados",
        "feedback.submit.heading": "💬 Feedback enviado!",
        "feedback.submit.body":
            "Muito obrigado pela sua mensagem, nossa equipe recebeu e vai analisar. Se quiser conversar mais sobre isso, entre no nosso [servidor de suporte](https://discord.gg/THRnn8fhkZ), assim podemos te mandar uma resposta.",
        "feedback.submit.yourMessage": "Sua mensagem:",
        "modal.customMeme.title": "Gerar meu meme",
        "modal.customMeme.text.label": "Texto #{{id}}",
        "modal.customMeme.text.placeholder": "Algo engraçado aqui",
        "modal.customMeme.image.label": "Imagem #{{id}}",
        "modal.feedback.title": "Enviar feedback",
        "modal.feedback.label": "Sua mensagem",
        "modal.feedback.description": "Reporte um bug, sugira uma função ou diga o que você acha",
        "modal.feedback.placeholder": "Oi, vocês poderiam adicionar o template de meme ...?",
        "modal.feedback.title.error": "Reportar erro",
        "modal.feedback.description.error": "Conte o que você estava fazendo quando o erro apareceu",
        "modal.feedback.placeholder.error": "Deu erro depois que eu ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Ei, eu sou o Jstmemit",
        "help.about.commands.user":
            "### 👤 Em qualquer lugar do Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 Em servidores com o bot: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Mas como isso funciona exatamente?",
        "help.autoMemes.description":
            "Uma vez a cada algumas dezenas de mensagens ele escolhe um template de meme, pega algumas imagens/gifs/mensagens e mistura tudo em um meme.\n\nCada meme gerado tem botões de **:thumbsup: Curtir**, **:repeat: Gerar de novo** e **:thumbsdown: Não curtir** que melhoram a qualidade dos próximos memes ajudando o bot a entender o que foi engraçado.",
        "help.rightClick.heading": "## 🖱 Transforme qualquer coisa em meme",
        "help.rightClick.description":
            'Com ele você também pode transformar qualquer mensagem já enviada (até de voz!) em uma citação, uma notícia urgente ou um tweet do Grok. Ou colocar a foto de perfil de alguém numa thumb do YouTube "estilo MrBeast".\n\nAbra o menu Aplicativos com o clique direito ou segurando a mensagem no celular, escolha o Jstmemit e selecione o meme que você quer.',
        "help.voice.heading": "## 🔊  Faça mensagens de voz",
        "help.voice.description":
            "Use `/voice` para narrar seu texto com uma das 23 vozes diferentes. Perfeito para frases de soundboard ou só para narrar mensagens engraçadas.",
        "help.button.faq": "❓ Perguntas frequentes",
        "help.button.features": "✨ Lista de recursos",
        "help.faq.heading": "## ❓ Perguntas frequentes",
        "help.faq.description":
            "Não achou a resposta para a sua pergunta? A gente pode te ajudar no [servidor de suporte](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Adicionei o bot, e agora?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Rode /enable em um canal.** O bot vai começar a aprender com as mensagens novas por lá. Depois de conversar um pouco, rode /meme para gerar um meme. Os memes também vão chegar sozinhos quando o canal estiver ativo e tiver uma conversa rolando. Você pode mudar a frequência deles em /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "Posso ter configurações diferentes para cada canal?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Sim!** Todas as informações do canal, como dados para memes, frequência e outras configurações, ficam guardadas separadamente para cada canal. Nada impede de ter uma frequência bem baixa no chat principal e deixar no máximo no canal de spam.",
        "help.faq.isThereALimit.question": "Tem limite de quantos memes o bot pode fazer por dia?",
        "help.faq.isThereALimit.answer":
            "**Não, não tem limite nenhum.** Você pode rodar `/meme` quantas vezes quiser por dia. E é de graça, porque cada geração leva só alguns milissegundos. Os memes também não têm marca d'água, então ficam mais limpos do que os feitos em outros geradores de memes.",
        "help.faq.canIDeleteStoredData.question": "Posso apagar os dados guardados para a geração de memes?",
        "help.faq.canIDeleteStoredData.answer":
            '**Sim, a qualquer momento.** Rode `/settings` e aperte o botão "Apagar todos os dados" para excluir tudo que o bot guardou do canal.',
        "help.faq.addBotToMyApps.question": 'Posso adicionar o bot em "Meus aplicativos" e usar em qualquer lugar?',
        "help.faq.addBotToMyApps.answer":
            '**Sim, mas sem alguns recursos.** Você vai poder usar o `/custom` e as ações do clique direito (como "Transformar em citação" ou "Transformar em notícia urgente") em qualquer lugar do Discord. Mas os memes baseados no seu chat não vão funcionar, por questões de privacidade.',
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "E se eu quiser fazer um meme com um texto e/ou imagem específicos?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Use o `/custom`!** Ele deixa você usar a biblioteca gigante de templates do Jstmemit como um gerador de memes comum, com seus próprios textos e imagens. E claro, esses memes também não têm limites nem marca d'água.",
        "help.button.addJstmemit": "🔗 Adicionar o Jstmemit",
        "help.button.website": "🌐 Site",

        "milestones.heading": `Eba! {{count}} memes em **<#{{channelId}}>**!`,
        "milestones.description": `Abaixo estão algumas estatísticas de como vocês reagiram a eles.`,
        "milestones.nextGoal": "Próxima meta: {{currentGoal}}/{{nextGoal}} memes",
        "milestones.turnOffInSettings":
            "-# Se você não quiser receber essas mensagens, dá para desativá-las em **/settings**",

        "stats.likes": "Curtidas: {{count}}",
        "stats.dislikes": "Descurtidas: {{count}}",
        "stats.templates": "Templates usados: {{count}}",
        "stats.voices": "Vozes usadas: {{count}}",
    },
    [Locale.Turkish]: {
        "enable.heading.enabled": "🎉 Bot hazır!",
        "enable.heading.disabled": "🔴 Jstmemit bu kanalda kapalı",
        "enable.body.enabled":
            "Jstmemit artık aktif ve buradaki sohbetler sırasında caps üretecek. Bot kanalını tanıdıkça kalite artar, hafızasında yaklaşık **~30 mesaj** olduğunda çok daha iyi sonuçlar alırsın.",
        "enable.body.disabled.ready":
            "Hafızada zaten **{{messagesAmount}} mesajdan** fazlası var, yani Jstmemit caps yapmaya hazır. Botu tekrar aç, aktif sohbetler sırasında üretmeye başlasın.",
        "enable.body.disabled.notReady":
            "Bu kanal için botu etkinleştirmeden burada caps yapamaz. Aç, aktif sohbetler sırasında caps üretmeye başlasın.",
        "enable.memory.progress": "Hafızadaki mesajlar: **{{messagesAmount}}**",
        "enable.memory.full": "Hafızadaki mesajlar: **{{messagesAmount}}**",
        "enable.permissions.heading": "Bazı izinler eksik!",
        "enable.permissions.sendMessages": "Mesaj Gönder",
        "enable.permissions.attachFiles": "Dosya Ekle",
        "enable.permissions.embedLinks": "Bağlantı Yerleştir",
        "enable.permissions.readHistory": "Mesaj Geçmişini Oku",
        "enable.permissions.viewChannel": "Kanalı Görüntüle",
        "enable.permissions.description":
            "Botun çalışması için birkaç izne ihtiyacı var, örneğin ürettiği capsleri gönderebilmek için **Dosya Ekle**, capsler için bağlam alabilmek için **Kanalı Görüntüle** ya da `/settings` menüsünün düzgün çalışması için **Bağlantı Yerleştir**:\n",

        "enable.button.turnOff": "Kapat",
        "enable.button.turnOn": "Aç",
        "enable.button.settings": "⚙️ Ayarları aç",

        "error.heading": "⚠️ Bir şeyler ters gitti",
        "error.body": "Tekrar dene, sorun devam ederse hatayı bildir ki inceleyebilelim.",
        "error.id": "**Hata ID'si:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Tekrar dene",
        "error.button.reportError": "💬 Hatayı bildir",

        "notEnoughContext.heading": "🤔 Henüz yeterli bağlam yok",
        "notEnoughContext.body":
            "Jstmemit'in caps yapabilmesi için kanalını tanımaya biraz daha zamanı olması gerekiyor. Biraz daha sohbet edin ve birkaç GIF gönderin. Bu hata devam ederse destek ekibine ulaş.",
        "unknownTemplate.heading": "🤔 Böyle bir şablon bilmiyorum",
        "unknownTemplate.body":
            "`/custom` içinde şablon seçerken otomatik tamamlama seçeneklerinden birini seçtiğinden emin ol",
        "wrongFileFormat.heading": "🤔 Bilinmeyen görsel formatı",
        "wrongFileFormat.body":
            '"{{file}}" için gönderilen dosya bir görsel değil. PNG/JPEG/AVIF/WebP ile tekrar dene.',
        "missingPermissions.heading": "🔒 Bunun için iznin yok",
        "missingPermissions.body":
            "Jstmemit'in ayarlarını yalnızca **Sunucuyu Yönet** veya **Kanalları Yönet** iznine sahip üyeler değiştirebilir. Bunun değişmesi gerekiyorsa bir sunucu yöneticisine sor.",
        "missingBotPermissions.heading": "🔒 Jstmemit burada caps gönderemez",
        "missingBotPermissions.body":
            "Botun bu kanalda bazı izinleri yok. Bu kanalı yönetebilen biri, kanal ayarlarına girip bu izinleri bota vererek bunu düzeltebilir.\n\nSohbet sırasında capslerin otomatik üretilmesi için gerekli, ama `/meme` veya `/custom` ile caps istemek bu izinler olmadan da mümkün.",
        "deleteData.confirm.heading": "🗑️ Bu kanalın tüm verileri silinsin mi?",
        "deleteData.confirm.body":
            "Bu, bu kanala ait tüm kayıtlı mesajları ve görsel bağlantılarını Jstmemit'ten kalıcı olarak siler ve geri alınamaz. Bot açık kalır ve yeni mesajlardan yeniden öğrenmeye başlar. Sonrasında tamamen durdurmak istersen `/enable` ile kapat.",
        "deleteData.success.heading": "✅ Veriler silindi!",
        "deleteData.success.body":
            "Bu kanala ait tüm kayıtlı mesajlar ve görsel bağlantıları silindi. Bot hâlâ açık ve yeni mesajlardan yeniden öğrenmeye başlayacak. Artık kullanmak istemiyorsan `/enable` ile kapat.",
        "deleteData.button.cancel": "İptal",
        "deleteData.button.delete": "Tüm verileri sil",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Selam, ben Jstmemit",
        "settings.about.body":
            "Sohbetinizden caps üreten bot. Ne konuşursanız konuşun...\nonu 300'den fazla şablondan biriyle capse çevirip sizinle dalga geçer ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Başlamak için Jstmemit'i etkinleştir!",
        "settings.button.disable": "Kapat",
        "settings.button.enable": "Etkinleştir",
        "settings.status.enabled": "**✅ Jstmemit bu kanalda açık!**",
        "settings.status.disabled": "**⚠️ Bu kanalda caps yapmak için Jstmemit'in etkinleştirilmesi gerek!**",
        "settings.meme.heading": "💬 Caps ayarları",
        "settings.meme.body": "Botun ne sıklıkla caps göndereceğini ve üzerinde ne olacağını ayarlayabilirsin",
        "settings.quality.heading": "Görsel kalitesi",
        "settings.quality.body": "Hangisi senin için daha önemli: daha kaliteli capsler mi, anında gelen capsler mi?",
        "settings.quality.image.label": "Daha iyi kalite (caps başına ~1,2sn)",
        "settings.quality.image.description": "Görseller sıkıştırılmaz, kenar yumuşatma açık",
        "settings.quality.speed.label": "Daha hızlı üretim (caps başına ~0,3sn)",
        "settings.quality.speed.description": "Görseller sıkıştırılıp küçültülür, metin biraz daha kötü olur",
        "settings.frequency.heading": "Sıklık",
        "settings.frequency.body": "Bot, istenmeden sohbete ne sıklıkla rastgele bir caps göndersin?",
        "settings.frequency.never.label": "Asla",
        "settings.frequency.never.description": "/meme komutuyla istenmedikçe caps gönderme",
        "settings.frequency.rarely.label": "Nadiren",
        "settings.frequency.rarely.description": "Her ~100 mesajda bir",
        "settings.frequency.sometimes.label": "Bazen",
        "settings.frequency.sometimes.description": "Her ~50 mesajda bir (büyük sunucular için)",
        "settings.frequency.often.label": "Sık sık",
        "settings.frequency.often.description": "Her ~20 mesajda bir (orta boy sunucular için)",
        "settings.frequency.quiteOften.label": "Oldukça sık",
        "settings.frequency.quiteOften.description": "Her ~10 mesajda bir (küçük sunucular için)",
        "settings.frequency.veryOften.label": "Çok sık",
        "settings.frequency.veryOften.description": "Her ~5 mesajda bir (spam olabilir)",
        "settings.avatars.heading": "Capslerde avatarlar",
        "settings.avatars.body": "Üretilen capslerde profil fotoğrafları kullanılsın mı?",
        "settings.avatars.yes.label": "Evet",
        "settings.avatars.yes.description": "Bot capsler için avatarları kullanır (önerilir)",
        "settings.avatars.no.label": "Hayır",
        "settings.avatars.no.description": "Bot capsler için avatarları kullanmaz",
        "settings.milestones.heading": "Dönüm noktaları",
        "settings.milestones.body":
            "Kanal belli bir caps sayısına ulaştığında bir özet.\nSpotify Wrapped gibi bir şey, ama capsler hakkında.",
        "settings.milestones.yes.label": "Evet",
        "settings.milestones.yes.description": "Kanal yeni bir eşiğe ulaştığında bot özet gönderir",
        "settings.milestones.no.label": "Hayır",
        "settings.milestones.no.description": "Kanalı sessiz tutmak için kapat",
        "settings.footer.body": "Bu kanalla ilgili tüm mesaj verilerini kaldırmak ister misin?",
        "settings.footer.deleteButton": "Tüm verileri sil",
        "feedback.submit.heading": "💬 Geri bildirim gönderildi!",
        "feedback.submit.body":
            "Mesajın için çok teşekkürler, ekibimiz aldı ve inceleyecek. Daha fazla konuşmak istersen [Destek sunucumuza](https://discord.gg/THRnn8fhkZ) katıl, böylece sana yanıt gönderebiliriz.",
        "feedback.submit.yourMessage": "Mesajın:",
        "modal.customMeme.title": "Kendi capsini yap",
        "modal.customMeme.text.label": "Metin #{{id}}",
        "modal.customMeme.text.placeholder": "Buraya komik bir şey",
        "modal.customMeme.image.label": "Görsel #{{id}}",
        "modal.feedback.title": "Geri bildirim gönder",
        "modal.feedback.label": "Mesajın",
        "modal.feedback.description": "Hata bildir, özellik öner veya ne düşündüğünü söyle",
        "modal.feedback.placeholder": "Merhaba, ... caps şablonunu ekler misiniz?",
        "modal.feedback.title.error": "Hatayı bildir",
        "modal.feedback.description.error": "Hata çıktığında ne yaptığını yaz",
        "modal.feedback.placeholder.error": "... yaptıktan sonra hata aldım",

        "help.about.heading": "<:jstmemit:1533562196980797462> Selam, ben Jstmemit",
        "help.about.commands.user":
            "### 👤 Discord'un her yerinde: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 Botun olduğu sunucularda: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Peki bu tam olarak nasıl çalışıyor?",
        "help.autoMemes.description":
            "Birkaç düzine mesajda bir caps şablonu seçer, birkaç görsel/gif/mesaj alır ve hepsini karıştırıp bir caps yapar.\n\nÜretilen her capste **:thumbsup: Beğen**, **:repeat: Yeniden** ve **:thumbsdown: Beğenme** butonları var. Bunlar botun neyin komik olduğunu anlamasına yardım ederek gelecekteki capslerin kalitesini artırıyor.",
        "help.rightClick.heading": "## 🖱 Her şeyi capse çevir",
        "help.rightClick.description":
            "Onunla mevcut herhangi bir mesajı (sesli mesajı bile!) alıntıya, son dakika haberine ya da Grok tweetine çevirebilirsin. Ya da birinin profil fotoğrafını \"MrBeast tarzı\" bir YouTube thumbnail'ine koyabilirsin.\n\nSağ tıklayarak ya da telefonda uzun basarak Uygulamalar menüsünü aç, Jstmemit'i seç ve istediğin capsi seç.",
        "help.voice.heading": "## 🔊  Sesli mesaj oluştur",
        "help.voice.description":
            "Metnini 23 farklı sesten biriyle okutmak için `/voice` kullan. Soundboard cümleleri ya da komik mesajları seslendirmek için birebir.",
        "help.button.faq": "❓ Sık sorulan sorular",
        "help.button.features": "✨ Özellik listesi",
        "help.faq.heading": "## ❓ Sık sorulan sorular",
        "help.faq.description":
            "Sorunun cevabını bulamadın mı? [Destek sunucusunda](https://discord.gg/THRnn8fhkZ) yardımcı olabiliriz",
        "help.faq.iAddedTheBotWhatNow.question": "Botu ekledim, şimdi ne yapmalıyım?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Bir kanalda /enable çalıştır.** Bot orada yeni mesajlardan öğrenmeye başlar. Biraz sohbet ettikten sonra caps üretmek için /meme çalıştır. Kanal aktifken ve bir sohbet dönüyorken capsler kendiliğinden de gelir. Bunların sıklığını /settings üzerinden değiştirebilirsin.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question": "Her kanal için farklı ayarlar yapabilir miyim?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Evet!** Caps verileri, sıklık ve diğer ayarlar gibi tüm kanal bilgileri her kanal için ayrı ayrı saklanır. Ana sohbette caps sıklığını çok düşük tutup flood kanalında sonuna kadar açmana hiçbir engel yok.",
        "help.faq.isThereALimit.question": "Botun günlük yapabileceği caps sayısında bir sınır var mı?",
        "help.faq.isThereALimit.answer":
            "**Hayır, hiçbir sınır yok.** `/meme` komutunu günde istediğin kadar çalıştırabilirsin. Üstelik ücretsiz, çünkü her üretim sadece milisaniyeler sürüyor. Capslerde filigran da yok, o yüzden diğer caps üreticilerinde yapılanlardan daha temiz görünüyorlar.",
        "help.faq.canIDeleteStoredData.question": "Caps üretimi için saklanan verileri silebilir miyim?",
        "help.faq.canIDeleteStoredData.answer":
            '**Evet, istediğin zaman.** `/settings` çalıştır ve botun kanal için sakladığı her şeyi silmek için "Tüm verileri sil" butonuna bas.',
        "help.faq.addBotToMyApps.question": 'Botu "Uygulamalarım"a ekleyip her yerde kullanabilir miyim?',
        "help.faq.addBotToMyApps.answer":
            '**Evet, ama bazı özellikler olmadan.** `/custom` komutunu ve sağ tık işlemlerini ("Alıntıya çevir" veya "Son dakika haberine çevir" gibi) Discord\'un her yerinde kullanabilirsin. Ama sohbetinize dayalı capsler gizlilik nedeniyle çalışmaz.',
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "Peki belirli bir metin ve/veya görselle kendi capsimi yapmak istersem?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**`/custom` kullan!** Jstmemit'in devasa şablon kütüphanesini kendi metinlerin ve görsellerinle sıradan bir caps üreticisi gibi kullanmanı sağlar. Ve tabii ki bu şekilde üretilen capslerde de ne sınır ne de filigran var.",
        "help.button.addJstmemit": "🔗 Jstmemit'i ekle",
        "help.button.website": "🌐 Web sitesi",

        "milestones.heading": `Yaşasın! **<#{{channelId}}>** kanalında {{count}} caps!`,
        "milestones.description": `Aşağıda onlara nasıl tepki verdiğinize dair birkaç istatistik var.`,
        "milestones.nextGoal": "Sonraki hedef: {{currentGoal}}/{{nextGoal}} caps",
        "milestones.turnOffInSettings": "-# Bu mesajları almak istemiyorsan **/settings** üzerinden kapatabilirsin",

        "stats.likes": "Beğeni: {{count}}",
        "stats.dislikes": "Beğenmeme: {{count}}",
        "stats.templates": "Kullanılan şablonlar: {{count}}",
        "stats.voices": "Kullanılan sesler: {{count}}",
    },
    [Locale.Italian]: {
        "enable.heading.enabled": "🎉 Il bot è pronto!",
        "enable.heading.disabled": "🔴 Jstmemit è spento in questo canale",
        "enable.body.enabled":
            "Jstmemit ora è attivo e genererà meme durante le chat qui. La qualità migliora man mano che conosce il tuo canale, con risultati molto migliori quando avrà circa **~30 messaggi** in memoria.",
        "enable.body.disabled.ready":
            "Hai già più di **{{messagesAmount}} messaggi** in memoria, quindi Jstmemit è pronto a fare meme. Riaccendi il bot e inizierà a generarli durante le chat attive.",
        "enable.body.disabled.notReady":
            "Il bot non può fare meme qui finché non lo attivi per questo canale. Attivalo e inizierà a generare meme durante le chat attive.",
        "enable.memory.progress": "Messaggi in memoria: **{{messagesAmount}}**",
        "enable.memory.full": "Messaggi in memoria: **{{messagesAmount}}**",
        "enable.permissions.heading": "Mancano alcuni permessi!",
        "enable.permissions.sendMessages": "Invia messaggi",
        "enable.permissions.attachFiles": "Allega file",
        "enable.permissions.embedLinks": "Incorpora link",
        "enable.permissions.readHistory": "Leggi cronologia messaggi",
        "enable.permissions.viewChannel": "Visualizza canale",
        "enable.permissions.description":
            "Al bot servono un paio di permessi per funzionare, come **Allega file** per poter inviare i meme che genera, **Visualizza canale** per avere contesto per i meme o **Incorpora link** perché il menu `/settings` funzioni bene:\n",

        "enable.button.turnOff": "Spegni",
        "enable.button.turnOn": "Accendi",
        "enable.button.settings": "⚙️ Apri impostazioni",

        "error.heading": "⚠️ Qualcosa è andato storto",
        "error.body": "Riprova e, se continua a succedere, segnala l'errore così possiamo dare un'occhiata.",
        "error.id": "**ID errore:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Riprova",
        "error.button.reportError": "💬 Segnala l'errore",

        "notEnoughContext.heading": "🤔 Non c'è ancora abbastanza contesto",
        "notEnoughContext.body":
            "Jstmemit ha bisogno di più tempo per conoscere il tuo canale prima di poter fare un meme. Chattate ancora un po' e mandate qualche GIF. Se l'errore persiste, contatta il supporto.",
        "unknownTemplate.heading": "🤔 Non conosco questo template",
        "unknownTemplate.body":
            "Assicurati di selezionare una delle opzioni di completamento automatico quando scegli un template in `/custom`",
        "wrongFileFormat.heading": "🤔 Formato immagine sconosciuto",
        "wrongFileFormat.body": 'Il file per "{{file}}" non è un\'immagine. Riprova con un PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 Non hai il permesso per farlo",
        "missingPermissions.body":
            "Solo i membri con il permesso **Gestire il server** o **Gestire i canali** possono cambiare le impostazioni di Jstmemit. Chiedi a un admin del server se hai bisogno di cambiarlo.",
        "missingBotPermissions.heading": "🔒 Jstmemit non può inviare meme qui",
        "missingBotPermissions.body":
            "Al bot mancano alcuni permessi in questo canale. Chiunque possa gestire questo canale può risolvere andando nelle impostazioni del canale e dandoglieli.\n\nServono per generare i meme automaticamente durante una conversazione, ma chiedere meme con `/meme` o `/custom` è possibile anche senza.",
        "deleteData.confirm.heading": "🗑️ Eliminare tutti i dati di questo canale?",
        "deleteData.confirm.body":
            "Questo elimina definitivamente tutti i messaggi e i link alle immagini salvati per questo canale da Jstmemit e non può essere annullato. Il bot resta attivo e ricomincerà a imparare dai nuovi messaggi. Se poi vuoi fermarlo del tutto, spegnilo con `/enable`.",
        "deleteData.success.heading": "✅ Dati eliminati!",
        "deleteData.success.body":
            "Tutti i messaggi e i link alle immagini salvati per questo canale sono stati eliminati. Il bot è ancora acceso e ricomincerà a imparare dai nuovi messaggi. Spegnilo con `/enable` se non vuoi più usarlo.",
        "deleteData.button.cancel": "Annulla",
        "deleteData.button.delete": "Elimina tutti i dati",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Ehi, sono Jstmemit",
        "settings.about.body":
            "Il bot che fa meme dalla vostra chat. Parlate di quello che vi pare e...\nlo trasforma in un meme con uno dei suoi 300+ template per prendervi in giro ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Attiva Jstmemit per iniziare!",
        "settings.button.disable": "Disattiva",
        "settings.button.enable": "Attiva",
        "settings.status.enabled": "**✅ Jstmemit è acceso in questo canale!**",
        "settings.status.disabled": "**⚠️ Per fare meme in questo canale bisogna attivare Jstmemit!**",
        "settings.meme.heading": "💬 Impostazioni meme",
        "settings.meme.body": "Puoi controllare quanto spesso il bot manderà meme e cosa ci sarà sopra",
        "settings.quality.heading": "Qualità dell'immagine",
        "settings.quality.body": "Cosa preferisci: meme di qualità migliore o meme istantanei?",
        "settings.quality.image.label": "Qualità migliore (~1,2s per meme)",
        "settings.quality.image.description": "Immagini senza compressione, con antialiasing",
        "settings.quality.speed.label": "Generazione più veloce (~0,3s per meme)",
        "settings.quality.speed.description": "Le immagini vengono compresse e ridotte, il testo è un po' peggiore",
        "settings.frequency.heading": "Frequenza",
        "settings.frequency.body":
            "Quanto spesso il bot dovrebbe mandare un meme casuale in chat senza che gli venga chiesto?",
        "settings.frequency.never.label": "Mai",
        "settings.frequency.never.description": "Non mandare meme, se non richiesti tramite il comando /meme",
        "settings.frequency.rarely.label": "Raramente",
        "settings.frequency.rarely.description": "Uno ogni ~100 messaggi",
        "settings.frequency.sometimes.label": "A volte",
        "settings.frequency.sometimes.description": "Uno ogni ~50 messaggi (per server più grandi)",
        "settings.frequency.often.label": "Spesso",
        "settings.frequency.often.description": "Uno ogni ~20 messaggi (per server medi)",
        "settings.frequency.quiteOften.label": "Abbastanza spesso",
        "settings.frequency.quiteOften.description": "Uno ogni ~10 messaggi (per server più piccoli)",
        "settings.frequency.veryOften.label": "Molto spesso",
        "settings.frequency.veryOften.description": "Uno ogni ~5 messaggi (può produrre spam)",
        "settings.avatars.heading": "Avatar nei meme",
        "settings.avatars.body": "Includere le foto profilo nei meme generati?",
        "settings.avatars.yes.label": "Sì",
        "settings.avatars.yes.description": "Il bot userà gli avatar per i meme (consigliato)",
        "settings.avatars.no.label": "No",
        "settings.avatars.no.description": "Il bot non userà gli avatar per i meme",
        "settings.milestones.heading": "Traguardi",
        "settings.milestones.body":
            "Un riepilogo quando il canale raggiunge un traguardo di meme.\nUna specie di Spotify Wrapped, ma sui meme.",
        "settings.milestones.yes.label": "Sì",
        "settings.milestones.yes.description": "Il bot manderà un riepilogo quando il canale raggiunge un traguardo",
        "settings.milestones.no.label": "No",
        "settings.milestones.no.description": "Disattivarli per tenere il canale tranquillo",
        "settings.footer.body": "Vuoi rimuovere tutti i dati dei messaggi di questo canale?",
        "settings.footer.deleteButton": "Elimina tutti i dati",
        "feedback.submit.heading": "💬 Feedback inviato!",
        "feedback.submit.body":
            "Grazie mille per il tuo messaggio, il nostro team l'ha ricevuto e lo esaminerà. Se vuoi parlarne meglio, unisciti al nostro [server di supporto](https://discord.gg/THRnn8fhkZ), così potremo risponderti.",
        "feedback.submit.yourMessage": "Il tuo messaggio:",
        "modal.customMeme.title": "Genera il mio meme",
        "modal.customMeme.text.label": "Testo #{{id}}",
        "modal.customMeme.text.placeholder": "Qualcosa di divertente qui",
        "modal.customMeme.image.label": "Immagine #{{id}}",
        "modal.feedback.title": "Invia feedback",
        "modal.feedback.label": "Il tuo messaggio",
        "modal.feedback.description": "Segnala un bug, suggerisci una funzione o dicci cosa ne pensi",
        "modal.feedback.placeholder": "Ciao, potreste aggiungere il template di meme ...?",
        "modal.feedback.title.error": "Segnala l'errore",
        "modal.feedback.description.error": "Descrivi cosa stavi facendo quando è comparso l'errore",
        "modal.feedback.placeholder.error": "Ho ricevuto un errore dopo ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Ehi, sono Jstmemit",
        "help.about.commands.user":
            "### 👤 Ovunque su Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 Nei server con il bot: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Ma come funziona di preciso?",
        "help.autoMemes.description":
            "Una volta ogni qualche decina di messaggi sceglie un template, prende qualche immagine/gif/messaggio e mescola tutto in un meme.\n\nOgni meme generato ha i pulsanti **:thumbsup: Mi piace**, **:repeat: Rigenera** e **:thumbsdown: Non mi piace** che migliorano la qualità dei meme futuri aiutando il bot a capire cosa faceva ridere.",
        "help.rightClick.heading": "## 🖱 Trasforma qualsiasi cosa in un meme",
        "help.rightClick.description":
            'Con lui puoi anche trasformare qualsiasi messaggio già inviato (anche vocale!) in una citazione, una notizia flash o un tweet di Grok. Oppure mettere la foto profilo di qualcuno in una miniatura YouTube "stile MrBeast".\n\nApri il menu App con il tasto destro o con un tocco prolungato su mobile, scegli Jstmemit e seleziona il meme che vuoi.',
        "help.voice.heading": "## 🔊  Crea messaggi vocali",
        "help.voice.description":
            "Usa `/voice` per far leggere il tuo testo da una delle 23 voci disponibili. Perfetto per frasi da soundboard o semplicemente per leggere messaggi divertenti.",
        "help.button.faq": "❓ Domande frequenti",
        "help.button.features": "✨ Elenco delle funzioni",
        "help.faq.heading": "## ❓ Domande frequenti",
        "help.faq.description":
            "Non trovi la risposta alla tua domanda? Possiamo aiutarti sul [server di supporto](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Ho aggiunto il bot, e adesso?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Esegui /enable in un canale.** Il bot inizierà a imparare dai nuovi messaggi lì. Dopo aver chattato un po', esegui /meme per generare un meme. I meme arriveranno anche da soli quando il canale è attivo e c'è una conversazione in corso. Puoi cambiare la loro frequenza in /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "Posso avere impostazioni diverse per ogni canale?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Sì!** Tutte le informazioni del canale, come i dati per i meme, la frequenza e le altre impostazioni, sono salvate separatamente per ogni canale. Niente ti impedisce di tenere una frequenza bassissima nella chat principale e di alzarla al massimo nel canale spam.",
        "help.faq.isThereALimit.question": "C'è un limite a quanti meme il bot può fare al giorno?",
        "help.faq.isThereALimit.answer":
            "**No, non ci sono limiti.** Puoi eseguire `/meme` quante volte vuoi al giorno. Ed è gratis, perché ogni generazione richiede solo qualche millisecondo. Inoltre i meme non hanno watermark, quindi risultano più puliti di quelli fatti con altri generatori di meme.",
        "help.faq.canIDeleteStoredData.question": "Posso eliminare i dati salvati per la generazione dei meme?",
        "help.faq.canIDeleteStoredData.answer":
            '**Sì, in qualsiasi momento.** Esegui `/settings` e premi il pulsante "Elimina tutti i dati" per cancellare tutto quello che il bot ha salvato per il canale.',
        "help.faq.addBotToMyApps.question": 'Posso aggiungere il bot a "Le mie app" e usarlo ovunque?',
        "help.faq.addBotToMyApps.answer":
            '**Sì, ma senza alcune funzioni.** Potrai usare `/custom` e le azioni del tasto destro (come "Trasforma in citazione" o "Trasforma in notizia flash") ovunque su Discord. Ma i meme basati sulla vostra chat non funzioneranno, per motivi di privacy.',
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "E se voglio fare un meme con un testo e/o un'immagine specifici?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Usa `/custom`!** Ti permette di usare l'enorme libreria di template di Jstmemit come un normale generatore di meme con i tuoi testi e le tue immagini. E ovviamente anche questi meme non hanno né limiti né watermark.",
        "help.button.addJstmemit": "🔗 Aggiungi Jstmemit",
        "help.button.website": "🌐 Sito web",

        "milestones.heading": `Evviva! {{count}} meme in **<#{{channelId}}>**!`,
        "milestones.description": `Qui sotto qualche statistica su come ci avete reagito.`,
        "milestones.nextGoal": "Prossimo obiettivo: {{currentGoal}}/{{nextGoal}} meme",
        "milestones.turnOffInSettings": "-# Se non vuoi ricevere questi messaggi, puoi disattivarli in **/settings**",

        "stats.likes": "Mi piace: {{count}}",
        "stats.dislikes": "Non mi piace: {{count}}",
        "stats.templates": "Template usati: {{count}}",
        "stats.voices": "Voci usate: {{count}}",
    },
    [Locale.Indonesian]: {
        "enable.heading.enabled": "🎉 Bot siap!",
        "enable.heading.disabled": "🔴 Jstmemit mati di channel ini",
        "enable.body.enabled":
            "Jstmemit sekarang aktif dan akan membuat meme selama obrolan di sini. Kualitasnya makin bagus seiring bot mengenal channel kamu, dengan hasil yang jauh lebih baik setelah ada sekitar **~30 pesan** di memori.",
        "enable.body.disabled.ready":
            "Kamu sudah punya lebih dari **{{messagesAmount}} pesan** di memori, jadi Jstmemit siap bikin meme. Tinggal nyalakan lagi botnya dan dia akan mulai membuatnya selama obrolan aktif.",
        "enable.body.disabled.notReady":
            "Bot tidak bisa bikin meme di sini sampai kamu mengaktifkannya untuk channel ini. Nyalakan dan dia akan mulai membuat meme selama obrolan aktif.",
        "enable.memory.progress": "Pesan di memori: **{{messagesAmount}}**",
        "enable.memory.full": "Pesan di memori: **{{messagesAmount}}**",
        "enable.permissions.heading": "Ada beberapa izin yang belum diberikan!",
        "enable.permissions.description":
            "Bot butuh beberapa izin supaya bisa jalan, misalnya **Lampirkan File** untuk bisa mengirim meme yang dibuatnya atau **Sematkan Tautan** supaya menu `/settings` berfungsi dengan benar:\n",
        "enable.permissions.sendMessages": "Kirim Pesan",
        "enable.permissions.attachFiles": "Lampirkan File",
        "enable.permissions.embedLinks": "Sematkan Tautan",
        "enable.permissions.readHistory": "Baca Riwayat Pesan",
        "enable.permissions.viewChannel": "Lihat Channel",
        "enable.button.turnOff": "Matikan",
        "enable.button.turnOn": "Nyalakan",
        "enable.button.settings": "⚙️ Buka pengaturan",

        "error.heading": "⚠️ Ada yang salah",
        "error.body": "Coba lagi, dan kalau terus terjadi, laporkan errornya biar kami bisa cek.",
        "error.id": "**ID error:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Coba lagi",
        "error.button.reportError": "💬 Laporkan error",

        "notEnoughContext.heading": "🤔 Konteksnya belum cukup",
        "notEnoughContext.body":
            "Jstmemit butuh waktu lebih untuk mengenal channel kamu sebelum bisa bikin meme. Coba ngobrol lagi dan kirim beberapa GIF. Kalau error ini terus muncul, hubungi support.",
        "unknownTemplate.heading": "🤔 Aku tidak kenal template itu",
        "unknownTemplate.body": "Pastikan memilih salah satu opsi autocomplete saat memilih template di `/custom`",
        "wrongFileFormat.heading": "🤔 Format gambar tidak dikenal",
        "wrongFileFormat.body": 'File untuk "{{file}}" bukan gambar. Coba lagi dengan PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 Kamu tidak punya izin untuk itu",
        "missingPermissions.body":
            "Hanya anggota dengan izin **Kelola Server** atau **Kelola Channel** yang bisa mengubah pengaturan Jstmemit. Minta admin server kalau kamu perlu mengubahnya.",
        "missingBotPermissions.heading": "🔒 Jstmemit tidak bisa mengirim meme di sini",
        "missingBotPermissions.body":
            "Bot tidak punya beberapa izin di channel ini. Siapa saja yang bisa mengelola channel ini bisa memperbaikinya dengan masuk ke pengaturan channel dan memberikan izin-izin itu ke bot.\n\nIzin ini diperlukan untuk membuat meme otomatis selama obrolan, tapi meminta meme lewat `/meme` atau `/custom` tetap bisa tanpa izin tersebut.",
        "deleteData.confirm.heading": "🗑️ Hapus semua data channel ini?",
        "deleteData.confirm.body":
            "Ini akan menghapus permanen semua pesan dan tautan gambar yang tersimpan untuk channel ini dari Jstmemit dan tidak bisa dibatalkan. Bot tetap aktif dan akan mulai belajar lagi dari pesan baru. Kalau setelahnya mau berhenti total, matikan lewat `/enable`.",
        "deleteData.success.heading": "✅ Data terhapus!",
        "deleteData.success.body":
            "Semua pesan dan tautan gambar yang tersimpan untuk channel ini sudah dihapus. Bot masih menyala dan akan mulai belajar lagi dari pesan baru. Matikan lewat `/enable` kalau tidak mau memakainya lagi.",
        "deleteData.button.cancel": "Batal",
        "deleteData.button.delete": "Hapus semua data",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Hai, aku Jstmemit",
        "settings.about.body":
            "Bot yang bikin meme dari chat kalian. Ngobrolin apa saja dan...\ndia bakal jadiin itu meme pakai salah satu dari 300+ template buat nyindir kalian ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Aktifkan Jstmemit untuk mulai!",
        "settings.button.disable": "Nonaktifkan",
        "settings.button.enable": "Aktifkan",
        "settings.status.enabled": "**✅ Jstmemit menyala di channel ini!**",
        "settings.status.disabled": "**⚠️ Untuk bikin meme di channel ini, Jstmemit harus diaktifkan dulu!**",
        "settings.meme.heading": "💬 Pengaturan meme",
        "settings.meme.body": "Kamu bisa mengatur seberapa sering bot mengirim meme dan apa isinya",
        "settings.quality.heading": "Kualitas gambar",
        "settings.quality.body": "Mana yang lebih penting buat kamu: meme lebih bagus atau meme langsung jadi?",
        "settings.quality.image.label": "Kualitas lebih bagus (~1,2dtk per meme)",
        "settings.quality.image.description": "Gambar tanpa kompresi, dengan antialiasing",
        "settings.quality.speed.label": "Pembuatan lebih cepat (~0,3dtk per meme)",
        "settings.quality.speed.description": "Gambar dikompres dan diperkecil, teks sedikit lebih buruk",
        "settings.frequency.heading": "Frekuensi",
        "settings.frequency.body": "Seberapa sering bot mengirim meme acak ke chat tanpa diminta?",
        "settings.frequency.never.label": "Tidak pernah",
        "settings.frequency.never.description": "Jangan kirim meme, kecuali diminta lewat perintah /meme",
        "settings.frequency.rarely.label": "Jarang",
        "settings.frequency.rarely.description": "Sekali tiap ~100 pesan",
        "settings.frequency.sometimes.label": "Kadang-kadang",
        "settings.frequency.sometimes.description": "Sekali tiap ~50 pesan (untuk server besar)",
        "settings.frequency.often.label": "Sering",
        "settings.frequency.often.description": "Sekali tiap ~20 pesan (untuk server menengah)",
        "settings.frequency.quiteOften.label": "Cukup sering",
        "settings.frequency.quiteOften.description": "Sekali tiap ~10 pesan (untuk server kecil)",
        "settings.frequency.veryOften.label": "Sangat sering",
        "settings.frequency.veryOften.description": "Sekali tiap ~5 pesan (bisa jadi spam)",
        "settings.avatars.heading": "Avatar di meme",
        "settings.avatars.body": "Pakai foto profil di meme yang dibuat?",
        "settings.avatars.yes.label": "Ya",
        "settings.avatars.yes.description": "Bot akan pakai avatar untuk meme (disarankan)",
        "settings.avatars.no.label": "Tidak",
        "settings.avatars.no.description": "Bot tidak akan pakai avatar untuk meme",
        "settings.milestones.heading": "Pencapaian",
        "settings.milestones.body":
            "Rangkuman saat channel mencapai jumlah meme tertentu.\nMirip Spotify Wrapped, tapi soal meme.",
        "settings.milestones.yes.label": "Ya",
        "settings.milestones.yes.description": "Bot akan mengirim rangkuman saat channel mencapai target baru",
        "settings.milestones.no.label": "Tidak",
        "settings.milestones.no.description": "Matikan supaya channel tetap tenang",
        "settings.footer.body": "Mau menghapus semua data pesan channel ini?",
        "settings.footer.deleteButton": "Hapus semua data",
        "feedback.submit.heading": "💬 Masukan terkirim!",
        "feedback.submit.body":
            "Terima kasih banyak atas pesanmu, tim kami sudah menerimanya dan akan meninjaunya. Kalau mau bahas lebih lanjut, gabung ke [server support](https://discord.gg/THRnn8fhkZ) kami, biar kami bisa kirim balasan ke kamu.",
        "feedback.submit.yourMessage": "Pesanmu:",
        "modal.customMeme.title": "Bikin meme sendiri",
        "modal.customMeme.text.label": "Teks #{{id}}",
        "modal.customMeme.text.placeholder": "Sesuatu yang lucu di sini",
        "modal.customMeme.image.label": "Gambar #{{id}}",
        "modal.feedback.title": "Kirim masukan",
        "modal.feedback.label": "Pesanmu",
        "modal.feedback.description": "Laporkan bug, usulkan fitur, atau beri tahu pendapatmu",
        "modal.feedback.placeholder": "Halo, bisa tolong tambahkan template meme ...?",
        "modal.feedback.title.error": "Laporkan error",
        "modal.feedback.description.error": "Ceritakan apa yang kamu lakukan saat error muncul",
        "modal.feedback.placeholder.error": "Aku dapat error setelah ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Hai, aku Jstmemit",
        "help.about.commands.user":
            "### 👤 Di mana saja di Discord: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 Di server yang ada botnya: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Tapi cara kerjanya gimana?",
        "help.autoMemes.description":
            "Sekali tiap beberapa puluh pesan dia memilih template meme, mengambil beberapa gambar/gif/pesan, lalu mencampur semuanya jadi satu meme.\n\nSetiap meme yang dibuat punya tombol **:thumbsup: Suka**, **:repeat: Ulangi**, dan **:thumbsdown: Tidak suka** yang meningkatkan kualitas meme berikutnya dengan membantu bot paham mana yang lucu.",
        "help.rightClick.heading": "## 🖱 Ubah apa saja jadi meme",
        "help.rightClick.description":
            'Dengan bot ini kamu juga bisa mengubah pesan yang sudah ada (bahkan pesan suara!) jadi quote, berita terkini, atau tweet Grok. Atau menaruh foto profil seseorang di thumbnail YouTube "ala MrBeast".\n\nBuka menu Aplikasi lewat klik kanan atau tekan lama di HP, pilih Jstmemit, lalu pilih meme yang kamu mau.',
        "help.voice.heading": "## 🔊  Bikin pesan suara",
        "help.voice.description":
            "Pakai `/voice` untuk membacakan teksmu dengan salah satu dari 23 suara berbeda. Cocok buat bikin potongan soundboard atau sekadar membacakan pesan lucu.",
        "help.button.faq": "❓ Pertanyaan umum",
        "help.button.features": "✨ Daftar fitur",
        "help.faq.heading": "## ❓ Pertanyaan yang sering ditanyakan",
        "help.faq.description":
            "Tidak menemukan jawaban untuk pertanyaanmu? Kami bisa bantu di [server support](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Aku sudah menambahkan botnya, terus apa?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Jalankan /enable di sebuah channel.** Bot akan mulai belajar dari pesan baru di sana. Setelah ngobrol sebentar, jalankan /meme untuk membuat meme. Meme juga akan muncul sendiri saat channel aktif dan ada obrolan berlangsung. Frekuensinya bisa diubah di /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question":
            "Bisa punya pengaturan berbeda untuk tiap channel?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Bisa!** Semua informasi channel, seperti data untuk meme, frekuensi, dan pengaturan lainnya, disimpan terpisah untuk tiap channel. Tidak ada yang melarang kamu pasang frekuensi meme sangat rendah di chat utama tapi maksimal di channel spam.",
        "help.faq.isThereALimit.question": "Ada batas berapa banyak meme yang bisa dibuat bot per hari?",
        "help.faq.isThereALimit.answer":
            "**Tidak, tidak ada batasan.** Kamu bisa menjalankan `/meme` sebanyak apa pun dalam sehari. Dan gratis, karena tiap pembuatan cuma butuh milidetik. Meme juga tanpa watermark, jadi terlihat lebih bersih dibanding buatan generator meme lain.",
        "help.faq.canIDeleteStoredData.question": "Bisa menghapus data tersimpan untuk pembuatan meme?",
        "help.faq.canIDeleteStoredData.answer":
            '**Bisa, kapan saja.** Jalankan `/settings` lalu tekan tombol "Hapus semua data" untuk menghapus semua yang disimpan bot untuk channel itu.',
        "help.faq.addBotToMyApps.question": 'Bisa menambahkan bot ke "Aplikasi Saya" dan memakainya di mana saja?',
        "help.faq.addBotToMyApps.answer":
            '**Bisa, tapi tanpa beberapa fitur.** Kamu bisa memakai `/custom` dan aksi klik kanan (seperti "Jadikan quote" atau "Jadikan berita terkini") di mana saja di Discord. Tapi meme berdasarkan chat kalian tidak akan bekerja, demi privasi.',
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "Bagaimana kalau aku mau bikin meme dengan teks dan/atau gambar tertentu?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Pakai `/custom`!** Dengan itu kamu bisa memakai perpustakaan template raksasa Jstmemit sebagai generator meme biasa dengan teks dan gambarmu sendiri. Dan tentu saja meme yang dibuat begini juga tanpa batasan dan tanpa watermark.",
        "help.button.addJstmemit": "🔗 Tambahkan Jstmemit",
        "help.button.website": "🌐 Situs web",

        "milestones.heading": `Yeay! {{count}} meme di **<#{{channelId}}>**!`,
        "milestones.description": `Di bawah ada beberapa statistik soal cara kalian menanggapinya.`,
        "milestones.nextGoal": "Target berikutnya: {{currentGoal}}/{{nextGoal}} meme",
        "milestones.turnOffInSettings":
            "-# Kalau tidak mau menerima pesan seperti ini, kamu bisa mematikannya di **/settings**",

        "stats.likes": "Suka: {{count}}",
        "stats.dislikes": "Tidak suka: {{count}}",
        "stats.templates": "Template terpakai: {{count}}",
        "stats.voices": "Suara terpakai: {{count}}",
    },
    [Locale.Czech]: {
        "enable.heading.enabled": "🎉 Bot je připraven!",
        "enable.heading.disabled": "🔴 Jstmemit je v tomto kanálu vypnutý",
        "enable.body.enabled":
            "Jstmemit je teď aktivní a bude během chatů tady generovat memy. Kvalita se zlepšuje, jak bot poznává tvůj kanál, a výsledky budou o dost lepší, až bude mít v paměti asi **~30 zpráv**.",
        "enable.body.disabled.ready":
            "V paměti už máš přes **{{messagesAmount}} zpráv**, takže Jstmemit je připravený dělat memy. Stačí bota zase zapnout a začne je generovat během aktivních chatů.",
        "enable.body.disabled.notReady":
            "Bot tady nemůže dělat memy, dokud ho pro tento kanál nezapneš. Zapni ho a začne generovat memy během aktivních chatů.",
        "enable.memory.progress": "Zpráv v paměti: **{{messagesAmount}}**",
        "enable.memory.full": "Zpráv v paměti: **{{messagesAmount}}**",
        "enable.permissions.heading": "Chybí nějaká oprávnění!",
        "enable.permissions.sendMessages": "Posílat zprávy",
        "enable.permissions.attachFiles": "Připojovat soubory",
        "enable.permissions.embedLinks": "Vkládat odkazy",
        "enable.permissions.readHistory": "Číst historii zpráv",
        "enable.permissions.viewChannel": "Zobrazit kanál",
        "enable.permissions.description":
            "Bot potřebuje pár oprávnění, aby fungoval, třeba **Připojovat soubory**, aby mohl posílat vytvořené memy, **Zobrazit kanál**, aby měl kontext pro memy, nebo **Vkládat odkazy**, aby menu `/settings` fungovalo správně:\n",
        "enable.button.turnOff": "Vypnout",
        "enable.button.turnOn": "Zapnout",
        "enable.button.settings": "⚙️ Otevřít nastavení",

        "error.heading": "⚠️ Něco se pokazilo",
        "error.body": "Zkus to znovu, a pokud se to opakuje, nahlas chybu, ať se na to můžeme podívat.",
        "error.id": "**ID chyby:** {{interactionId}}",
        "error.button.tryAgain": "🔁 Zkusit znovu",
        "error.button.reportError": "💬 Nahlásit chybu",

        "notEnoughContext.body":
            "Jstmemit potřebuje víc času, aby poznal tvůj kanál, než dokáže udělat mem. Zkuste si ještě chvíli psát a pošlete pár GIFů. Pokud chyba přetrvává, obrať se na podporu.",
        "unknownTemplate.heading": "🤔 Takovou šablonu neznám",
        "unknownTemplate.body": "Při výběru šablony v `/custom` určitě vyber jednu z možností automatického doplňování",
        "wrongFileFormat.heading": "🤔 Neznámý formát obrázku",
        "wrongFileFormat.body": 'Soubor pro "{{file}}" není obrázek. Zkus to znovu s PNG/JPEG/AVIF/WebP.',
        "missingPermissions.heading": "🔒 Na tohle nemáš oprávnění",
        "missingPermissions.body":
            "Nastavení Jstmemitu můžou měnit jen členové s oprávněním **Spravovat server** nebo **Spravovat kanály**. Pokud potřebuješ změnu, obrať se na admina serveru.",
        "missingBotPermissions.heading": "🔒 Jstmemit tady nemůže posílat memy",
        "missingBotPermissions.body":
            "Bot nemá v tomto kanálu některá oprávnění. Kdokoliv, kdo může tento kanál spravovat, to opraví v nastavení kanálu tím, že mu je udělí.\n\nJsou potřeba pro automatické generování memů během konverzace, ale vyžádat si memy přes `/meme` nebo `/custom` jde i bez nich.",
        "deleteData.confirm.heading": "🗑️ Smazat všechna data tohoto kanálu?",
        "deleteData.confirm.body":
            "Tím se z Jstmemitu trvale smažou všechny uložené zprávy a odkazy na obrázky pro tento kanál a nejde to vrátit zpět. Bot zůstane zapnutý a začne se znovu učit z nových zpráv. Pokud ho pak chceš úplně zastavit, vypni ho přes `/enable`.",
        "deleteData.success.heading": "✅ Data smazána!",
        "deleteData.success.body":
            "Všechny uložené zprávy a odkazy na obrázky pro tento kanál byly smazány. Bot je pořád zapnutý a začne se znovu učit z nových zpráv. Vypni ho přes `/enable`, pokud ho už nechceš používat.",
        "deleteData.button.cancel": "Zrušit",
        "deleteData.button.delete": "Smazat všechna data",
        "settings.about.heading": "<:jstmemit:1533562196980797462> Čau, jsem Jstmemit",
        "settings.about.body":
            "Bot, který dělá memy z vašeho chatu. Bavte se o čemkoliv a...\nudělá z toho mem na jedné z 300+ šablon a utáhne si z vás ¯\\_(ツ)_/¯",
        "settings.about.enablePrompt": "Zapni Jstmemit a začni!",
        "settings.button.disable": "Vypnout",
        "settings.button.enable": "Zapnout",
        "settings.status.enabled": "**✅ Jstmemit je v tomto kanálu zapnutý!**",
        "settings.status.disabled": "**⚠️ Aby šlo v tomto kanálu dělat memy, musí se Jstmemit zapnout!**",
        "settings.meme.heading": "💬 Nastavení memů",
        "settings.meme.body": "Můžeš si nastavit, jak často bude bot posílat memy a co na nich bude",
        "settings.quality.heading": "Kvalita obrázku",
        "settings.quality.body": "Co je pro tebe důležitější: hezčí memy, nebo memy hned?",
        "settings.quality.image.label": "Lepší kvalita (~1,2s na mem)",
        "settings.quality.image.description": "Obrázky bez komprese, se zapnutým vyhlazováním",
        "settings.quality.speed.label": "Rychlejší generování (~0,3s na mem)",
        "settings.quality.speed.description": "Obrázky se komprimují a zmenšují, text je o něco horší",
        "settings.frequency.heading": "Frekvence",
        "settings.frequency.body": "Jak často má bot posílat náhodný mem do chatu, aniž by o to někdo požádal?",
        "settings.frequency.never.label": "Nikdy",
        "settings.frequency.never.description": "Neposílat memy, pokud nejsou vyžádány přes příkaz /meme",
        "settings.frequency.rarely.label": "Zřídka",
        "settings.frequency.rarely.description": "Jednou za ~100 zpráv",
        "settings.frequency.sometimes.label": "Občas",
        "settings.frequency.sometimes.description": "Jednou za ~50 zpráv (pro větší servery)",
        "settings.frequency.often.label": "Často",
        "settings.frequency.often.description": "Jednou za ~20 zpráv (pro střední servery)",
        "settings.frequency.quiteOften.label": "Dost často",
        "settings.frequency.quiteOften.description": "Jednou za ~10 zpráv (pro menší servery)",
        "settings.frequency.veryOften.label": "Velmi často",
        "settings.frequency.veryOften.description": "Jednou za ~5 zpráv (může dělat spam)",
        "settings.avatars.heading": "Avatary v memech",
        "settings.avatars.body": "Používat profilovky ve vygenerovaných memech?",
        "settings.avatars.yes.label": "Ano",
        "settings.avatars.yes.description": "Bot bude používat avatary pro memy (doporučeno)",
        "settings.avatars.no.label": "Ne",
        "settings.avatars.no.description": "Bot nebude používat avatary pro memy",
        "settings.milestones.heading": "Milníky",
        "settings.milestones.body":
            "Shrnutí, když kanál dosáhne dalšího milníku v počtu memů.\nNěco jako Spotify Wrapped, ale o memech.",
        "settings.milestones.yes.label": "Ano",
        "settings.milestones.yes.description": "Bot pošle shrnutí, když kanál dosáhne dalšího milníku",
        "settings.milestones.no.label": "Ne",
        "settings.milestones.no.description": "Vypnout, ať je v kanálu klid",
        "settings.footer.body": "Chceš odstranit všechna data zpráv tohoto kanálu?",
        "settings.footer.deleteButton": "Smazat všechna data",
        "feedback.submit.heading": "💬 Zpětná vazba odeslána!",
        "feedback.submit.body":
            "Moc děkujeme za tvou zprávu, náš tým ji dostal a podívá se na ni. Pokud to chceš probrat víc, přidej se na náš [server podpory](https://discord.gg/THRnn8fhkZ), tak ti budeme moct poslat odpověď.",
        "feedback.submit.yourMessage": "Tvoje zpráva:",
        "modal.customMeme.title": "Udělat vlastní mem",
        "modal.customMeme.text.label": "Text #{{id}}",
        "modal.customMeme.text.placeholder": "Něco vtipného sem",
        "modal.customMeme.image.label": "Obrázek #{{id}}",
        "modal.feedback.title": "Poslat zpětnou vazbu",
        "modal.feedback.label": "Tvoje zpráva",
        "modal.feedback.description": "Nahlaš chybu, navrhni funkci nebo nám řekni svůj názor",
        "modal.feedback.placeholder": "Ahoj, mohli byste přidat šablonu memu ...?",
        "modal.feedback.title.error": "Nahlásit chybu",
        "modal.feedback.description.error": "Popiš, co se dělo, když se chyba objevila",
        "modal.feedback.placeholder.error": "Chyba se objevila po ...",

        "help.about.heading": "<:jstmemit:1533562196980797462> Čau, jsem Jstmemit",
        "help.about.commands.user":
            "### 👤 Kdekoliv na Discordu: **`/voice`**, **`/custom`**, **`/feedback`**, **`/help`**",
        "help.about.commands.guild": "### 🏠 Na serverech s botem: **`/meme`**, **`/enable`**, **`/settings`**",
        "help.autoMemes.heading": "## 💬  Ale jak to přesně funguje?",
        "help.autoMemes.description":
            "Jednou za pár desítek zpráv si vybere šablonu memu, vezme pár obrázků/gifů/zpráv a všechno to smíchá do memu.\n\nKaždý vygenerovaný mem má tlačítka **:thumbsup: Líbí**, **:repeat: Znovu** a **:thumbsdown: Nelíbí**, která zlepšují kvalitu budoucích memů tím, že botovi pomáhají pochopit, co bylo vtipné.",
        "help.rightClick.heading": "## 🖱 Udělej mem z čehokoliv",
        "help.rightClick.description":
            "Můžeš s ním taky předělat jakoukoliv existující zprávu (i hlasovou!) na citát, zprávy nebo tweet od Groka. Nebo dát něčí profilovku na YouTube náhled „ve stylu MrBeasta“.\n\nOtevři menu Aplikace pravým kliknutím nebo dlouhým podržením na mobilu, vyber Jstmemit a pak mem, který chceš.",
        "help.voice.heading": "## 🔊  Vytvářej hlasové zprávy",
        "help.voice.description":
            "Použij `/voice` a nech svůj text přečíst jedním z 23 různých hlasů. Ideální na hlášky do soundboardu nebo prostě na čtení vtipných zpráv.",
        "help.button.faq": "❓ Časté dotazy",
        "help.button.features": "✨ Seznam funkcí",
        "help.faq.heading": "## ❓ Časté dotazy",
        "help.faq.description":
            "Nemůžeš najít odpověď na svou otázku? Pomůžeme ti na [serveru podpory](https://discord.gg/THRnn8fhkZ)",
        "help.faq.iAddedTheBotWhatNow.question": "Přidal jsem bota, co teď?",
        "help.faq.iAddedTheBotWhatNow.answer":
            "**Spusť /enable v kanálu.** Bot se tam začne učit z nových zpráv. Až si chvíli popíšete, spusť /meme a vygeneruje se mem. Memy budou chodit i samy, když je kanál aktivní a probíhá konverzace. Jejich frekvenci můžeš změnit v /settings.",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.question": "Můžu mít pro každý kanál jiné nastavení?",
        "help.faq.canIHaveDifferentQuestionsForEveryChannel.answer":
            "**Ano!** Všechny informace o kanálu, jako data pro memy, frekvence a další nastavení, se ukládají pro každý kanál zvlášť. Nic ti nebrání mít v hlavním chatu velmi nízkou frekvenci memů a ve spamovém kanálu ji vytočit na maximum.",
        "help.faq.isThereALimit.question": "Je nějaký limit, kolik memů může bot denně udělat?",
        "help.faq.isThereALimit.answer":
            "**Ne, žádné limity nejsou.** Můžeš spouštět `/meme` kolikrát denně chceš. A je to zadarmo, protože každá generace trvá jen milisekundy. Na memech taky nejsou žádné vodoznaky, takže vypadají čistěji než ty z jiných generátorů memů.",
        "help.faq.canIDeleteStoredData.question": "Můžu smazat uložená data pro generování memů?",
        "help.faq.canIDeleteStoredData.answer":
            "**Ano, kdykoliv.** Spusť `/settings` a stiskni tlačítko „Smazat všechna data“, čímž smažeš všechno, co si bot pro kanál uložil.",
        "help.faq.addBotToMyApps.question": "Můžu si bota přidat do „Moje aplikace“ a používat ho kdekoliv?",
        "help.faq.addBotToMyApps.answer":
            "**Ano, ale bez některých funkcí.** Budeš moct používat `/custom` a akce přes pravé kliknutí (jako „Udělat z toho citát“ nebo „Udělat z toho zprávy“) kdekoliv na Discordu. Ale memy založené na vašem chatu fungovat nebudou, kvůli soukromí.",
        "help.faq.whatIfIWantToMakeACustomMeme.question":
            "Co když chci udělat vlastní mem s konkrétním textem a/nebo obrázkem?",
        "help.faq.whatIfIWantToMakeACustomMeme.answer":
            "**Použij `/custom`!** Umožní ti používat obrovskou knihovnu šablon Jstmemitu jako obyčejný generátor memů s vlastním textem a obrázky. A samozřejmě ani na takhle vytvořených memech nejsou žádné limity ani vodoznaky.",
        "help.button.addJstmemit": "🔗 Přidat Jstmemit",
        "help.button.website": "🌐 Web",

        "milestones.heading": `Hurá! {{count}} memů v **<#{{channelId}}>**!`,
        "milestones.description": `Níže je pár statistik o tom, jak jste na ně reagovali.`,
        "milestones.nextGoal": "Další cíl: {{currentGoal}}/{{nextGoal}} memů",
        "milestones.turnOffInSettings": "-# Pokud tyhle zprávy nechceš dostávat, můžeš je vypnout v **/settings**",

        "stats.likes": "Líbí: {{count}}",
        "stats.dislikes": "Nelíbí: {{count}}",
        "stats.templates": "Použité šablony: {{count}}",
        "stats.voices": "Použité hlasy: {{count}}",
    },
};
