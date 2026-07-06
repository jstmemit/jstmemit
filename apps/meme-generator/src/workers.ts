import { Worker } from "bullmq";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import { memesService, banditRepository, redisConnection, messagesRepository, imagesRepository } from "#/container.ts";

export const memeGenerationWorker = new Worker<MemeGenerationJob, MemeGenerationResult>(
    "meme-generation",
    async (job) => memesService.generateMeme(job.data),
    {
        connection: redisConnection,
        concurrency: 5,
    },
);

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
