import { locale } from "#/locale.ts";
import { Locale } from "discord.js";
import { interpolateString } from "#/helpers/interpolateString.ts";

export const t = (key: string, language: Locale, variables: Record<string, string> = {}): string => {
    const translation = locale[key]?.[language] ?? locale[key]?.[Locale.EnglishUS] ?? key;

    if (Object.keys(variables).length > 0) {
        return interpolateString(translation, variables);
    }

    return translation;
};
