import { UnrecoverableError, Worker } from "bullmq";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import {
    memesService,
    banditRepository,
    redisConnection,
    messagesRepository,
    imagesRepository,
    logger,
} from "#/container.ts";
import { analytics } from "@jstmemit/analytics";
import { addWorkerTelemetry } from "@jstmemit/telemetry/helpers/addWorkerTelemetry.ts";

export const memeGenerationWorker = new Worker<MemeGenerationJob, MemeGenerationResult>(
    "meme-generation",
    async (job) => {
        try {
            return await memesService.generateMeme(job.data);
        } catch (error) {
            if (error instanceof Error && (error.message === "No props" || error.message === "No template")) {
                throw new UnrecoverableError(error.message);
            }
            throw error;
        }
    },
    {
        connection: redisConnection,
        concurrency: 5,
    },
);

memeGenerationWorker.on("failed", (job, error) => {
    if (error.message !== "No props") {
        analytics.captureException(error, job?.data.userId, {
            channelId: job?.data.channelId,
            trigger: job?.data.trigger,
            templateName: job?.data.templateName,
            unrecoverable: error instanceof UnrecoverableError,
        });
    }
});

export const banditDecayWorker = new Worker("bandit-decay", async () => banditRepository.decayAll(0.99), {
    connection: redisConnection,
    concurrency: 1,
});

export const messagePurgeWorker = new Worker("message-purge", async () => messagesRepository.deleteAllOlderThan(), {
    connection: redisConnection,
    concurrency: 1,
});

export const imagePurgeWorker = new Worker("image-purge", async () => imagesRepository.deleteAllExpiredOrOld(), {
    connection: redisConnection,
    concurrency: 1,
});

addWorkerTelemetry(memeGenerationWorker, "meme-generation", logger);
addWorkerTelemetry(banditDecayWorker, "bandit-decay", logger);
addWorkerTelemetry(messagePurgeWorker, "message-purge", logger);
addWorkerTelemetry(imagePurgeWorker, "image-purge", logger);

process.on("unhandledRejection", (reason: unknown): void => {
    const error: Error = reason instanceof Error ? reason : new Error(String(reason));

    analytics.captureException(error, "meme-generator", { handler: "unhandledRejection" });
    logger.emit({
        severityText: "error",
        body: "process.unhandled_rejection",
        attributes: {
            error_name: error.name,
            error_message: error.message,
            stack: error.stack,
        },
    });
});

process.on("uncaughtException", (error: Error, origin: NodeJS.UncaughtExceptionOrigin): void => {
    analytics.captureException(error, "meme-generator", { handler: "uncaughtException", origin });
    logger.emit({
        severityText: "fatal",
        body: "process.uncaught_exception",
        attributes: {
            error_name: error.name,
            error_message: error.message,
            origin,
            stack: error.stack,
        },
    });
});
