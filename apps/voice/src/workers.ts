import { Worker } from "bullmq";
import { analytics } from "@jstmemit/analytics";
import { addWorkerTelemetry } from "@jstmemit/telemetry/helpers/addWorkerTelemetry.ts";
import type { TextNarrationJob } from "@jstmemit/shared/models/TextNarrationJob";
import type { TextNarrationResult } from "@jstmemit/shared/models/TextNarrationResult";
import { logger, redisConnection, voiceService } from "#/container.ts";
import type { VoiceTranscriptionJob } from "@jstmemit/shared/models/VoiceTranscriptionJob";
import type { VoiceTranscriptionResult } from "@jstmemit/shared/models/VoiceTranscriptionResult";

export const textNarrationWorker = new Worker<TextNarrationJob, TextNarrationResult>(
    "text-narration",
    async (job) => voiceService.convertTextToSpeech(job.data),
    {
        connection: redisConnection,
        concurrency: 2,
    },
);

export const voiceTranscription = new Worker<VoiceTranscriptionJob, VoiceTranscriptionResult>(
    "voice-transcription",
    async (job) => voiceService.convertSpeechToText(job.data),
    {
        connection: redisConnection,
        concurrency: 2,
    },
);

textNarrationWorker.on("failed", (job, error) => {
    analytics.captureException(error, job?.data.userId, {
        channelId: job?.data.channelId,
        guildId: job?.data.guildId,
        voice: job?.data.voiceId,
    });
});

voiceTranscription.on("failed", (job, error) => {
    analytics.captureException(error, job?.data.channelId);
});

addWorkerTelemetry(textNarrationWorker, "text-narration", logger);
addWorkerTelemetry(voiceTranscription, "voice-transcription", logger);

process.on("unhandledRejection", (reason: unknown): void => {
    const error: Error = reason instanceof Error ? reason : new Error(String(reason));

    analytics.captureException(error, "voice", { handler: "unhandledRejection" });
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
    analytics.captureException(error, "voice", { handler: "uncaughtException", origin });
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
