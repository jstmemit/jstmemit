import { client } from "#/bot.ts";
import type { Guild } from "discord.js";
import { Events } from "discord.js";
import { eventsController } from "#/container.ts";

client.on(Events.GuildCreate, (guild: Guild): void => {
    eventsController.handleGuildCreate(guild).catch((error): void => {
        console.error(error);
    });
});
