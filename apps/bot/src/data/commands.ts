export const commands = [
    {
        name: "meme",
        name_localizations: {
            ru: "мем",
            uk: "мем",
        },
        description: "Generate a meme with a random template",
        description_localizations: {
            ru: "Сгенерировать случайный мем",
            nl: "Genereer een random meme",
            fr: "Générer un mème aléatoire",
            de: "Erzeuge ein zufälliges Meme",
            uk: "Згенерувати рандомний мем",
            pl: "Wygeneruj losowy mem",
        },
        contexts: [0],
        dm_permission: false,
    },
    {
        name: "enable",
        name_localizations: {
            ru: "включить",
            nl: "inschakelen",
            fr: "activer",
            de: "aktivieren",
            uk: "увімкнути",
            pl: "włącz",
        },
        description: "Enable or disable generating memes in this channel",
        description_localizations: {
            ru: "Включить или отключить генерацию мемов в этом канале",
            nl: "Meme generatie in dit kanaal in- of uitschakelen",
            fr: "Activer ou désactiver la génération de mèmes dans ce canal",
            de: "Meme-Generierung in diesem Kanal aktivieren oder deaktivieren",
            uk: "Увімкнути або вимкнути генерацію мемів у цьому каналі",
            pl: "Włącz lub wyłącz generowanie memów na tym kanale",
        },
        contexts: [0],
        dm_permission: false,
    },
];
