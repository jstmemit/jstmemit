import { client } from "../bot.ts";
import { Events } from "discord.js";
import { EventsController } from "../controllers/EventsController.ts";

const eventsController: EventsController = new EventsController();

client.on(Events.MessageCreate, (message): void => {
  eventsController.handleMessageCreate(message).catch((error) => {
    console.error(error);
  });
});
