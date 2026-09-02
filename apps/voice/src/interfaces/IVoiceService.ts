import type { TextNarrationJob } from "@jstmemit/shared/models/TextNarrationJob";
import type { TextNarrationResult } from "@jstmemit/shared/models/TextNarrationResult";
import type { VoiceTranscriptionJob } from "@jstmemit/shared/models/VoiceTranscriptionJob";
import type { VoiceTranscriptionResult } from "@jstmemit/shared/models/VoiceTranscriptionResult";

export abstract class IVoiceService {
    public abstract convertSpeechToText(data: VoiceTranscriptionJob): Promise<VoiceTranscriptionResult>;
    public abstract convertTextToSpeech(data: TextNarrationJob): Promise<TextNarrationResult>;
}
