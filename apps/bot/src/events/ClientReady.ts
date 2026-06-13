import { Events } from "discord.js";
import { client } from "../bot.ts";
import { EventsController } from "../controllers/EventsController.ts";

const eventsController: EventsController = new EventsController();

client.on(Events.ClientReady, (readyClient): void => {
  eventsController.handleClientReady(readyClient);
});
