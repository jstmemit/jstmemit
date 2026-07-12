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
        "enable.memory.progress": "Messages in memory: **{{messagesAmount}}/30**",
        "enable.memory.full": "Messages in memory: **{{messagesAmount}}**",

        "enable.button.turnOff": "Turn off",
        "enable.button.turnOn": "Turn on",
        "enable.button.settings": "⚙️ Open settings",
        "error.heading": "🔴 Something went wrong!",

        "error.body":
            "Bot failed to answer your request because of an unknown error. Please try again and if this happens often, contact support.",
        "error.id": "**Error ID:** {{interactionId}}",

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
        "deleteData.confirm.heading": "🗑️ Delete all data for this channel?",
        "deleteData.confirm.body":
            "This permanently deletes all saved messages and image links for this channel from Jstmemit and can't be undone. The bot stays enabled and will start learning again from new messages. If you wish to stop it entirely afterwards, turn it off with `/enable`.",
        "deleteData.success.heading": "✅ Data deleted!",
        "deleteData.success.body":
            "All saved messages and image links for this channel were deleted. The bot is still on and will start learning again from new messages. Turn it off with `/enable` if you wish to stop using it.",
        "deleteData.button.cancel": "Cancel",
        "deleteData.button.delete": "Delete all data",

        "settings.about.heading": "❓ About this bot",
        "settings.about.body":
            "A discord bot that generates memes based on whatever's going on in the channel. Talk about a boss raid, then get memes about that.",
        "settings.about.enablePrompt": "Enable Jstmemit below to start!",
        "settings.button.disable": "Disable",
        "settings.button.enable": "Enable",
        "settings.status.enabled": "**✅ Jstmemit is turned on in this channel!**",
        "settings.status.disabled": "**⚠️ Jstmemit needs to be enabled to make memes here!**",
        "settings.meme.heading": "💬 Meme settings",
        "settings.meme.body": "You can control how often the bot is going to send memes and what's on them",
        "settings.frequency.heading": "Frequency",
        "settings.frequency.body": "How often should the bot send a random meme in the chat without being asked to?",
        "settings.frequency.never.label": "Never",
        "settings.frequency.never.description": "Don't send memes, unless requested via a /meme command",
        "settings.frequency.rarely.label": "Rarely",
        "settings.frequency.rarely.description": "Once every ~100 messages",
        "settings.frequency.sometimes.label": "Sometimes",
        "settings.frequency.sometimes.description": "Once every ~50 message (for bigger servers)",
        "settings.frequency.often.label": "Often",
        "settings.frequency.often.description": "Once every ~20 messages (for smaller servers)",
        "settings.frequency.veryOften.label": "Very often",
        "settings.frequency.veryOften.description": "Once every ~10 messages (can produce spam)",
        "settings.avatars.heading": "Avatars in memes",
        "settings.avatars.body": "Include profile pictures in generated memes?",
        "settings.avatars.yes.label": "Yes",
        "settings.avatars.yes.description": "Bot will use avatars for memes (recommended)",
        "settings.avatars.no.label": "No",
        "settings.avatars.no.description": "Bot won't use avatars for memes",
        "settings.footer.body": "Want to remove all message data about this channel?",
        "settings.footer.deleteButton": "Delete all data",
        "feedback.submit.heading": "💬 Feedback submitted!",
        "feedback.submit.body":
            "Thank you very much for your message, our team has received it and will look into it. If you'd like to discuss it further feel free to join our [Support server](https://discord.gg/THRnn8fhkZ), this way we can send our reply to you.",
        "feedback.submit.yourMessage": "Your message:",
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
        "enable.memory.progress": "Сообщений в памяти: **{{messagesAmount}}/30**",
        "enable.memory.full": "Сообщений в памяти: **{{messagesAmount}}**",

        "enable.button.turnOff": "Выключить",
        "enable.button.turnOn": "Включить",
        "enable.button.settings": "⚙️ Открыть настройки",

        "error.heading": "🔴 Что-то пошло не так!",
        "error.body":
            "Бот не смог ответить на ваш запрос из-за неизвестной ошибки. Попробуйте ещё раз, и если это происходит часто, обратитесь в поддержку.",
        "error.id": "**Ошибка:** {{interactionId}}",

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
        "deleteData.confirm.heading": "🗑️ Удалить все данные для этого канала?",
        "deleteData.confirm.body":
            "Это навсегда удалит все сохранённые сообщения и ссылки на изображения для этого канала из Jstmemit, и это нельзя отменить. Бот останется включённым и начнёт обучаться заново на новых сообщениях. Если после этого вы хотите полностью его остановить, выключите его через `/enable`.",
        "deleteData.success.heading": "✅ Данные удалены!",
        "deleteData.success.body":
            "Все сохранённые сообщения и ссылки на изображения для этого канала были удалены. Бот всё ещё включён и начнёт обучаться заново на новых сообщениях. Выключите его через `/enable`, если больше не хотите им пользоваться.",
        "deleteData.button.cancel": "Отмена",
        "deleteData.button.delete": "Удалить все данные",

        "settings.about.heading": "❓ Об этом боте",
        "settings.about.body":
            "Jstmemit это бот который генерирует мемы на основе сообщений и картинок в чате. Обсуждаете рейд чей-то базы в расте? Бот сделает про это мемы.",
        "settings.about.enablePrompt": "Включите Jstmemit чтобы начать!",
        "settings.button.disable": "Выключить",
        "settings.button.enable": "Включить",
        "settings.status.enabled": "**✅ Jstmemit включён в этом канале!**",
        "settings.status.disabled": "**⚠️ Чтобы делать мемы в этом канале нужно включить Jstmemit!**",
        "settings.meme.heading": "💬 Настройки мемов",
        "settings.meme.body": "Вы можете настроить, как часто бот будет отправлять мемы и что на них будет",
        "settings.frequency.heading": "Редкость",
        "settings.frequency.body": "Как часто бот должен отправлять случайный мем в чат без запроса?",
        "settings.frequency.never.label": "Никогда",
        "settings.frequency.never.description": "Не отправлять мемы, кроме запросов через команду /meme",
        "settings.frequency.rarely.label": "Редко",
        "settings.frequency.rarely.description": "Раз в ~100 сообщений",
        "settings.frequency.sometimes.label": "Иногда",
        "settings.frequency.sometimes.description": "Раз в ~50 сообщений (для больших серверов)",
        "settings.frequency.often.label": "Часто",
        "settings.frequency.often.description": "Раз в ~20 сообщений (для небольших серверов)",
        "settings.frequency.veryOften.label": "Очень часто",
        "settings.frequency.veryOften.description": "Раз в ~10 сообщений (может делать спам)",
        "settings.avatars.heading": "Аватары в мемах",
        "settings.avatars.body": "Использовать аватары в сгенерированных мемах?",
        "settings.avatars.yes.label": "Да",
        "settings.avatars.yes.description": "Бот будет использовать аватары для мемов (рекомендуется)",
        "settings.avatars.no.label": "Нет",
        "settings.avatars.no.description": "Бот не будет использовать аватары для мемов",
        "settings.footer.body": "Хотите удалить все данные сообщений этого канала?",
        "settings.footer.deleteButton": "Удалить все данные",
        "feedback.submit.heading": "💬 Идея отправлена!",
        "feedback.submit.body":
            "Большое спасибо за ваше сообщение, наша команда получила его и рассмотрит. Если хотите обсудить его подробнее, присоединяйтесь к нашему [серверу поддержки](https://discord.gg/THRnn8fhkZ), так мы сможем отправить вам ответ.",
        "feedback.submit.yourMessage": "Ваше сообщение:",
    },
};
