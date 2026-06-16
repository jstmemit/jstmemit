import { eventsController } from "#/container.ts";
import { client } from "#/bot.ts";
import { Events, type Guild } from "discord.js";

client.on(Events.GuildCreate, (guild: Guild) =>
    eventsController.handleGuildCreate(guild),
);
