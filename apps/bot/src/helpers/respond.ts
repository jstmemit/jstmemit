import { Message } from "discord.js";
import { type ChatInputCommandInteraction, type StringSelectMenuInteraction } from "discord.js";
import { type BaseMessageOptions, type ButtonInteraction, MessageFlags } from "discord.js";

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
    interaction: ButtonInteraction | ChatInputCommandInteraction | StringSelectMenuInteraction | Message,
    components: BaseMessageOptions["components"],
): Promise<void> => {
    try {
        if (interaction instanceof Message) {
            await interaction.reply({
                flags: MessageFlags.IsComponentsV2,
                components,
            });

            return;
        }

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
    } catch {
        if (!(interaction instanceof Message)) {
            await interaction.editReply({
                flags: MessageFlags.IsComponentsV2,
                components,
            });
        }
    }
};
