import type { Voice } from "#/models/Voice.ts";

export abstract class IVoicesRepository {
    public abstract getAllVoices(): Voice[];
    public abstract getVoiceById(id: string): Voice | undefined;
}
