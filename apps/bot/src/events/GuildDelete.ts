import { client } from "#/bot.ts";
import type { Guild } from "discord.js";
import { Events } from "discord.js";
import { eventsController } from "#/container.ts";

client.on(Events.GuildDelete, (guild: Guild): void => {
    eventsController.handleGuildDelete(guild);
});
