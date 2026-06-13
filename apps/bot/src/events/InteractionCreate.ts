import { client } from "../bot.ts";
import { Events } from "discord.js";
import { EventsController } from "../controllers/EventsController.ts";

const eventsController: EventsController = new EventsController();

client.on(Events.InteractionCreate, (interaction): void => {
  eventsController.handleInteractionCreate(interaction).catch((error) => {
    console.error(error);
  });
});
