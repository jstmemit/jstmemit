import { type ConnectionOptions, Queue } from "bullmq";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";

export const createMemeGenerationQueue = (connection: ConnectionOptions) =>
    new Queue<MemeGenerationJob, MemeGenerationResult>("meme-generation", {
        connection,
        streams: { events: { maxLen: 1000 } },
        defaultJobOptions: {
            attempts: 3,
            backoff: { type: "exponential", delay: 100 },
            removeOnComplete: true,
            removeOnFail: true,
        },
    });
