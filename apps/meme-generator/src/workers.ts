import { Worker } from "bullmq";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import { memesService, banditRepository, redisConnection, messagesRepository, imagesRepository } from "#/container.ts";
import { analytics } from "@jstmemit/analytics";

export const memeGenerationWorker = new Worker<MemeGenerationJob, MemeGenerationResult>(
    "meme-generation",
    async (job) => memesService.generateMeme(job.data),
    {
        connection: redisConnection,
        concurrency: 5,
    },
);

memeGenerationWorker.on("failed", (job, error) => {
    analytics.captureException(error, job?.data.userId, {
        channelId: job?.data.channelId,
        trigger: job?.data.trigger,
        templateName: job?.data.templateName,
    });
});

export const banditDecayWorker = new Worker("bandit-decay", async () => banditRepository.decayAll(0.99), {
    connection: redisConnection,
    concurrency: 1,
});

export const messagePurgeWorker = new Worker("message-purge", async () => messagesRepository.deleteAllOlderThan(), {
    connection: redisConnection,
    concurrency: 1,
});

export const imagePurgeWorker = new Worker("image-purge", async () => imagesRepository.deleteAllExpiredOrOld(), {
    connection: redisConnection,
    concurrency: 1,
});
