import type { AutocompleteInteraction } from "discord.js";

export abstract class IAutocompleteController {
    public abstract handleTemplateAutocompleteInteraction(interaction: AutocompleteInteraction): Promise<void>;
}
