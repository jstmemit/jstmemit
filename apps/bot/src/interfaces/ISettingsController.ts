import type {
    ButtonInteraction,
    ChatInputCommandInteraction,
} from "discord.js";

export abstract class ISettingsController {
    public abstract handleSettingsInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
    ): Promise<void>;
}
