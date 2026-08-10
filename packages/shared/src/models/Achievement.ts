import type { LocalizationMap } from "discord.js";

export interface Achievement {
    name: LocalizationMap;
    emoji: string;
    requiredCount: number;
}
