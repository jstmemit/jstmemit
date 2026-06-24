import { type ConnectionOptions, Queue } from "bullmq";

export const createBanditDecayQueue = (connection: ConnectionOptions) =>
    new Queue("bandit-decay", {
        connection,
        defaultJobOptions: {
            attempts: 3,
            backoff: { type: "exponential", delay: 2000 },
            removeOnComplete: 100,
            removeOnFail: 500,
        },
    });
