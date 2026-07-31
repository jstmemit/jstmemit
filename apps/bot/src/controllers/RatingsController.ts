import type { IRatingsController } from "#/interfaces/IRatingsController.ts";
import { type ButtonInteraction, InteractionContextType } from "discord.js";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";
import type { IGenerationsRepository } from "@jstmemit/db/interfaces/IGenerationsRepository";
import { analytics } from "@jstmemit/analytics";
import type { IBanditService } from "@jstmemit/bandit/interfaces/IBanditService";
import { logger } from "#/container.ts";

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

            await this._ratingsService.updateRatingButtons(interaction, generationId);

            const generation = await this._generationsRepository.get(generationId);

            if (generation && success) {
                await this._banditService.recordRating(
                    generation.channelId,
                    generation.templateName,
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
                        language: interaction.locale,
                        templateName: generation.templateName,
                        secondsSinceGeneration: Math.round((Date.now() - generation.createdAt.getTime()) / 1000),
                        isFirstRating: success,
                        context: interaction.context != null ? InteractionContextType[interaction.context] : undefined,
                        isUserInstall: "1" in (interaction.authorizingIntegrationOwners || {}),
                        receiveLatencyMs: Date.now() - interaction.createdTimestamp,
                    },
                });
            }
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
                severityText: "error",
                body: "ratings.interaction.error",
                attributes: {
                    posthogDistinctId: interaction.user.id,
                    interaction_id: interaction.id,
                    channel_id: interaction.channelId,
                    guild_id: interaction?.guildId,
                    generation_id: generationId,
                    rating,
                    error_message: error instanceof Error ? error.message : String(error),
                    error_stack: error instanceof Error ? error.stack : undefined,
                },
            });
        }
    }
}
