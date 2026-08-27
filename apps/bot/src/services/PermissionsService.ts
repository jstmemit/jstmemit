import {
    type ButtonInteraction,
    type ChatInputCommandInteraction,
    Message,
    type MessageContextMenuCommandInteraction,
    type ModalSubmitInteraction,
    type UserContextMenuCommandInteraction,
} from "discord.js";
import type { IPermissionsService } from "#/interfaces/IPermissionsService.ts";

export class PermissionsService implements IPermissionsService {
    public getAppPermissionsBitfield(
        interaction:
            | ChatInputCommandInteraction
            | ButtonInteraction
            | Message
            | ModalSubmitInteraction
            | MessageContextMenuCommandInteraction
            | UserContextMenuCommandInteraction,
    ): string | undefined {
        return interaction instanceof Message
            ? interaction.guild?.members.me?.permissionsIn(interaction.channelId).bitfield.toString()
            : interaction.appPermissions?.bitfield.toString();
    }
}
