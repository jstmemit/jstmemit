import { type Client, REST, Routes } from 'discord.js';
import { commands } from '../config/commands.js';

export const clientReady = async (client: Client) => {
  const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_BOT_TOKEN!);

  try {
    console.log(`Logged in as ${client.user?.tag}!`);
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID!), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
};
