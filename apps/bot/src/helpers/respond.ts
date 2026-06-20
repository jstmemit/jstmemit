import type {
    ChatInputCommandInteraction,
    StringSelectMenuInteraction,
} from "discord.js";
import {
    type BaseMessageOptions,
    type ButtonInteraction,
    MessageFlags,
} from "discord.js";

/**
 * Sends a new message by modifying the deferred interaction if
 * passed interaction is a slash command or updates an existing
 * message if it's a button or select menu
 *
 * @param interaction
 * @param components
 *
 * @remarks .editReply() would make a new message in button or
 * select menu interactions and .update() doesn't exist for
 * slash commands
 *
 * @author Kyrylo Maliuha
 */
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
