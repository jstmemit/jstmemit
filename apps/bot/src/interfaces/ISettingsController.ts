import type { ButtonInteraction, ChatInputCommandInteraction, StringSelectMenuInteraction } from "discord.js";

export abstract class ISettingsController {
    public abstract handleSettingsInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction,
    ): Promise<void>;
    public abstract handleFrequencySelect(interaction: StringSelectMenuInteraction): Promise<void>;
    public abstract handleUserAvatarsSelect(interaction: StringSelectMenuInteraction): Promise<void>;
    public abstract handleDeleteDataInteraction(interaction: ButtonInteraction): Promise<void>;
}
