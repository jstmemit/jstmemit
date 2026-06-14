import { client } from "#/bot.ts";
import { Events } from "discord.js";
import { eventsController } from "#/container.ts";

client.on(Events.InteractionCreate, (interaction): void => {
    eventsController.handleInteractionCreate(interaction).catch((error) => {
        console.error(error);
    });
});
