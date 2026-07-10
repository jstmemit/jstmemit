import {
    type ButtonInteraction,
    type ChatInputCommandInteraction,
    type Message,
    type AutocompleteInteraction,
    type ModalSubmitInteraction,
} from "discord.js";

export abstract class IMemesController {
    public abstract handleMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
    ): Promise<void>;
    public abstract handleTemplateAutocompleteInteraction(interaction: AutocompleteInteraction): Promise<void>;
    public abstract handleGenerateCustomMemeInteraction(interaction: ChatInputCommandInteraction): Promise<void>;
    public abstract handleGenerateCustomMemeModalSubmit(interaction: ModalSubmitInteraction): Promise<void>;
}
