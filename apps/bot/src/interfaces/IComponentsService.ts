import type { ActionRowBuilder, ButtonBuilder, ContainerBuilder, Locale } from "discord.js";
import type { RequiredBotPermissions } from "@jstmemit/shared/models/RequiredBotPermissions";
import type { Achievement } from "@jstmemit/shared/models/Achievement";

export abstract class IComponentsService {
    public abstract getEnableMessageComponent(
        language: Locale,
        isEnabled: boolean,
        permissions: RequiredBotPermissions,
        messagesAmount?: number,
    ): ContainerBuilder;
    public abstract getEnableButtonsComponent(
        language: Locale,
        isEnabled: boolean,
        count?: number,
        isFirstTime?: boolean,
    ): ActionRowBuilder<ButtonBuilder>;
    public abstract getErrorMessageComponent(language: Locale, interactionId: string): ContainerBuilder;
    public abstract getErrorButtonsComponent(
        language: Locale,
        retryInteraction: string,
    ): ActionRowBuilder<ButtonBuilder>;
    public abstract getNotEnoughContextMessageComponent(
        language: Locale,
        interactionId: string,
        messagesAmount: number,
    ): ContainerBuilder;
    public abstract getMissingPermissionsMessageComponent(language: Locale): ContainerBuilder;
    public abstract getMilestoneViewMessageComponent(
        language: Locale,
        channelId: string,
        count: number,
        milestones: Achievement[],
    ): ContainerBuilder;
    public abstract getMilestoneMessageComponent(
        language: Locale,
        count: number,
        channelId: string,
        achievement?: Achievement,
    ): ContainerBuilder;
    public abstract getMilestoneButtonsComponent(
        language: Locale,
        likes: number,
        dislikes: number,
        templates: number,
        voices: number,
    ): ActionRowBuilder<ButtonBuilder>;
    public abstract getMissingBotPermissionsMessageComponent(
        language: Locale,
        permissions: RequiredBotPermissions,
    ): ContainerBuilder;
    public abstract getHelpHeaderMessageComponent(language: Locale, isEnabled?: boolean): ContainerBuilder;
    public abstract getHelpAutoMemesMessageComponent(language: Locale): ContainerBuilder;
    public abstract getHelpRightClickMessageComponent(language: Locale): ContainerBuilder;
    public abstract getHelpFaqMessageComponent(language: Locale): ContainerBuilder;
    public abstract getHelpVoiceMessageComponent(language: Locale): ContainerBuilder;
    public abstract getSettingsHeaderMessageComponent(language: Locale, isEnabled: boolean): ContainerBuilder;
    public abstract getFaqButtonComponent(language: Locale): ActionRowBuilder<ButtonBuilder>;
    public abstract getHelpButtonComponent(language: Locale): ActionRowBuilder<ButtonBuilder>;
    public abstract getSettingsBodyMessageComponent(
        language: Locale,
        frequency: number,
        turbo: boolean,
        useAvatarsInMemes: boolean,
        milestones: boolean,
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
