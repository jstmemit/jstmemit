import type { Message } from "discord.js";
import {
    type ButtonInteraction,
    type ChatInputCommandInteraction,
    type MessageContextMenuCommandInteraction,
    type ModalSubmitInteraction,
    type UserContextMenuCommandInteraction,
} from "discord.js";

export abstract class IPermissionsService {
    public abstract getAppPermissionsBitfield(
        interaction:
            | ChatInputCommandInteraction
            | ButtonInteraction
            | Message
            | ModalSubmitInteraction
            | MessageContextMenuCommandInteraction
            | UserContextMenuCommandInteraction,
    ): string | undefined;
}
