import { type ConnectionOptions, Queue } from "bullmq";

export const createMessagePurgeQueue = (connection: ConnectionOptions) =>
    new Queue("message-purge", {
        connection,
        defaultJobOptions: {
            attempts: 3,
            backoff: { type: "exponential", delay: 2000 },
            removeOnComplete: 100,
            removeOnFail: 500,
        },
    });
