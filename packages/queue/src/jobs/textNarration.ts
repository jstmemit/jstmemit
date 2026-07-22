import { type ConnectionOptions, Queue } from "bullmq";
import type { TextNarrationJob } from "@jstmemit/shared/models/TextNarrationJob";
import type { TextNarrationResult } from "@jstmemit/shared/models/TextNarrationResult";

export const createTextNarrationQueue = (connection: ConnectionOptions) =>
    new Queue<TextNarrationJob, TextNarrationResult>("text-narration", {
        connection,
        defaultJobOptions: {
            attempts: 3,
            backoff: { type: "exponential", delay: 100 },
            removeOnComplete: 10,
            removeOnFail: 50,
        },
    });
