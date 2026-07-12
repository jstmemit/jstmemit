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
    },
    [Locale.Russian]: {
        "enable.heading.enabled": "🎉 Бот готов к работе!",
        "enable.heading.disabled": "🔴 Jstmemit выключен в этом канале",
        "enable.body.enabled":
            "Jstmemit теперь активен и будет генерировать мемы во время общения тут. Качество улучшается по мере того, как бот изучает ваш канал, и результаты станут заметно лучше, когда в памяти будет около **~30 сообщений**.",
        "enable.body.disabled.ready":
            "У вас уже более **{{messagesAmount}} сообщений** в памяти, так что Jstmemit готов делать мемы. Просто включите бота обратно, и он начнёт генерировать их во время активных чатов.",
        "enable.body.disabled.notReady":
            "Бот не может делать мемы здесь, пока вы не включите его для этого канала. Включите его, и он начнёт генерировать мемы во время активного общения.",
        "enable.memory.progress": "Сообщений в памяти: **{{messagesAmount}}/30**",
        "enable.memory.full": "Сообщений в памяти: **{{messagesAmount}}**",

        "enable.button.turnOff": "Выключить",
        "enable.button.turnOn": "Включить",
        "enable.button.settings": "⚙️ Открыть настройки",

        "error.heading": "🔴 Что-то пошло не так!",
        "error.body":
            "Бот не смог ответить на ваш запрос из-за неизвестной ошибки. Попробуйте ещё раз, и если это происходит часто, обратитесь в поддержку.",
        "error.id": "**Ошибка:** {{interactionId}}",
    },
};
