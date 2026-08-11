import { client } from "#/bot.ts";
import type { ApplicationCommand, Collection } from "discord.js";
import type { ICommandsService } from "#/interfaces/ICommandsService.ts";

export class CommandsService implements ICommandsService {
    private _mentions: Record<string, string> = {};

    public constructor() {
        void this._fetchCommandMentions();
    }

    private async _fetchCommandMentions(): Promise<void> {
        const commands: Collection<string, ApplicationCommand> | undefined =
            await client?.application?.commands.fetch();

        if (!commands) {
            return;
        }

        this._mentions = Object.fromEntries(
            commands.map((command: ApplicationCommand): [string, string] => [
                command.name,
                `</${command.name}:${command.id}>`,
            ]),
        );
    }

    public getCommandMention(name: string): string | undefined {
        return this._mentions[name];
    }
}
