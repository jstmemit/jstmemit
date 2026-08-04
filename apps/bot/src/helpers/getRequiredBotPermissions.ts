import type { PermissionsBitField } from "discord.js";
import { Message, PermissionFlagsBits, type Interaction } from "discord.js";
import type { RequiredBotPermissions } from "@jstmemit/shared/models/RequiredBotPermissions";

export const resolveBotPermissions = (interaction: Message | Interaction): PermissionsBitField | null => {
    if (interaction instanceof Message) {
        return interaction.guild?.members?.me?.permissionsIn(interaction.channelId) ?? null;
    }

    return interaction.appPermissions ?? null;
};

export const getRequiredBotPermissions = (interaction: Message | Interaction): RequiredBotPermissions => {
    const permissions: PermissionsBitField | null = resolveBotPermissions(interaction);

    if (!permissions) {
        return { sendMessages: false, attachFiles: false, embedLinks: false, readHistory: false, viewChannel: false };
    }

    return {
        sendMessages: permissions.has(PermissionFlagsBits.SendMessages),
        attachFiles: permissions.has(PermissionFlagsBits.AttachFiles),
        embedLinks: permissions.has(PermissionFlagsBits.EmbedLinks),
        readHistory: permissions.has(PermissionFlagsBits.ReadMessageHistory),
        viewChannel: permissions.has(PermissionFlagsBits.ViewChannel),
    };
};
