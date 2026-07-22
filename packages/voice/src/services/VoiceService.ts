import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import type { IVoiceService } from "#/interface/IVoiceService.ts";
import { type Logger, logs } from "@opentelemetry/api-logs";
import "@jstmemit/telemetry";
import ms from "ms";

export class VoiceService implements IVoiceService {
    private readonly _whisperUrl: string;
    private readonly _kokoroUrl: string;
    private readonly _logger: Logger = logs.getLogger("jstmemit/voice");
    private readonly _cacheService: ICacheService;

    public constructor(cacheService: ICacheService) {
        this._whisperUrl = "http://whisper:9000/v1/audio";
        this._kokoroUrl = "http://kokoro:8880/v1/audio";
        this._cacheService = cacheService;
    }

    public async convertSpeechToText(url: string): Promise<string> {
        return this._cacheService.getOrSet(`transcribe:${url}`, (): Promise<string> => this._transcribe(url), ms("7d"));
    }

    public async narrateText(
        text: string,
        locale: string = "a",
        voice: string = "af_sky",
    ): Promise<Buffer | undefined> {
        const response: Response = await fetch(`${this._kokoroUrl}/speech`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "kokoro",
                input: text,
                voice,
                response_format: "opus",
                download_format: "mp3",
                speed: 1,
                return_download_link: false,
                volume_multiplier: 1,
                lang_code: locale,
                normalization_options: {
                    normalize: true,
                    unit_normalization: false,
                    url_normalization: true,
                    email_normalization: true,
                    optional_pluralization_normalization: true,
                    phone_normalization: true,
                    replace_remaining_symbols: true,
                },
            }),
        });

        if (!response.ok) {
            this._logger.emit({
                severityText: "error",
                body: "voice.narrate_text.failed",
                attributes: {
                    status: response.status,
                    error_body: await response.text(),
                },
            });
            return undefined;
        }

        return Buffer.from(await response.arrayBuffer());
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
