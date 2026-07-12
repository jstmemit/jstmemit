import { Locale } from "discord.js";
import type { TranslationString } from "@jstmemit/shared/models/TranslationString";

export const locale: Partial<TranslationString> = {
    [Locale.EnglishUS]: {
        test: "test",
    },
    [Locale.French]: {
        test: "test 2",
    },
};
