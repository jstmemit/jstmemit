import { Events } from "discord.js";
import { client } from "../bot.ts";

client.on(Events.ClientReady, (readyClient) => {
    console.log(`Logged in as ${readyClient.user.tag}!`);
});
