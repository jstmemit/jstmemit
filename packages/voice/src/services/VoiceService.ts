import type { IVoiceService } from "#/interface/IVoiceService.ts";
import "@jstmemit/telemetry";
import { type Logger, logs } from "@opentelemetry/api-logs";

export class VoiceService implements IVoiceService {
    private readonly _whisperUrl: string;
    private readonly _logger: Logger = logs.getLogger("jstmemit/voice");

    public constructor(whisperUrl: string = "http://whisper:9000/v1/audio") {
        this._whisperUrl = whisperUrl;
    }

    /**
     * Fetches audio from url then sends to whisper
     * for a transcription that returns plain text
     *
     * @param url
     *
     * @author Kyrylo Maliuha
     */
    public async convertSpeechToText(url: string): Promise<string> {
        const audio: Response = await fetch(url);

        const form = new FormData();
        form.append("file", await audio.blob(), "audio.ogg");
        form.append("response_format", "text");

        const res: Response = await fetch(`${this._whisperUrl}/transcriptions`, {
            method: "POST",
            body: form,
        });

        const text: string = await res.text();

        if (text.length < 1) {
            this._logger.emit({
                severityText: "warn",
                body: "voice.speech_to_text.returned_empty_string",
                attributes: {
                    audio_fetch_status_text: audio.statusText,
                    audio_fetch_status_code: audio.status,
                },
            });
        }

        return text;
    }
}
