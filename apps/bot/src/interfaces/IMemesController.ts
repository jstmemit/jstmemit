import type { UserContextMenuCommandInteraction } from "discord.js";
import {
    type ButtonInteraction,
    type ChatInputCommandInteraction,
    type Message,
    type ModalSubmitInteraction,
    type MessageContextMenuCommandInteraction,
} from "discord.js";
import type { MemeGenerationTrigger } from "@jstmemit/shared/models/MemeGenerationTrigger";

export abstract class IMemesController {
    public abstract handleMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
        trigger?: MemeGenerationTrigger,
    ): Promise<void>;
    public abstract handleGenerateCustomMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
        id?: string,
    ): Promise<void>;
    public abstract handleGenerateCustomMemeModalSubmit(interaction: ModalSubmitInteraction): Promise<void>;
    public abstract handleGenerateViaContextMenuInteraction(
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
        templateName: string | undefined,
    ): Promise<void>;
}
