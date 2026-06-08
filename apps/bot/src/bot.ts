import { Client, GatewayIntentBits } from "discord.js";
import { config } from "dotenv";
import { Env } from "@jstmemit/shared/schemas/Env";

config({ path: "../../.env" });
export const env = Env.parse(process.env);

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
