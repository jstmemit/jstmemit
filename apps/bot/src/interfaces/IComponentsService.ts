import type { ActionRowBuilder, ButtonBuilder } from "discord.js";
import { type ContainerBuilder } from "discord.js";

export abstract class IComponentsService {
    public abstract getEnableMessageComponent(
        isEnabled: boolean,
        messagesAmount: number,
    ): ContainerBuilder;
    public abstract getEnableButtonsComponent(
        isEnabled: boolean,
    ): ActionRowBuilder<ButtonBuilder>;
    public abstract getErrorMessageComponent(
        interactionId: string,
    ): ContainerBuilder;
    public abstract getSettingsHeaderMessageComponent(
        isEnabled: boolean,
    ): ContainerBuilder;
    public abstract getSettingsBodyMessageComponent(
        frequency: number,
    ): ContainerBuilder;
}
