import type { TextNarrationJob } from "@jstmemit/shared/models/TextNarrationJob";
import type { TextNarrationResult } from "@jstmemit/shared/models/TextNarrationResult";

export abstract class IVoiceService {
    public abstract convertSpeechToText(url: string): Promise<string>;
    public abstract convertTextToSpeech(data: TextNarrationJob): Promise<TextNarrationResult>;
}
