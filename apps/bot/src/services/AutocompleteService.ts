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

    /**
     * Finds templates that match the query, converts them
     * into an array of Discord's autocomplete match options,
     * sorts and returns them
     *
     * @param query
     * @param locale
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    public getTemplateMatches(query: string, locale: Locale): ApplicationCommandOptionChoiceData[] {
        const templates: Template[] = this._templatesRepository.findTemplates(query);
        const matches: ApplicationCommandOptionChoiceData[] = this._convertTemplatesIntoMatches(templates, locale);

        return this._sortTemplateMatches(matches, locale);
    }

    /**
     * Tries to get a localized display name and fallbacks
     * to using template name if it doesn't exist
     *
     * @param template
     * @param locale
     * @private
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    private _localizeTemplateName(template: Template, locale: Locale): string {
        return template.displayName[locale] || template.name;
    }

    /**
     * Makes an array of autocomplete matches from an array of templates
     *
     * @param templates
     * @param locale
     * @private
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    private _convertTemplatesIntoMatches(templates: Template[], locale: Locale): ApplicationCommandOptionChoiceData[] {
        return templates.map((template: Template): ApplicationCommandOptionChoiceData => {
            const isAnimated: boolean = (template.animationDuration ?? 0) > 0;

            return {
                name: `${this._localizeTemplateName(template, locale)} ${isAnimated ? "🎦" : ""}`,
                value: template.name,
            };
        });
    }

    /**
     * Sorts matches and returns a slice with
     * 25 of them or less
     *
     * @param matches
     * @param locale
     * @private
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
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
