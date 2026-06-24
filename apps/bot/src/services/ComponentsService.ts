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

export class ComponentsService implements IComponentsService {
    /**
     * Returns back a message component for /enable command with a progress bar
     * showing passed messages amount in the channel
     *
     * @param isEnabled
     * @param messagesAmount
     *
     * @author Kyrylo Maliuha
     */
    public getEnableMessageComponent(isEnabled: boolean, messagesAmount: number): ContainerBuilder {
        const progressBar: string = this._createProgressBar(messagesAmount, 30, 10);

        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `# ${isEnabled ? `🎉 Bot is ready!` : `🔴 Jstmemit is off in this channel`}`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    isEnabled
                        ? `Jstmemit is now active and will generate memes during chats here. Quality improves as it picks up on your channel, with much better results once it has around **~30 messages** in memory.`
                        : messagesAmount >= 30
                          ? `You already have over **${messagesAmount} messages** in memory, so Jstmemit is ready to make memes. Just turn the bot back on and it'll start generating them during active chats.`
                          : `Bot can't make memes here until you enable it for this channel. Turn it on and it will start generating memes during active chats.`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    messagesAmount < 30
                        ? `Messages in memory: **${messagesAmount}/30**`
                        : `Messages in memory: **${messagesAmount}**`,
                ),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`${progressBar}`));
    }

    /**
     * Returns back a row with enable/disable and open settings buttons
     *
     * @param isEnabled
     *
     * @author Kyrylo Maliuha
     */
    public getEnableButtonsComponent(isEnabled: boolean): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(isEnabled ? ButtonStyle.Danger : ButtonStyle.Success)
                    .setLabel(`${isEnabled ? `Turn off` : `Turn on`}`)
                    .setCustomId(`${isEnabled ? "disable" : "enable"}`),
            )
            .addComponents(
                new ButtonBuilder()
                    .setStyle(ButtonStyle.Secondary)
                    .setLabel(`⚙️ Open settings`)
                    .setCustomId(`settings`),
            );
    }

    /**
     * Returns back a message component for an unknown error
     *
     * @param interactionId
     *
     * @author Kyrylo Maliuha
     */
    public getErrorMessageComponent(interactionId: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# 🔴 Something went wrong!`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `Bot failed to answer your request because of an unknown error. Please try again and if this happens often, contact support.`,
                ),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`**Error ID:** ${interactionId}`));
    }

    /**
     * Returns back a message component for a "not enough context" error
     *
     * @param interactionId
     *
     * @author Kyrylo Maliuha
     */
    public getNotEnoughContextMessageComponent(interactionId: string): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# 🤔 Not enough context yet`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `Jstmemit needs more time to learn about your channel before it can make a meme. Try to chat a bit more and send a couple of GIFs. If this error persists, please contact support.`,
                ),
            )
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`**Error ID:** ${interactionId}`));
    }

    /**
     * Returns back a message component for confirming deleting all data
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataConfirmationMessageComponent(): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# 🗑️ Delete all data for this channel?`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    "This permanently deletes all saved messages and image links for this channel from Jstmemit and can't be undone. The bot stays enabled and will start learning again from new messages. If you wish to stop it entirely afterwards, turn it off with `/enable`.",
                ),
            );
    }

    /**
     * Returns back a message component that is sent after data deletion is done
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataSuccessMessageComponent(): ContainerBuilder {
        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# ✅ Data deleted!`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    "All saved messages and image links for this channel were deleted. The bot is still on and will start learning again from new messages. Turn it off with `/enable` if you wish to stop using it.",
                ),
            );
    }

    /**
     * Returns back a row with cancel and delete data buttons
     *
     * @author Kyrylo Maliuha
     */
    public getDeleteDataButtonsComponent(): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder().setStyle(ButtonStyle.Secondary).setLabel(`Cancel`).setCustomId(`settings`),
            )
            .addComponents(
                new ButtonBuilder().setStyle(ButtonStyle.Danger).setLabel(`Delete all data`).setCustomId(`delete-data`),
            );
    }

    /**
     * Returns back a message component for header of the /settings command.
     *
     * @param isEnabled
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsHeaderMessageComponent(isEnabled: boolean): ContainerBuilder {
        return new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL("https://files.wideunits.nl/jstmemit/images/logos/logo.png"),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`# ❓ About this bot`),
                        new TextDisplayBuilder().setContent(
                            `A discord bot that generates memes based on whatever's going on in the channel. Talk about a boss raid, then get memes about that. ${isEnabled ? `` : `Enable Jstmemit below to start!`}`,
                        ),
                    ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addSectionComponents(
                new SectionBuilder()
                    .setButtonAccessory(
                        new ButtonBuilder()
                            .setStyle(isEnabled ? ButtonStyle.Secondary : ButtonStyle.Success)
                            .setLabel(`${isEnabled ? `Disable` : `Enable`}`)
                            .setCustomId(`${isEnabled ? "disable" : "enable"}`),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            `${isEnabled ? "**✅ Jstmemit is turned on in this channel!**" : "**⚠️ Jstmemit needs to be enabled to make memes here!**"}`,
                        ),
                    ),
            );
    }

    /**
     * Returns back a message component for body of the /settings command.
     *
     * @param frequency
     * @param useAvatarsInMemes
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsBodyMessageComponent(frequency: number, useAvatarsInMemes: boolean): ContainerBuilder {
        const frequencies: Frequency[] = this._getFrequencyOptions();

        return new ContainerBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`# 💬 Meme settings`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    "You can control how often the bot is going to send memes and what's on them",
                ),
            )
            .addSeparatorComponents(new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true))
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`### Frequency`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `How often should the bot send a random meme in the chat without being asked to?`,
                ),
            )
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
            .addTextDisplayComponents(new TextDisplayBuilder().setContent(`### Avatars in memes`))
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`Include profile pictures in generated memes?`),
            )
            .addActionRowComponents(
                new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("avatar")
                        .addOptions(
                            new SelectMenuOptionBuilder()
                                .setLabel("Yes")
                                .setValue("true")
                                .setDefault(useAvatarsInMemes)
                                .setEmoji({ name: "✅" })
                                .setDescription("Bot will use avatars for memes (recommended)"),
                            new SelectMenuOptionBuilder()
                                .setLabel("No")
                                .setValue("false")
                                .setDefault(!useAvatarsInMemes)
                                .setEmoji({ name: "❌" })
                                .setDescription("Bot won't use avatars for memes"),
                        ),
                ),
            );
    }

    /**
     * Returns back a message component for footer of the /settings command.
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsFooterMessageComponent(): ContainerBuilder {
        return new ContainerBuilder().addSectionComponents(
            new SectionBuilder()
                .setButtonAccessory(
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Danger)
                        .setLabel(`Delete all data`)
                        .setCustomId(`open-delete-data-confirmation`),
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent("Want to remove all message data about this channel?"),
                ),
        );
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
    private _getFrequencyOptions(): Frequency[] {
        return [
            {
                label: "Never",
                value: "0",
                description: "Don't send memes, unless requested via a /meme command",
                emoji: "⬛",
            },
            {
                label: "Rarely",
                value: "100",
                description: "Once every ~100 messages",
                emoji: "🟥",
            },
            {
                label: "Sometimes",
                value: "50",
                description: "Once every ~50 message (for bigger servers)",
                emoji: "🟧",
            },
            {
                label: "Often",
                value: "20",
                description: "Once every ~20 messages (for smaller servers)",
                emoji: "🟨",
            },
            {
                label: "Very often",
                value: "10",
                description: "Once every ~10 messages (can produce spam)",
                emoji: "🟩",
            },
        ];
    }
}
