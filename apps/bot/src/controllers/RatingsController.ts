import type { IRatingsController } from "#/interfaces/IRatingsController.ts";
import type { ButtonInteraction } from "discord.js";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";

export class RatingsController implements IRatingsController {
  private readonly _ratingsService: IRatingsService;

  public constructor(ratingsService: IRatingsService) {
    this._ratingsService = ratingsService;
  }

  /**
   * Handles clicks on like/dislike buttons under meme messages.
   * Passes new rating to RatingsService and then updates buttons
   *
   * @param interaction
   * @param rating
   *
   * @author Kyrylo Maliuha
   */
  public async handleRatingInteraction(
    interaction: ButtonInteraction,
    rating: "like" | "dislike",
  ): Promise<void> {
    try {
      await this._ratingsService.addRating(
        interaction.user.id,
        interaction.message.id,
        rating,
      );
      await this._ratingsService.updateRatingButtons(interaction);
    } catch (error) {
      console.error(error);
    }
  }
}
