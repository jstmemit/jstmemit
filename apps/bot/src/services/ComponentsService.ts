import type { Locale, MessageActionRowComponentBuilder } from "discord.js";
import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ContainerBuilder,
    SectionBuilder,
    SelectMenuOptionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    StringSelectMenuBuilder,
    TextDisplayBuilder,
    ThumbnailBuilder,
} from "discord.js";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { emojis } from "#/data/emojis.ts";
import type { Frequency } from "#/models/Frequency.ts";
import { t } from "@jstmemit/i18n";

export class ComponentsService implements IComponentsService {
    /**
     * Returns back a message component for /enable command with a progress bar
     * showing passed messages amount in the channel
     *
     * @param language
     * @param isEnabled
     * @param messagesAmount
     *
     * @author Kyrylo Maliuha
     */
    public getEnableMessageComponent(
        language: Locale,
        isEnabled: boolean,
        messagesAmount: number = 0,
    ): ContainerBuilder {
        const progressBar: string = this._createProgressBar(messagesAmount, 30, 10);

        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `# ${isEnabled ? t("enable.heading.enabled", language) : t("enable.heading.disabled", language)}`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    isEnabled
                        ? t("enable.body.enabled", language)
                        : messagesAmount >= 30
                          ? t("enable.body.disabled.ready", language, { messagesAmount: String(messagesAmount) })
                          : t("enable.body.disabled.notReady", language),
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    messagesAmount < 30
                        ? t("enable.memory.progress", language, { messagesAmount: String(messagesAmount) })
                        : t("enable.memory.full", language, { messagesAmount: String(messagesAmount) }),
                ),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`${progressBar}`));
    }

    /**
     * Returns back a row with enable/disable and open settings buttons
     *
     * @param language
     * @param isEnabled
     *
     * @author Kyrylo Maliuha
     */
    public getEnableButtonsComponent(language: Locale, isEnabled: boolean): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(isEnabled ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setLabel(
                        `${isEnabled ? t("enable.button.turnOff", language) : t("enable.button.turnOn", language)}`,
                    )
                    .setCustomId(`${isEnabled ? "disable" : "enable"}`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(t("enable.button.settings", language))
                    .setCustomId(`settings`),
            );
    }

    /**
     * Returns back a message component for an unknown error
     *
     * @param language
     * @param interactionId
     *
     * @author Kyrylo Maliuha
     */
    public getErrorMessageComponent(language: Locale, interactionId: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# ${t("error.heading", language)}`))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("error.body", language)))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("error.id", language, { interactionId })));
    }

    /**
     * Returns back a message component for a "not enough context" error
     *
     * @param language
     * @param interactionId
     *
     * @author Kyrylo Maliuha
     */
    public getNotEnoughContextMessageComponent(language: Locale, interactionId: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("notEnoughContext.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("notEnoughContext.body", language)))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("error.id", language, { interactionId })));
    }

    /**
     * Returns back a message component for the "unknown template" error
     *
     * @param language
     * @param interactionId
     *
     * @author Kyrylo Maliuha
     */
    public getUnknownTemplateMessageComponent(language: Locale, interactionId: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("unknownTemplate.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("unknownTemplate.body", language)))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("error.id", language, { interactionId })));
    }

    /**
     * Returns back a message component for the "wrong file format" error
     *
     * @param language
     * @param interactionId
     * @param file
     *
     * @author Kyrylo Maliuha
     */
    public getWrongFileFormatMessageComponent(language: Locale, interactionId: string, file: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("wrongFileFormat.heading", language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(t("wrongFileFormat.body", language, { file })),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("error.id", language, { interactionId })));
    }

    /**
     * Returns back a message component for a "missing permissions" user error (when a user
     * without permissions tries to change bot settings)
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getMissingPermissionsMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("missingPermissions.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("missingPermissions.body", language)));
    }

    /**
     * Returns back a message component for a "missing permissions" bot error (when bot is triggered
     * in the channel, but he doesn't have enough permissions to respond)
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getMissingBotPermissionsMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("missingBotPermissions.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("missingBotPermissions.body", language)));
    }

    /**
     * Returns back a message component for confirming deleting all data
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataConfirmationMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("deleteData.confirm.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("deleteData.confirm.body", language)));
    }

    /**
     * Returns back a message component that is sent after data deletion is done
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataSuccessMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("deleteData.success.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("deleteData.success.body", language)));
    }

    /**
     * Returns back a row with cancel and delete data buttons
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataButtonsComponent(language: Locale): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(t("deleteData.button.cancel", language))
                    .setCustomId(`settings`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Danger)
                    .setLabel(t("deleteData.button.delete", language))
                    .setCustomId(`delete-data`),
            );
    }

    /**
     * Returns back a message component for header of the /settings command.
     *
     * @param language
     * @param isEnabled
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsHeaderMessageComponent(language: Locale, isEnabled: boolean): ContainerBuilder {
        return new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL("https://files.wideunits.nl/jstmemit/images/logos/logo.png"),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`# ${t("settings.about.heading", language)}`),
                        new TextDisplayBuilder().setContent(
                            `${t("settings.about.body", language)} ${isEnabled ? `` : t("settings.about.enablePrompt", language)}`,
                        ),
                    ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addSectionComponents(
                new SectionBuilder()
                    .setButtonAccessory(
                        new ButtonBuilder()
                            .setStyle(isEnabled ? ButtonStyle.Secondary : ButtonStyle.Success)
                            .setLabel(
                                `${isEnabled ? t("settings.button.disable", language) : t("settings.button.enable", language)}`,
                            )
                            .setCustomId(`${isEnabled ? "disable" : "enable"}`),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            `${isEnabled ? t("settings.status.enabled", language) : t("settings.status.disabled", language)}`,
                        ),
                    ),
            );
    }

    /**
     * Returns back a message component for Header part of the /help command.
     *
     * @param language
     * @param isEnabled
     *
     * @author Kyrylo Maliuha
     */
    public getHelpHeaderMessageComponent(language: Locale, isEnabled?: boolean): ContainerBuilder {
        return new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL("https://files.wideunits.nl/jstmemit/images/logos/logo.png"),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`# ${t("help.about.heading", language)}`),
                        new TextDisplayBuilder().setContent(t("settings.about.body", language)),
                        new TextDisplayBuilder().setContent(t("help.about.commands", language)),
                    ),
            )
            .addActionRowComponents(
                new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
                    ...(isEnabled === undefined
                        ? []
                        : [
                              new ButtonBuilder()
                                  .setStyle(isEnabled ? ButtonStyle.Danger : ButtonStyle.Success)
                                  .setLabel(
                                      isEnabled
                                          ? t("settings.button.disable", language)
                                          : t("settings.button.enable", language),
                                  )
                                  .setCustomId(isEnabled ? "disable" : "enable"),
                          ]),
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel(t("help.button.addJstmemit", language))
                        .setURL("https://discord.com/oauth2/authorize?client_id=1375836467745783990"),

                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Link)
                        .setLabel(t("help.button.website", language))
                        .setURL("https://jstmemit.com"),
                ),
            );
    }

    /**
     * Returns back a message component for Explain part of the /help command.
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getHelpExplainMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`## ${t("help.autoMemes.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`${t("help.autoMemes.tldr", language)}`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("help.autoMemes.description", language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("help.autoMemes.algorithm", language)}`),
            );
    }

    /**
     * Returns back a message component for FAQ part of the /help command.
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getHelpFaqMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`## ${t("help.faq.heading", language)}`))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`${t("help.faq.description", language)}`))
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("help.faq.iAddedTheBotWhatNow.question", language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("help.faq.iAddedTheBotWhatNow.answer", language)}`),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `### ${t("help.faq.canIHaveDifferentQuestionsForEveryChannel.question", language)}`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `${t("help.faq.canIHaveDifferentQuestionsForEveryChannel.answer", language)}`,
                ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("help.faq.isThereALimit.question", language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("help.faq.isThereALimit.answer", language)}`),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("help.faq.canIDeleteStoredData.question", language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("help.faq.canIDeleteStoredData.answer", language)}`),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("help.faq.addBotToMyApps.question", language)}`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("help.faq.addBotToMyApps.answer", language)}`),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `### ${t("help.faq.whatIfIWantToMakeACustomMeme.question", language)}`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${t("help.faq.whatIfIWantToMakeACustomMeme.answer", language)}`),
            );
    }

    /**
     * Returns back a message component for body of the /settings command.
     *
     * @param language
     * @param frequency
     * @param useAvatarsInMemes
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsBodyMessageComponent(
        language: Locale,
        frequency: number,
        useAvatarsInMemes: boolean,
    ): ContainerBuilder {
        const frequencies: Frequency[] = this._getFrequencyOptions(language);

        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# ${t("settings.meme.heading", language)}`))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.meme.body", language)))
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("settings.frequency.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.frequency.body", language)))
            .addActionRowComponents(
                new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
                    new StringSelectMenuBuilder().setCustomId("frequency").addOptions(
                        frequencies.map((option: Frequency) =>
                            new SelectMenuOptionBuilder()
                                .setLabel(option.label)
                                .setValue(option.value)
                                .setDefault(frequency === Number(option.value))
                                .setEmoji({ name: option.emoji })
                                .setDescription(option.description),
                        ),
                    ),
                ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("settings.avatars.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.avatars.body", language)))
            .addActionRowComponents(
                new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("avatar")
                        .addOptions(
                            new SelectMenuOptionBuilder()
                                .setLabel(t("settings.avatars.yes.label", language))
                                .setValue("true")
                                .setDefault(useAvatarsInMemes)
                                .setEmoji({ name: "✅" })
                                .setDescription(t("settings.avatars.yes.description", language)),
                            new SelectMenuOptionBuilder()
                                .setLabel(t("settings.avatars.no.label", language))
                                .setValue("false")
                                .setDefault(!useAvatarsInMemes)
                                .setEmoji({ name: "❌" })
                                .setDescription(t("settings.avatars.no.description", language)),
                        ),
                ),
            );
    }

    /**
     * Returns back a message component for footer of the /settings command.
     *
     * @param language
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsFooterMessageComponent(language: Locale): ContainerBuilder {
        return new ContainerBuilder().addSectionComponents(
            new SectionBuilder()
                .setButtonAccessory(
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Danger)
                        .setLabel(t("settings.footer.deleteButton", language))
                        .setCustomId(`open-delete-data-confirmation`),
                )
                .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("settings.footer.body", language))),
        );
    }

    /**
     * Returns back a message component for received feedback messages
     *
     * @param userId
     * @param message
     *
     * @author Kyrylo Maliuha
     */
    public getFeedbackMessageComponent(userId: string, message: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# 💬 New feedback message`))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`**Message:** ${message}`))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`**Author ID:** ${userId} | <@${userId}>`));
    }

    /**
     * Returns back a message component for submitting a feedback message
     *
     * @param language
     * @param message
     *
     * @author Kyrylo Maliuha
     */
    public getFeedbackMessageSubmitComponent(language: Locale, message: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`# ${t("feedback.submit.heading", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(t("feedback.submit.body", language)))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### ${t("feedback.submit.yourMessage", language)}`),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(message));
    }

    /**
     * Makes a progress bar with emojis
     *
     * @param value
     * @param max
     * @param segments
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _createProgressBar(value: number, max: number, segments: number): string {
        const clamped: number = Math.max(0, Math.min(value, max));

        const percentage: number = clamped / max;

        const filled: number = Math.floor(percentage * segments);

        let progressBar: string = "";

        for (let i: number = 0; i < segments; i++) {
            if (i < filled) {
                if (i === 0) {
                    progressBar += emojis.fill1;
                } else if (i === segments - 1 || i === filled - 1) {
                    progressBar += emojis.fill3;
                } else {
                    progressBar += emojis.fill2;
                }
            } else {
                if (i === 0) {
                    progressBar += emojis.empty1;
                } else if (i === segments - 1) {
                    progressBar += emojis.empty3;
                } else {
                    progressBar += emojis.empty2;
                }
            }
        }

        return progressBar;
    }

    /**
     * Returns an array of meme frequency options
     *
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _getFrequencyOptions(language: Locale): Frequency[] {
        return [
            {
                label: t("settings.frequency.never.label", language),
                value: "0",
                description: t("settings.frequency.never.description", language),
                emoji: "⬛",
            },
            {
                label: t("settings.frequency.rarely.label", language),
                value: "100",
                description: t("settings.frequency.rarely.description", language),
                emoji: "🟥",
            },
            {
                label: t("settings.frequency.sometimes.label", language),
                value: "50",
                description: t("settings.frequency.sometimes.description", language),
                emoji: "🟧",
            },
            {
                label: t("settings.frequency.often.label", language),
                value: "20",
                description: t("settings.frequency.often.description", language),
                emoji: "🟨",
            },
            {
                label: t("settings.frequency.veryOften.label", language),
                value: "10",
                description: t("settings.frequency.veryOften.description", language),
                emoji: "🟩",
            },
        ];
    }
}
