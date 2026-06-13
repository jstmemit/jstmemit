import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { ButtonInteraction, Message } from "discord.js";
import { type ChatInputCommandInteraction } from "discord.js";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import type { QueueEvents } from "bullmq";
import { type Job } from "bullmq";
import { type Queue } from "bullmq";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";

export class MemesController implements IMemesController {
  private readonly _memeGenerationQueue: Queue<
    MemeGenerationJob,
    MemeGenerationResult
  >;
  private readonly _memeGenerationQueueEvents: QueueEvents;
  private readonly _ratingsService: IRatingsService;

  public constructor(
    memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>,
    memeGenerationQueueEvents: QueueEvents,
    ratingsService: IRatingsService,
  ) {
    this._memeGenerationQueue = memeGenerationQueue;
    this._memeGenerationQueueEvents = memeGenerationQueueEvents;
    this._ratingsService = ratingsService;
  }

  public async handleMemeInteraction(
    interaction: ChatInputCommandInteraction | ButtonInteraction,
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

      if (interaction.isChatInputCommand() || interaction.isButton()) {
        await interaction.editReply({
          content: `<@${interaction.user.id}>`,
          components: [this._ratingsService.constructRatingButtons(0, 0)],
          files: [
            {
              attachment: Buffer.from(jobResult.png, "base64"),
              name: "meme.png",
            },
          ],
        });
      }

      // interaction.channel?.isSendable()

      // await interaction.channel.send({
      //   components: [
      //     this._ratingsService.constructRatingButtons(interaction.id, 0, 0),
      //   ],
      //   files: [
      //     {
      //       attachment: Buffer.from(jobResult.png, "base64"),
      //       name: "meme.png",
      //     },
      //   ],
      // });
    } catch {
      await interaction.editReply("error");
    }
  }
}
