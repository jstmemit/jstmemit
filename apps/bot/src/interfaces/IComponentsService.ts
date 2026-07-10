import type { ActionRowBuilder, ButtonBuilder } from "discord.js";
import { type ContainerBuilder } from "discord.js";

export abstract class IComponentsService {
    public abstract getEnableMessageComponent(isEnabled: boolean, messagesAmount?: number): ContainerBuilder;
    public abstract getEnableButtonsComponent(isEnabled: boolean): ActionRowBuilder<ButtonBuilder>;
    public abstract getErrorMessageComponent(interactionId: string): ContainerBuilder;
    public abstract getNotEnoughContextMessageComponent(interactionId: string): ContainerBuilder;
    public abstract getMissingPermissionsMessageComponent(): ContainerBuilder;
    public abstract getSettingsHeaderMessageComponent(isEnabled: boolean): ContainerBuilder;
    public abstract getSettingsBodyMessageComponent(frequency: number, useAvatarsInMemes: boolean): ContainerBuilder;
    public abstract getSettingsFooterMessageComponent(): ContainerBuilder;
    public abstract getDeleteDataButtonsComponent(): ActionRowBuilder<ButtonBuilder>;
    public abstract getDeleteDataConfirmationMessageComponent(): ContainerBuilder;
    public abstract getDeleteDataSuccessMessageComponent(): ContainerBuilder;
    public abstract getUnknownTemplateMessageComponent(interactionId: string): ContainerBuilder;
    public abstract getWrongFileFormatMessageComponent(interactionId: string, file: string): ContainerBuilder;
}
