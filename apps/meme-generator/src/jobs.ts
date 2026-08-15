import type { Queue } from "bullmq";
import { createBanditDecayQueue } from "@jstmemit/queue/jobs/banditDecay";
import { redisConnection } from "#/container.ts";
import { createMessagePurgeQueue } from "@jstmemit/queue/jobs/messagePurge";
import { createImagePurgeQueue } from "@jstmemit/queue/jobs/imagePurge";

const banditDecayQueue: Queue = createBanditDecayQueue(redisConnection);
const messagePurgeQueue: Queue = createMessagePurgeQueue(redisConnection);
const imagePurgeQueue: Queue = createImagePurgeQueue(redisConnection);

await banditDecayQueue.upsertJobScheduler(
    "bandit-decay-daily",
    { pattern: "0 0 1 * * *", tz: "Europe/Amsterdam" },
    {
        name: "bandit-decay",
        opts: {
            attempts: 5,
            backoff: { type: "exponential", delay: 3000 },
            removeOnComplete: 10,
            removeOnFail: 10,
        },
    },
);

await messagePurgeQueue.upsertJobScheduler(
    "message-purge-daily",
    { pattern: "0 0 2 * * *", tz: "Europe/Amsterdam" },
    {
        name: "message-purge",
        opts: {
            attempts: 5,
            backoff: { type: "exponential", delay: 3000 },
            removeOnComplete: 10,
            removeOnFail: 10,
        },
    },
);

await imagePurgeQueue.upsertJobScheduler(
    "image-purge-daily",
    { pattern: "0 0 3 * * *", tz: "Europe/Amsterdam" },
    {
        name: "image-purge",
        opts: {
            attempts: 5,
            backoff: { type: "exponential", delay: 3000 },
            removeOnComplete: 10,
            removeOnFail: 10,
        },
    },
);
