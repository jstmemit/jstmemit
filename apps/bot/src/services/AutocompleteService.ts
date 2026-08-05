import type { IAutocompleteService } from "#/interfaces/IAutocompleteService.ts";
import { type ApplicationCommandOptionChoiceData, Locale } from "discord.js";
import type { Template } from "@jstmemit/shared/models/Template";
import { type TemplateTopic, TopicLocalizationMap } from "@jstmemit/shared/models/TemplateTopic";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";

export class AutocompleteService implements IAutocompleteService {
    private readonly _templatesRepository: ITemplatesRepository;

    public constructor(templatesRepository: ITemplatesRepository) {
        this._templatesRepository = templatesRepository;
    }

    public getTemplateMatches(query: string, locale: Locale): ApplicationCommandOptionChoiceData[] {
        const templates: Template[] = this._templatesRepository.getAll();

        return templates
            .filter((template: Template): boolean => {
                const matchesName: boolean = template.name.toLowerCase().includes(query);
                const matchesDisplayName: boolean = Object.values(template.displayName).some(
                    (localizedName: string | null) => localizedName?.toLowerCase().includes(query) ?? false,
                );
                const matchesTopics: boolean = template.topics.some((topic: TemplateTopic) => {
                    const topicLocalizations = TopicLocalizationMap[topic];
                    return topicLocalizations
                        ? Object.values(topicLocalizations).some(
                              (localizedTopic: string | null) => localizedTopic?.toLowerCase().includes(query) ?? false,
                          )
                        : false;
                });

                return Boolean(matchesName || matchesDisplayName || matchesTopics);
            })
            .map((template: Template): ApplicationCommandOptionChoiceData => {
                const localizedName: string =
                    template.displayName[locale] ??
                    template.displayName[Locale.EnglishUS] ??
                    Object.values(template.displayName)[0] ??
                    template.name;

                return {
                    name: localizedName,
                    nameLocalizations: template.displayName,
                    value: template.name,
                };
            })
            .sort((a: ApplicationCommandOptionChoiceData, b: ApplicationCommandOptionChoiceData) =>
                a.name.localeCompare(b.name),
            )
            .slice(0, 25);
    }
}
