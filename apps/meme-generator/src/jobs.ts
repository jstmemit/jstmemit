import type { Queue } from "bullmq";
import { createBanditDecayQueue } from "@jstmemit/queue/jobs/banditDecay";
import { redisConnection } from "#/container.ts";

const banditDecayQueue: Queue = createBanditDecayQueue(redisConnection);

await banditDecayQueue.upsertJobScheduler(
    "bandit-decay-daily",
    { pattern: "0 0 1 * * *", tz: "Europe/Amsterdam" },
    {
        name: "bandit-decay",
        opts: {
            attempts: 5,
            backoff: { type: "exponential", delay: 3000 },
            removeOnComplete: 100,
            removeOnFail: 1000,
        },
    },
);
