import { Message, type ModalSubmitInteraction } from "discord.js";
import { type ChatInputCommandInteraction, type StringSelectMenuInteraction } from "discord.js";
import { type BaseMessageOptions, type ButtonInteraction, MessageFlags } from "discord.js";

/**
 * Sends a new message by modifying the deferred interaction if
 * passed interaction is a slash command or updates an existing
 * message if it's a button or select menu
 *
 * @param interaction
 * @param components
 * @param ephemeral
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
        | StringSelectMenuInteraction
        | Message
        | ModalSubmitInteraction,
    components: BaseMessageOptions["components"],
    ephemeral: boolean = false,
): Promise<void> => {
    const flags: (MessageFlags.IsComponentsV2 | MessageFlags.Ephemeral)[] = [MessageFlags.IsComponentsV2];

    if (ephemeral) {
        flags.push(MessageFlags.Ephemeral);
    }

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
        } else if (!interaction.isModalSubmit()) {
            await interaction.update({
                flags: MessageFlags.IsComponentsV2,
                components,
            });
        }
    } catch {
        if (!(interaction instanceof Message)) {
            if (interaction.isChatInputCommand()) {
                await interaction.reply({
                    flags,
                    components,
                });
            } else {
                await interaction.editReply({
                    flags: MessageFlags.IsComponentsV2,
                    components,
                });
            }
        }
    }
};
