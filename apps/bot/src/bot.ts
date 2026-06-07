import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import { Env } from "@jstmemit/shared/schemas/Env";
import type { IContextController } from "./interfaces/IContextController.ts";
import { ContextController } from "./controllers/ContextController.ts";
import type { IContextService } from "./interfaces/IContextService.ts";
import { ContextService } from "./services/ContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import { MessagesRepository } from "@jstmemit/db/repositories/MessagesRepository";

config({ path: "../../.env" });

const messagesRepository: IMessagesRepository = new MessagesRepository();
const contextService: IContextService = new ContextService(messagesRepository);
const contextController: IContextController = new ContextController(
  contextService,
);

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const env = Env.parse(process.env);

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.MessageCreate, async (message): Promise<void> => {
  if (message.author.bot) return;

  await contextController.handleNewMessage(message);
});

await client.login(env.DISCORD_TOKEN);
