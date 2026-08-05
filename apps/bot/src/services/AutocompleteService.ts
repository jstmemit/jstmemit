import type { IAutocompleteService } from "#/interfaces/IAutocompleteService.ts";
import type { Locale } from "discord.js";
import { type ApplicationCommandOptionChoiceData } from "discord.js";
import type { Template } from "@jstmemit/shared/models/Template";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";

export class AutocompleteService implements IAutocompleteService {
    private readonly _templatesRepository: ITemplatesRepository;

    public constructor(templatesRepository: ITemplatesRepository) {
        this._templatesRepository = templatesRepository;
    }

    public getTemplateMatches(query: string, locale: Locale): ApplicationCommandOptionChoiceData[] {
        const templates: Template[] = this._templatesRepository.findTemplates(query);
        const matches: ApplicationCommandOptionChoiceData[] = this._convertTemplatesIntoMatches(templates, locale);

        return this._sortTemplateMatches(matches, locale);
    }

    private _localizeTemplateName(template: Template, locale: Locale): string {
        return template.displayName[locale] || template.name;
    }

    private _convertTemplatesIntoMatches(templates: Template[], locale: Locale): ApplicationCommandOptionChoiceData[] {
        return templates.map((template: Template): ApplicationCommandOptionChoiceData => {
            return {
                name: this._localizeTemplateName(template, locale),
                value: template.name,
            };
        });
    }

    private _sortTemplateMatches(
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
