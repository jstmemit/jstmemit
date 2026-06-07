import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import { Env } from "@jstmemit/shared/schemas/Env";

config({ path: "../../.env" });

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const env = Env.parse(process.env);

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});

client.on(Events.InteractionCreate, async (interaction): Promise<void> => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

client.login(env.DISCORD_TOKEN);
