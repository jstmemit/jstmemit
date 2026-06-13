import { client } from "../bot.ts";
import { Events } from "discord.js";
import type { IMemesController } from "../interfaces/IMemesController.ts";
import { MemesController } from "../controllers/MemesController.ts";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import { createMemeGenerationQueue } from "@jstmemit/queue/jobs/memeGeneration";
import { createRedisConnection } from "@jstmemit/queue/connection";
import { QueueEvents } from "bullmq";
import { type Queue } from "bullmq";
import { type ConnectionOptions } from "bullmq";
import { Env } from "@jstmemit/shared/schemas/Env";
import type { z } from "zod";

const env: z.infer<typeof Env> = Env.parse(process.env);

const redisConnection: ConnectionOptions = createRedisConnection(
  env.REDIS_HOST,
  env.REDIS_PORT,
);
const memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult> =
  createMemeGenerationQueue(redisConnection);
const memeGenerationQueueEvents: QueueEvents = new QueueEvents(
  "meme-generation",
  {
    connection: redisConnection,
  },
);

const memesController: IMemesController = new MemesController(
  memeGenerationQueue,
  memeGenerationQueueEvents,
);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
client.on(Events.InteractionCreate, async (interaction): Promise<void> => {
  // chat commands
  if (interaction.isChatInputCommand()) {
    switch (interaction.commandName) {
      case "meme":
        await memesController.handleMemeInteraction(interaction);
        break;
    }
  }
});
