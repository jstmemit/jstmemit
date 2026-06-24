import type { IMemesController } from "#/interfaces/IMemesController.ts";
import { type ButtonInteraction, type ContainerBuilder } from "discord.js";
import { type ChatInputCommandInteraction } from "discord.js";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import type { QueueEvents } from "bullmq";
import { type Job } from "bullmq";
import { type Queue } from "bullmq";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import type { IBanditService } from "@jstmemit/bandit/interfaces/IBanditService";

export class MemesController implements IMemesController {
    private readonly _memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>;
    private readonly _memeGenerationQueueEvents: QueueEvents;
    private readonly _ratingsService: IRatingsService;
    private readonly _componentsService: IComponentsService;
    private readonly _banditService: IBanditService;

    public constructor(
        memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>,
        memeGenerationQueueEvents: QueueEvents,
        ratingsService: IRatingsService,
        componentsService: IComponentsService,
        banditService: IBanditService,
    ) {
        this._memeGenerationQueue = memeGenerationQueue;
        this._memeGenerationQueueEvents = memeGenerationQueueEvents;
        this._ratingsService = ratingsService;
        this._componentsService = componentsService;
        this._banditService = banditService;
    }

    /**
     * Sends a meme generation job to the queue and replies
     * to the channel back with a meme
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleMemeInteraction(interaction: ChatInputCommandInteraction | ButtonInteraction): Promise<void> {
        await interaction.deferReply();

        const job: Job<MemeGenerationJob, MemeGenerationResult> = await this._memeGenerationQueue.add(
            "meme-generation",
            {
                channelId: interaction.channelId,
                userId: interaction.user.id,
                trigger: interaction.isCommand() ? "command" : "regenerate",
            },
        );

        try {
            const jobResult: MemeGenerationResult = await job.waitUntilFinished(this._memeGenerationQueueEvents, 60000);

            if (interaction.isChatInputCommand() || interaction.isButton()) {
                await interaction.editReply({
                    content: `<@${interaction.user.id}>`,
                    components: [this._ratingsService.constructRatingButtons(0, 0, jobResult.generationId)],
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
            const message: ContainerBuilder = this._componentsService.getErrorMessageComponent(interaction.id);

            await respond(interaction, [message]);
        }
    }
}
