import type { LocalizationMap } from "discord.js";
import { Locale } from "discord.js";

export const buildLocales = (enName: string, translations: LocalizationMap): LocalizationMap => {
    const result: LocalizationMap = {
        [Locale.EnglishUS]: enName,
        [Locale.EnglishGB]: enName,
    };

    for (const locale of Object.values(Locale) as Locale[]) {
        result[locale] = translations[locale] || enName;
    }

    return result;
};
