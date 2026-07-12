import type { Locale } from "discord.js";

export type TranslationString = Record<Locale, Record<string, string>>;
