import type { IVoiceRepository } from "#/interfaces/IVoiceRepository.ts";
import type { Voice } from "#/models/Voice.ts";

export class VoicesRepository implements IVoiceRepository {
    private readonly _voices: Voice[];

    public constructor() {
        this._voices = [
            { id: "af_heart", name: "🇺🇸 Heart", locale: "en-us" },
            { id: "af_bella", name: "🇺🇸 Bella", locale: "en-us" },
            { id: "af_nicole", name: "🇺🇸 Nicole", locale: "en-us" },
            { id: "pf_dora", name: "🇧🇷 Dora", locale: "pt-br" },
            { id: "af_aoede", name: "🇺🇸 Aoede", locale: "en-us" },
            { id: "em_alex", name: "🇪🇸 Alex", locale: "es-419" },
            { id: "af_kore", name: "🇺🇸 Kore", locale: "en-us" },
            { id: "ff_siwis", name: "🇫🇷 Siwis", locale: "fr-fr" },
            { id: "af_sarah", name: "🇺🇸 Sarah", locale: "en-us" },
            { id: "im_nicola", name: "🇮🇹 Nicola", locale: "it" },
            { id: "af_nova", name: "🇺🇸 Nova", locale: "en-us" },
            { id: "af_alloy", name: "🇺🇸 Alloy", locale: "en-us" },
            { id: "am_fenrir", name: "🇺🇸 Fenrir", locale: "en-us" },
            { id: "am_michael", name: "🇺🇸 Michael", locale: "en-us" },
            { id: "am_puck", name: "🇺🇸 Puck", locale: "en-us" },
            { id: "bf_emma", name: "🇬🇧 Emma", locale: "en-gb" },
            { id: "bf_isabella", name: "🇬🇧 Isabella", locale: "en-gb" },
            { id: "bm_fable", name: "🇬🇧 Fable", locale: "en-gb" },
            { id: "bm_george", name: "🇬🇧 George", locale: "en-gb" },
            { id: "bm_lewis", name: "🇬🇧 Lewis", locale: "en-gb" },
            { id: "pm_alex", name: "🇧🇷 Alex", locale: "pt-br" },
            { id: "if_sara", name: "🇮🇹 Sara", locale: "it" },
            { id: "ef_dora", name: "🇪🇸 Dora", locale: "es-419" },
        ];
    }

    public getAllVoices(): Voice[] {
        return [...this._voices];
    }
}
