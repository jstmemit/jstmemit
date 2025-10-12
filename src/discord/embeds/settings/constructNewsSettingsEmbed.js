// noinspection JSCheckFunctionSignatures

import {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    ChannelSelectMenuBuilder,
    ContainerBuilder,
    SectionBuilder,
    SeparatorBuilder,
    SeparatorSpacingSize,
    TextDisplayBuilder
} from 'discord.js';
import {t} from "#src/discord/i18n/utils.js";
import {settings} from "#config/settings.js";

export const constructNewsSettingsEmbed = (currentSettings, channelId, buttons) => {

    const language = currentSettings?.language || "english";
    let anyChannelLinked = false;

    if (currentSettings?.newsChannel) {
        anyChannelLinked = true;
    }

    let container = new ContainerBuilder()
        .addTextDisplayComponents(
            new TextDisplayBuilder().setContent(`# ${settings?.emojis?.settings?.news?.name}  ${(t("settingsNewsTitle", language))}`),
        )
        .addTextDisplayComponents(
            new TextDisplayBuilder().setContent(t("settingsNewsDescription", language)),
        )
        .addSeparatorComponents(
            new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Large).setDivider(true),
        )

    if (!anyChannelLinked) {
        container = container.addActionRowComponents(
            new ActionRowBuilder()
                .addComponents(
                    new ChannelSelectMenuBuilder()
                        .setCustomId(`select-newschannel`)
                        .setPlaceholder(t("premiumSelectChannelPlaceholder", language))
                        .setChannelTypes([0, 5])
                )
        );
    } else {

        container = container.addSectionComponents(
            new SectionBuilder()
                .setButtonAccessory(
                    new ButtonBuilder()
                        .setStyle(ButtonStyle.Danger)
                        .setLabel(`${t("settingsNewsUnlinkChannelButton", language)}`)
                        .setCustomId(`unlinknews-${channelId}`)
                )
                .addTextDisplayComponents(
                    new TextDisplayBuilder().setContent(t("settingsNewsChannelLinked", language)),
                ),
        );
    }

    return [
        container,
        buttons
    ]
};