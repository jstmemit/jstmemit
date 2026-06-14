import { Worker } from "bullmq";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import { memesService, redisConnection } from "#/container.ts";

export const memeGenerationWorker = new Worker<
    MemeGenerationJob,
    MemeGenerationResult
>("meme-generation", async (job) => memesService.generateMeme(job.data), {
    connection: redisConnection,
    concurrency: 5,
});
