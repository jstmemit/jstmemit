import type { ApplicationCommandOptionChoiceData, AutocompleteInteraction } from "discord.js";
import type { IAutocompleteService } from "#/interfaces/IAutocompleteService.ts";
import type { IAutocompleteController } from "#/interfaces/IAutocompleteController.ts";

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

        await interaction.respond(matches);
    }
}
