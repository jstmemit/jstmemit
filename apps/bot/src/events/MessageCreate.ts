import { client } from "#/bot.ts";
import { Events } from "discord.js";
import { eventsController } from "#/container.ts";

client.on(Events.MessageCreate, (message): void => {
  eventsController.handleMessageCreate(message).catch((error) => {
    console.error(error);
  });
});
