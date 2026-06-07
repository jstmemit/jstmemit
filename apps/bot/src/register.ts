import { REST, Routes } from "discord.js";
import { config } from "dotenv";
import { z } from "zod";
import { commands } from "./commands.ts";

config({ path: "../../.env" });

const env = z
  .object({
    DISCORD_TOKEN: z.string().min(1),
    DISCORD_CLIENT_ID: z.string().min(1),
  })
  .parse(process.env);

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
