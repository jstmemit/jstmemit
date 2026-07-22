import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import type { IVoiceService } from "#/interface/IVoiceService.ts";
import { type Logger, logs } from "@opentelemetry/api-logs";
import "@jstmemit/telemetry";
import ms from "ms";

export class VoiceService implements IVoiceService {
    private readonly _whisperUrl: string;
    private readonly _logger: Logger = logs.getLogger("jstmemit/voice");
    private readonly _cacheService: ICacheService;

    public constructor(cacheService: ICacheService, whisperUrl: string = "http://whisper:9000/v1/audio") {
        this._whisperUrl = whisperUrl;
        this._cacheService = cacheService;
    }

    public async convertSpeechToText(url: string): Promise<string> {
        return this._cacheService.getOrSet(`transcribe:${url}`, (): Promise<string> => this._transcribe(url), ms("7d"));
    }

    /**
     * Fetches audio from url then sends to whisper
     * for a transcription that returns plain text
     *
     * @param url
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _transcribe(url: string): Promise<string> {
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
