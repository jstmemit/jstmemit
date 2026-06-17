import type {
    ChatInputCommandInteraction,
    StringSelectMenuInteraction,
} from "discord.js";
import {
    type BaseMessageOptions,
    type ButtonInteraction,
    MessageFlags,
} from "discord.js";

export const respond = async (
    interaction:
        | ButtonInteraction
        | ChatInputCommandInteraction
        | StringSelectMenuInteraction,
    components: BaseMessageOptions["components"],
): Promise<void> => {
    if (interaction.isChatInputCommand()) {
        await interaction.editReply({
            flags: MessageFlags.IsComponentsV2,
            components,
        });
    } else {
        await interaction.update({
            flags: MessageFlags.IsComponentsV2,
            components,
        });
    }
};
