import type { IMilestonesController } from "#/interfaces/IMilestonesController.ts";
import type { ChatInputCommandInteraction } from "discord.js";
import type { IMilestonesService } from "#/interfaces/IMilestonesService.ts";

export class MilestonesController implements IMilestonesController {
    private readonly _milestonesService: IMilestonesService;

    public constructor(milestonesService: IMilestonesService) {
        this._milestonesService = milestonesService;
    }

    public async handleViewMilestones(interaction: ChatInputCommandInteraction): Promise<void> {
        const milestones: number[] = await this._milestonesService.getReachedMilestones(interaction.channelId);
        await interaction.reply(milestones.toString());
    }
}
