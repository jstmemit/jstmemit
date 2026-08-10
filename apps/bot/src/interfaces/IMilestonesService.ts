import type { Message } from "discord.js";
import { type ButtonInteraction, type ChatInputCommandInteraction } from "discord.js";
import type { channelsTable } from "@jstmemit/db/schema.ts";
import type { Achievement } from "@jstmemit/shared/models/Achievement";
import type { StatsPerChannel } from "@jstmemit/shared/models/StatsPerChannel";

export abstract class IMilestonesService {
    public abstract checkAndReplyWithMilestone(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
        channel: typeof channelsTable.$inferSelect,
    ): Promise<void>;
    public abstract getReachedMilestones(
        count: number,
        channelId: string,
    ): Promise<{ milestones: Achievement[] } & StatsPerChannel>;
}
