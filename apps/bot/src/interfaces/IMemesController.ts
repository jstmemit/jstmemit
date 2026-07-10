import {
    type ButtonInteraction,
    type ChatInputCommandInteraction,
    type Message,
    type AutocompleteInteraction,
} from "discord.js";

export abstract class IMemesController {
    public abstract handleMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
    ): Promise<void>;
    public abstract handleTemplateAutocompleteInteraction(interaction: AutocompleteInteraction): Promise<void>;
}
