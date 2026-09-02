import type { Template } from "@jstmemit/shared/models/Template";
import type { MessageContextMenuCommandInteraction, UserContextMenuCommandInteraction } from "discord.js";

export abstract class IContextMenusService {
    public abstract getContextMenuTexts(
        template: Template,
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
    ): Promise<Record<string, string>>;

    public abstract getContextMenuImage(
        template: Template,
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
    ): Record<string, string>;
}
