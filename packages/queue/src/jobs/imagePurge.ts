import { type ConnectionOptions, Queue } from "bullmq";

export const createImagePurgeQueue = (connection: ConnectionOptions) =>
    new Queue("image-purge", {
        connection,
        defaultJobOptions: {
            attempts: 3,
            backoff: { type: "exponential", delay: 2000 },
            removeOnComplete: 100,
            removeOnFail: 500,
        },
    });
