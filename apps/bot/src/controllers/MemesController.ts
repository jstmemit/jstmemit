import type { IMemesController } from "#/interfaces/IMemesController.ts";
import {
    Message,
    type ButtonInteraction,
    type ContainerBuilder,
    type ActionRowBuilder,
    type ButtonBuilder,
} from "discord.js";
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
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";

export class MemesController implements IMemesController {
    private readonly _memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>;
    private readonly _memeGenerationQueueEvents: QueueEvents;
    private readonly _ratingsService: IRatingsService;
    private readonly _componentsService: IComponentsService;
    private readonly _banditService: IBanditService;
    private readonly _channelsService: IChannelsService;

    public constructor(
        memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>,
        memeGenerationQueueEvents: QueueEvents,
        ratingsService: IRatingsService,
        componentsService: IComponentsService,
        banditService: IBanditService,
        channelsService: IChannelsService,
    ) {
        this._memeGenerationQueue = memeGenerationQueue;
        this._memeGenerationQueueEvents = memeGenerationQueueEvents;
        this._ratingsService = ratingsService;
        this._componentsService = componentsService;
        this._banditService = banditService;
        this._channelsService = channelsService;
    }

    /**
     * Sends a meme generation job to the queue and replies
     * to the channel back with a meme
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
    ): Promise<void> {
        const channelId: MemeGenerationJob["channelId"] = interaction.channelId;
        const userId: MemeGenerationJob["userId"] =
            interaction instanceof Message ? interaction.author.id : interaction.user.id;

        let trigger: MemeGenerationJob["trigger"];

        const channel = await this._channelsService.getChannel(channelId);

        if (!channel?.enabled) {
            const notEnabledComponent: ContainerBuilder = this._componentsService.getEnableMessageComponent(
                channel?.enabled || false,
            );
            const notEnabledButtons: ActionRowBuilder<ButtonBuilder> =
                this._componentsService.getEnableButtonsComponent(channel?.enabled || false);

            await respond(interaction, [notEnabledComponent, notEnabledButtons]);

            return;
        }

        if (!(interaction instanceof Message)) {
            await interaction.deferReply();
        }

        if (interaction instanceof Message) {
            trigger = "auto";
        } else if (interaction.isButton()) {
            trigger = "regenerate";
        } else {
            trigger = "command";
        }

        const job: Job<MemeGenerationJob, MemeGenerationResult> = await this._memeGenerationQueue.add(
            "meme-generation",
            {
                channelId,
                userId,
                trigger,
            },
        );

        try {
            const jobResult: MemeGenerationResult = await job.waitUntilFinished(this._memeGenerationQueueEvents, 60000);

            // if bot sent the meme without being prompted to do so
            if (interaction instanceof Message) {
                await interaction.reply({
                    components: [this._ratingsService.constructRatingButtons(0, 0, jobResult.generationId)],
                    files: [
                        {
                            attachment: Buffer.from(jobResult.png, "base64"),
                            name: "meme.png",
                        },
                    ],
                });

                return;
            }

            // if bot sent the meme because of /meme or regenerate button
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
        } catch (error) {
            let message: ContainerBuilder;
            const reason: string = error instanceof Error ? error.message : "";

            switch (reason) {
                case "No props":
                    message = this._componentsService.getNotEnoughContextMessageComponent(interaction.id);
                    break;
                default:
                    message = this._componentsService.getErrorMessageComponent(interaction.id);
            }

            await respond(interaction, [message]);
        }
    }
}
