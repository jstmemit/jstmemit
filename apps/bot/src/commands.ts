import { client } from "./bot.ts";
import { Events } from "discord.js";

client.on(Events.InteractionCreate, async (interaction): Promise<void> => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});
