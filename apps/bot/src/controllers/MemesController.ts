import type { IMemesController } from "../interfaces/IMemesController.ts";
import { type ChatInputCommandInteraction } from "discord.js";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import { createMemeGenerationQueue } from "@jstmemit/queue/jobs/memeGeneration";
import { createRedisConnection } from "@jstmemit/queue/connection";
import { type Job, QueueEvents } from "bullmq";
import { type Queue } from "bullmq";
import { type ConnectionOptions } from "bullmq";
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

export class MemesController implements IMemesController {
  public async handleMemeInteraction(
    interaction: ChatInputCommandInteraction,
  ): Promise<void> {
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
  }
}
