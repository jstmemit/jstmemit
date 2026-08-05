import type { IAutocompleteService } from "#/interfaces/IAutocompleteService.ts";
import { Locale } from "discord.js";
import { type ApplicationCommandOptionChoiceData } from "discord.js";
import type { Template } from "@jstmemit/shared/models/Template";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import { isNonNullish } from "remeda";

export class AutocompleteService implements IAutocompleteService {
    private readonly _templatesRepository: ITemplatesRepository;

    public constructor(templatesRepository: ITemplatesRepository) {
        this._templatesRepository = templatesRepository;
    }

    public getTemplateMatches(query: string, locale: Locale): ApplicationCommandOptionChoiceData[] {
        const templates: Template[] = this._templatesRepository.findTemplates(query);
        const matches: ApplicationCommandOptionChoiceData[] = templates.map(
            (template: Template): ApplicationCommandOptionChoiceData => this._toChoice(template, locale),
        );

        return this._sortMatches(matches, locale);
    }

    private _localizeName(template: Template, locale: Locale): string {
        return (
            template.displayName[locale] ??
            template.displayName[Locale.EnglishUS] ??
            Object.values(template.displayName).find(isNonNullish) ??
            template.name
        );
    }

    private _toChoice(template: Template, locale: Locale): ApplicationCommandOptionChoiceData {
        return {
            name: this._localizeName(template, locale),
            nameLocalizations: template.displayName,
            value: template.name,
        };
    }

    private _sortMatches(
        matches: ApplicationCommandOptionChoiceData[],
        locale: Locale,
    ): ApplicationCommandOptionChoiceData[] {
        return matches
            .sort((a: ApplicationCommandOptionChoiceData, b: ApplicationCommandOptionChoiceData): number =>
                a.name.localeCompare(b.name, locale),
            )
            .slice(0, 25);
    }
}
