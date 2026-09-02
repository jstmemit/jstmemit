import type { Logger } from "@opentelemetry/api-logs";
import { analytics } from "@jstmemit/analytics";
import type { Worker } from "bullmq";

export const addWorkerTelemetry = (worker: Worker, name: string, logger: Logger): void => {
    worker.on("failed", (job, error: Error): void => {
        analytics.captureException(error);
        logger.emit({
            severityText: "error",
            body: `worker.${name}.job_failed`,
            attributes: {
                job_id: job?.id,
                attempts_made: job?.attemptsMade,
                error_message: error instanceof Error ? error.message : String(error),
            },
        });
    });

    worker.on("error", (error: Error): void => {
        logger.emit({
            severityText: "error",
            body: `worker.${name}.worker_error`,
            attributes: { error_message: error.message },
        });
    });
};
