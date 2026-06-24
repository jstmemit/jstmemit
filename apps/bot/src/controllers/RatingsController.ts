import type { IRatingsController } from "#/interfaces/IRatingsController.ts";
import type { ButtonInteraction } from "discord.js";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";
import type { IGenerationsRepository } from "@jstmemit/db/interfaces/IGenerationsRepository";
import { analytics } from "@jstmemit/analytics";
import type { IBanditService } from "@jstmemit/bandit/interfaces/IBanditService";

export class RatingsController implements IRatingsController {
    private readonly _ratingsService: IRatingsService;
    private readonly _generationsRepository: IGenerationsRepository;
    private readonly _banditService: IBanditService;

    public constructor(
        ratingsService: IRatingsService,
        generationsRepository: IGenerationsRepository,
        banditService: IBanditService,
    ) {
        this._ratingsService = ratingsService;
        this._generationsRepository = generationsRepository;
        this._banditService = banditService;
    }

    /**
     * Handles clicks on like/dislike buttons under meme messages.
     * Passes new rating to RatingsService and then updates buttons
     *
     * @param interaction
     * @param rating
     * @param generationId
     *
     * @author Kyrylo Maliuha
     */
    public async handleRatingInteraction(
        interaction: ButtonInteraction,
        rating: "like" | "dislike",
        generationId: number,
    ): Promise<void> {
        try {
            const success: boolean = await this._ratingsService.addRating(
                interaction.user.id,
                interaction.message.id,
                rating,
            );

            const generation = await this._generationsRepository.get(generationId);

            if (generation && success) {
                await this._banditService.recordRating(
                    generation.channelId,
                    generation.templateId,
                    rating,
                    interaction.user.id,
                );

                analytics.capture({
                    event: `meme_${rating}`,
                    distinctId: interaction.user.id,
                    properties: {
                        generationId: generationId,
                        channelId: interaction.channelId,
                        guildId: interaction.guildId,
                    },
                });
            }

            await this._ratingsService.updateRatingButtons(interaction, generationId);
        } catch (error) {
            console.error(error);
        }
    }
}
