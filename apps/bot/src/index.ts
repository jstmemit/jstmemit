import { client } from "#/bot.ts";
import { Env } from "@jstmemit/shared/schemas/Env";

import "#/events/ClientReady.ts";
import "#/events/InteractionCreate.ts";
import "#/events/MessageCreate.ts";

const env = Env.parse(process.env);

await client.login(env.DISCORD_TOKEN);
