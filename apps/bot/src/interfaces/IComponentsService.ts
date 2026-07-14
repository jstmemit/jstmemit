import type { ActionRowBuilder, ButtonBuilder, ContainerBuilder, Locale } from "discord.js";

export abstract class IComponentsService {
    public abstract getEnableMessageComponent(
        language: Locale,
        isEnabled: boolean,
        messagesAmount?: number,
    ): ContainerBuilder;
    public abstract getEnableButtonsComponent(language: Locale, isEnabled: boolean): ActionRowBuilder<ButtonBuilder>;
    public abstract getErrorMessageComponent(language: Locale, interactionId: string): ContainerBuilder;
    public abstract getNotEnoughContextMessageComponent(language: Locale, interactionId: string): ContainerBuilder;
    public abstract getMissingPermissionsMessageComponent(language: Locale): ContainerBuilder;
    public abstract getHelpHeaderMessageComponent(language: Locale, isEnabled?: boolean): ContainerBuilder;
    public abstract getHelpExplainMessageComponent(language: Locale): ContainerBuilder;
    public abstract getHelpFaqMessageComponent(language: Locale): ContainerBuilder;
    public abstract getSettingsHeaderMessageComponent(language: Locale, isEnabled: boolean): ContainerBuilder;
    public abstract getSettingsBodyMessageComponent(
        language: Locale,
        frequency: number,
        useAvatarsInMemes: boolean,
    ): ContainerBuilder;
    public abstract getSettingsFooterMessageComponent(language: Locale): ContainerBuilder;
    public abstract getDeleteDataButtonsComponent(language: Locale): ActionRowBuilder<ButtonBuilder>;
    public abstract getDeleteDataConfirmationMessageComponent(language: Locale): ContainerBuilder;
    public abstract getDeleteDataSuccessMessageComponent(language: Locale): ContainerBuilder;
    public abstract getUnknownTemplateMessageComponent(language: Locale, interactionId: string): ContainerBuilder;
    public abstract getWrongFileFormatMessageComponent(
        language: Locale,
        interactionId: string,
        file: string,
    ): ContainerBuilder;
    public abstract getFeedbackMessageComponent(userId: string, message: string): ContainerBuilder;
    public abstract getFeedbackMessageSubmitComponent(language: Locale, message: string): ContainerBuilder;
}
