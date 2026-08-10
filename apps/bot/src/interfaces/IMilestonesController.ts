import type { ChatInputCommandInteraction } from "discord.js";

export abstract class IMilestonesController {
    public abstract handleViewMilestones(interaction: ChatInputCommandInteraction): Promise<void>;
}
