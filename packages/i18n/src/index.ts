import { locale } from "#/locale.ts";
import { Locale } from "discord.js";
import { interpolateString } from "#/helpers/interpolateString.ts";

export const t = (key: string, language: string, variables: Record<string, string> = {}): string => {
    const targetLanguage = language as Locale;

    const translation = locale[targetLanguage]?.[key] ?? locale[Locale.EnglishUS]?.[key] ?? key;

    if (Object.keys(variables).length > 0) {
        return interpolateString(translation, variables);
    }

    return translation;
};
