import { REST, Routes } from "discord.js";
import { config } from "dotenv";
import { commands } from "./commands.ts";
import { Env } from "@jstmemit/shared/schemas/Env";

config({ path: "../../.env" });

const env = Env.parse(process.env);

const rest: REST = new REST({ version: "10" }).setToken(env.DISCORD_TOKEN);

try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands(env.DISCORD_CLIENT_ID), {
    body: commands,
  });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}
