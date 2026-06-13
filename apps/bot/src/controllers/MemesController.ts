import type { IMemesController } from "#/interfaces/IMemesController.ts";
import { type ChatInputCommandInteraction } from "discord.js";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import type { QueueEvents } from "bullmq";
import { type Job } from "bullmq";
import { type Queue } from "bullmq";

export class MemesController implements IMemesController {
  private readonly _memeGenerationQueue: Queue<
    MemeGenerationJob,
    MemeGenerationResult
  >;
  private readonly _memeGenerationQueueEvents: QueueEvents;

  public constructor(
    memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>,
    memeGenerationQueueEvents: QueueEvents,
  ) {
    this._memeGenerationQueue = memeGenerationQueue;
    this._memeGenerationQueueEvents = memeGenerationQueueEvents;
  }

  public async handleMemeInteraction(
    interaction: ChatInputCommandInteraction,
  ): Promise<void> {
    await interaction.deferReply();

    const job: Job<MemeGenerationJob, MemeGenerationResult> =
      await this._memeGenerationQueue.add("meme-generation", {
        channelId: interaction.channelId,
      });

    try {
      const jobResult: MemeGenerationResult = await job.waitUntilFinished(
        this._memeGenerationQueueEvents,
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
