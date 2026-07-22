import { type ConnectionOptions, Queue } from "bullmq";
import type { VoiceTranscriptionJob } from "@jstmemit/shared/models/VoiceTranscriptionJob";
import type { VoiceTranscriptionResult } from "@jstmemit/shared/models/VoiceTranscriptionResult";

export const createVoiceTranscriptionQueue = (connection: ConnectionOptions) =>
    new Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>("voice-transcription", {
        connection,
        defaultJobOptions: {
            attempts: 3,
            backoff: { type: "exponential", delay: 100 },
            removeOnComplete: 10,
            removeOnFail: 50,
        },
    });
