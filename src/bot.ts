import {
  Client, Events, GatewayIntentBits, type Interaction,
} from 'discord.js';
import { clientReady } from './events/clientReady.js';
import { interactionCreate } from './events/interactionCreate.js';

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on(Events.ClientReady, async (readyClient: Client<true>): Promise<void> => clientReady(readyClient));
client.on(Events.InteractionCreate, async (interaction: Interaction): Promise<void> => interactionCreate(interaction));

client?.login(process.env.DISCORD_BOT_TOKEN!);
