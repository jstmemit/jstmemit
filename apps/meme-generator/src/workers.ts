import { Worker } from "bullmq";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import { memesService, banditRepository, redisConnection } from "#/container.ts";

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
