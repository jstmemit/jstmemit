import type { ConnectionOptions } from "bullmq";

export const createRedisConnection = (host: string, port: number): ConnectionOptions => ({
    host,
    port,
    maxRetriesPerRequest: null,
});
