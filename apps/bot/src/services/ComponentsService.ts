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
    public getEnableMessageComponent(
        isEnabled: boolean,
        messagesAmount: number,
    ): ContainerBuilder {
        const progressBar: string = this._createProgressBar(
            messagesAmount,
            30,
            10,
        );

        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `# ${isEnabled ? `🎉 Bot is ready!` : `🔴 Training is **disabled** in this channel!`}`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    isEnabled
                        ? `Setup is finished! Bot is training on new messages and will generate memes during active chatting moments. Quality of text inside memes will improve as soon as bot has ~30 messages in its memory.`
                        : `Bot is disabled in this channel! To respect your privacy, Jstmemit needs to be enabled before it can start learning from messages here.`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    messagesAmount < 30
                        ? `Messages in memory: **${messagesAmount}/30**`
                        : `Messages in memory: **${messagesAmount}**`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`${progressBar}`),
            );
    }

    /**
     * Returns back a row with enable/disable and open settings buttons
     *
     * @param isEnabled
     *
     * @author Kyrylo Maliuha
     */
    public getEnableButtonsComponent(
        isEnabled: boolean,
    ): ActionRowBuilder<ButtonBuilder> {
        return new ActionRowBuilder<ButtonBuilder>()
            .addComponents(
                new ButtonBuilder()
                    .setStyle(
                        isEnabled ? ButtonStyle.Danger : ButtonStyle.Success,
                    )
                    .setLabel(
                        `${isEnabled ? `Disable training` : `Enable training`}`,
                    )
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
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `# 🔴 Something went wrong!`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `Bot failed to answer your request because of an unknown error. Please try again and if this happens often, contact support.`,
                ),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `**Error ID:** ${interactionId}`,
                ),
            );
    }

    /**
     * Returns back a message component for header of the /settings command.
     *
     * @param isEnabled
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsHeaderMessageComponent(
        isEnabled: boolean,
    ): ContainerBuilder {
        return new ContainerBuilder()
            .addSectionComponents(
                new SectionBuilder()
                    .setThumbnailAccessory(
                        new ThumbnailBuilder().setURL(
                            "https://files.wideunits.nl/jstmemit/images/logos/logo.png",
                        ),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            `# ⚙️ Bot settings`,
                        ),
                        new TextDisplayBuilder().setContent(
                            "This is your control panel for the bot. Here you can customize how the bot behaves in this channel.",
                        ),
                    ),
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
                    .setSpacing(SeparatorSpacingSize.Large)
                    .setDivider(true),
            )
            .addSectionComponents(
                new SectionBuilder()
                    .setButtonAccessory(
                        new ButtonBuilder()
                            .setStyle(
                                isEnabled
                                    ? ButtonStyle.Danger
                                    : ButtonStyle.Success,
                            )
                            .setLabel(
                                `${isEnabled ? `Disable training` : `Enable training`}`,
                            )
                            .setCustomId(`${isEnabled ? "disable" : "enable"}`),
                    )
                    .addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                            `${isEnabled ? "**🎉 Bot is ready and collecting context in this channel!**" : "🔴 Context training is **disabled** in this channel!"}`,
                        ),
                    ),
            );
    }

    /**
     * Returns back a message component for body of the /settings command.
     *
     * @param frequency
     *
     * @author Kyrylo Maliuha
     */
    public getSettingsBodyMessageComponent(
        frequency: number,
    ): ContainerBuilder {
        const frequencies: Frequency[] = this._getFrequencyOptions();

        return new ContainerBuilder()
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`## 💬 Meme settings`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    "You can control how often bot is going to send memes and what's on them",
                ),
            )
            .addSeparatorComponents(
                new SeparatorBuilder()
                    .setSpacing(SeparatorSpacingSize.Large)
                    .setDivider(true),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(`### Frequency`),
            )
            .addTextDisplayComponents(
                new TextDisplayBuilder().setContent(
                    `How often should the bot send a random meme in the chat without being asked to?`,
                ),
            )
            .addActionRowComponents(
                new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId("select-frequency")
                        .addOptions(
                            frequencies.map((option: Frequency) =>
                                new SelectMenuOptionBuilder()
                                    .setLabel(option.label)
                                    .setValue(option.value)
                                    .setDefault(
                                        frequency === Number(option.value),
                                    )
                                    .setEmoji({ name: option.emoji })
                                    .setDescription(option.description),
                            ),
                        ),
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
    private _createProgressBar(
        value: number,
        max: number,
        segments: number,
    ): string {
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

    private _getFrequencyOptions(): Frequency[] {
        return [
            {
                label: "Never",
                value: "0",
                description:
                    "Don't send memes, unless requested via a /meme command",
                emoji: "⬛",
            },
            {
                label: "Hardly ever",
                value: "100",
                description: "Once every ~100 messages",
                emoji: "🟥",
            },
            {
                label: "Rarely",
                value: "50",
                description: "Once every ~50 message",
                emoji: "🟧",
            },
            {
                label: "Sometimes",
                value: "20",
                description: "Once every ~20 messages (recommended)",
                emoji: "🟨",
            },
            {
                label: "Often",
                value: "10",
                description: "Once every ~10 messages",
                emoji: "🟩",
            },
        ];
    }
}
