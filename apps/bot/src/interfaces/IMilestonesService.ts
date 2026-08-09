import type { Message } from "discord.js";
import { type ButtonInteraction, type ChatInputCommandInteraction } from "discord.js";
import type { channelsTable } from "@jstmemit/db/schema.ts";

export abstract class IMilestonesService {
    public abstract checkAndReplyWithMilestone(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
        channel: typeof channelsTable.$inferSelect,
    ): Promise<void>;
    public abstract getReachedMilestones(channelId: string): Promise<number[]>;
}
