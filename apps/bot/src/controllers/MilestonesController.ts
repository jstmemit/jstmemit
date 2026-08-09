import type { IMilestonesController } from "#/interfaces/IMilestonesController.ts";
import type { ChatInputCommandInteraction, ContainerBuilder } from "discord.js";
import type { IMilestonesService } from "#/interfaces/IMilestonesService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import ms from "ms";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import type { IGenerationsRepository } from "@jstmemit/db/interfaces/IGenerationsRepository";
import { respond } from "#/helpers/respond.ts";

export class MilestonesController implements IMilestonesController {
    private readonly _milestonesService: IMilestonesService;
    private readonly _componentsService: IComponentsService;
    private readonly _cacheService: ICacheService;
    private readonly _generationsRepository: IGenerationsRepository;

    public constructor(
        milestonesService: IMilestonesService,
        componentsService: IComponentsService,
        cacheService: ICacheService,
        generationsRepository: IGenerationsRepository,
    ) {
        this._milestonesService = milestonesService;
        this._componentsService = componentsService;
        this._cacheService = cacheService;
        this._generationsRepository = generationsRepository;
    }

    public async handleViewMilestones(interaction: ChatInputCommandInteraction): Promise<void> {
        const cached: number | undefined = await this._cacheService.get(`generations:${interaction.channelId}`);
        const count: number =
            cached !== undefined
                ? cached + 1
                : await this._generationsRepository.getCountPerChannel(interaction.channelId);

        await this._cacheService.set(`generations:${interaction.channelId}`, count, ms("7d"));

        const milestones: number[] = await this._milestonesService.getReachedMilestones(interaction.channelId);
        const message: ContainerBuilder = this._componentsService.getMilestoneViewMessageComponent(
            interaction.locale,
            interaction.channelId,
            count,
            milestones,
        );

        await respond(interaction, [message]);
    }
}
