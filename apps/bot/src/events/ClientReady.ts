import { Events } from "discord.js";
import { client } from "../bot.ts";
import { eventsController } from "../container.ts";

client.on(Events.ClientReady, (readyClient): void => {
  eventsController.handleClientReady(readyClient);
});
