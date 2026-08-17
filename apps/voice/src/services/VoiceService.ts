import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import type { IVoicesRepository } from "@jstmemit/shared/interfaces/IVoicesRepository";
import type { IVoiceService } from "#/interfaces/IVoiceService.ts";
import "@jstmemit/telemetry";
import ms from "ms";
import type { Voice } from "@jstmemit/shared/models/Voice";
import type { TextNarrationJob } from "@jstmemit/shared/models/TextNarrationJob";
import type { TextNarrationResult } from "@jstmemit/shared/models/TextNarrationResult";
import { type Logger } from "@opentelemetry/api-logs";
import type { VoiceTranscriptionJob } from "@jstmemit/shared/models/VoiceTranscriptionJob";
import type { VoiceTranscriptionResult } from "@jstmemit/shared/models/VoiceTranscriptionResult";
import _ from "lodash";

export class VoiceService implements IVoiceService {
    private readonly _whisperUrl: string;
    private readonly _kokoroUrl: string;
    private readonly _logger: Logger;
    private readonly _cacheService: ICacheService;
    private readonly _voicesRepository: IVoicesRepository;

    public constructor(cacheService: ICacheService, voicesRepository: IVoicesRepository, logger: Logger) {
        this._whisperUrl = "http://whisper:9000/v1/audio";
        this._kokoroUrl = "http://kokoro:8880/v1/audio";
        this._cacheService = cacheService;
        this._voicesRepository = voicesRepository;
        this._logger = logger;
    }

    public async convertSpeechToText(data: VoiceTranscriptionJob): Promise<VoiceTranscriptionResult> {
        return {
            text: await this._cacheService.getOrSet(
                `transcribe:${data.url}`,
                (): Promise<string> => this._transcribe(data.url),
                ms("7d"),
            ),
        };
    }

    public async convertTextToSpeech(data: TextNarrationJob): Promise<TextNarrationResult> {
        if (!data.voiceId) {
            data.voiceId = _.sample(this._voicesRepository.getAllVoices())?.id || "af_sky";
        }

        return {
            audio: await this._narrateText(data.text, data.voiceId),
            voice: data.voiceId,
        };
    }

    private async _narrateText(text: string, voiceId: string): Promise<Buffer | undefined> {
        const voice: Voice | undefined = this._voicesRepository.getVoiceById(voiceId);

        const response: Response = await fetch(`${this._kokoroUrl}/speech`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "kokoro",
                input: text,
                voice: voice?.id,
                response_format: "opus",
                download_format: "mp3",
                speed: 1,
                return_download_link: false,
                volume_multiplier: 1,
                lang_code: voice?.id.charAt(0),
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
