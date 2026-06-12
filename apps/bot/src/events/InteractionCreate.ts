import { client } from "../bot.ts";
import { Events } from "discord.js";
import { createMemeGenerationQueue } from "@jstmemit/queue/jobs/memeGeneration";
import { createRedisConnection } from "@jstmemit/queue/connection";
import { type Job, QueueEvents } from "bullmq";
import { type Queue } from "bullmq";
import { type ConnectionOptions } from "bullmq";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import { Env } from "@jstmemit/shared/schemas/Env";

const env = Env.parse(process.env);

const redisConnection: ConnectionOptions = createRedisConnection(
  env.REDIS_HOST,
  env.REDIS_PORT,
);
const memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult> =
  createMemeGenerationQueue(redisConnection);
const memeGenerationQueueEvents = new QueueEvents("meme-generation", {
  connection: redisConnection,
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
client.on(Events.InteractionCreate, async (interaction): Promise<void> => {
  // chat commands
  if (interaction.isChatInputCommand()) {
    switch (interaction.commandName) {
      case "meme":
        await interaction.deferReply();

        const job: Job<MemeGenerationJob, MemeGenerationResult> =
          await memeGenerationQueue.add("meme-generation", {
            channelId: interaction.channelId,
          });

        try {
          const jobResult: MemeGenerationResult = await job.waitUntilFinished(
            memeGenerationQueueEvents,
            60_000,
          );
          await interaction.editReply({
            files: [
              {
                attachment: Buffer.from(jobResult.png, "base64"),
                name: "meme.png",
              },
            ],
          });
        } catch {
          await interaction.editReply("error");
        }
        break;
    }
  }
});
