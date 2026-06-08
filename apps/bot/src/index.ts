import { client, env } from "./bot.ts";

import "./events/ClientReady.ts";
import "./events/InteractionCreate.ts";
import "./events/MessageCreate.ts";

await client.login(env.DISCORD_TOKEN);
