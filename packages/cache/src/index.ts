import Keyv from "keyv";
import KeyvRedis from "@keyv/redis";
import { analytics } from "@jstmemit/analytics";
import { type Logger, logs } from "@opentelemetry/api-logs";
import { Env } from "@jstmemit/shared/schemas/Env";
import "@jstmemit/telemetry";

const env = Env.parse(process.env);

const logger: Logger = logs.getLogger("jstmemit/cache");
export const cache = new Keyv(new KeyvRedis(`redis://${env.REDIS_CACHE_HOST}:${env.REDIS_CACHE_PORT}`));

cache.on("error", (error): void => {
    analytics.captureException(error);
    logger.emit({
        severityText: "error",
        body: "cache.error",
        attributes: {
            error_message: error instanceof Error ? error.message : String(error),
            error_stack: error instanceof Error ? error.stack : undefined,
        },
    });
});
