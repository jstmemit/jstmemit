import type { ApplicationCommandOptionChoiceData, AutocompleteInteraction } from "discord.js";
import type { IAutocompleteService } from "#/interfaces/IAutocompleteService.ts";
import type { IAutocompleteController } from "#/interfaces/IAutocompleteController.ts";
import { analytics } from "@jstmemit/analytics";

export class AutocompleteController implements IAutocompleteController {
    private readonly _autocompleteService: IAutocompleteService;

    public constructor(autocompleteService: IAutocompleteService) {
        this._autocompleteService = autocompleteService;
    }

    /**
     * Gets templates that match the search query
     * and responds with them
     *
     * @param interaction
     *
     * @authors Kyrylo Maliuha & Oleksii Sych
     */
    public async handleTemplateAutocompleteInteraction(interaction: AutocompleteInteraction): Promise<void> {
        const focused: string = interaction.options.getFocused().toLowerCase();

        const matches: ApplicationCommandOptionChoiceData[] = this._autocompleteService.getTemplateMatches(
            focused,
            interaction.locale,
        );

        if (focused.length >= 3) {
            analytics.capture({
                event: "template_search",
                distinctId: interaction.user.id,
                properties: {
                    query: focused,
                    matches: matches.length,
                    language: interaction.locale,
                    channelId: interaction.channelId,
                    guildId: interaction.guildId,
                },
            });
        }

        await interaction.respond(matches);
    }
}
