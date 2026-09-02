import type { Locale } from "discord.js";
import { type ApplicationCommandOptionChoiceData } from "discord.js";

export abstract class IAutocompleteService {
    public abstract getTemplateMatches(query: string, locale: Locale): ApplicationCommandOptionChoiceData[];
}
