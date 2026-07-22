import type { Voice } from "#/models/Voice.ts";

export abstract class IVoiceRepository {
    public abstract getAllVoices(): Voice[];
}
