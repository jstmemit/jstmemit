import { type ConnectionOptions, Queue } from "bullmq";
import type { VoiceTranscriptionJob } from "@jstmemit/shared/models/VoiceTranscriptionJob";
import type { VoiceTranscriptionResult } from "@jstmemit/shared/models/VoiceTranscriptionResult";

export const createVoiceTranscriptionQueue = (connection: ConnectionOptions) =>
    new Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>("voice-transcription", {
        connection,
        streams: { events: { maxLen: 250 } },
        defaultJobOptions: {
            attempts: 3,
            backoff: { type: "exponential", delay: 100 },
            removeOnComplete: true,
            removeOnFail: true,
        },
    });
