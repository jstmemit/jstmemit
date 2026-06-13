import {
  ActionRowBuilder,
  ButtonBuilder,
  type ButtonInteraction,
  ButtonStyle,
} from "discord.js";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";
import type { IRatingsRepository } from "@jstmemit/db/interfaces/IRatingsRepository";

export class RatingsService implements IRatingsService {
  private readonly _ratingsRepository: IRatingsRepository;

  public constructor(ratingsRepository: IRatingsRepository) {
    this._ratingsRepository = ratingsRepository;
  }

  public async addRating(
    messageId: string,
    rating: "like" | "dislike",
  ): Promise<void> {
    if (rating === "like") {
      await this._ratingsRepository.addLikeRating(messageId);
    }

    if (rating === "dislike") {
      await this._ratingsRepository.addDislikeRating(messageId);
    }
  }

  public constructRatingButtons(
    likes: number,
    dislikes: number,
  ): ActionRowBuilder<ButtonBuilder> {
    const likeButton: ButtonBuilder = new ButtonBuilder()
      .setCustomId(`like`)
      .setLabel(`👍 ${likes}`)
      .setStyle(ButtonStyle.Success);

    const regenerateButton: ButtonBuilder = new ButtonBuilder()
      .setCustomId(`meme`)
      .setLabel("🔄️")
      .setStyle(ButtonStyle.Secondary);

    const dislikeButton: ButtonBuilder = new ButtonBuilder()
      .setCustomId(`dislike`)
      .setLabel(`👎 ${dislikes}`)
      .setStyle(ButtonStyle.Danger);

    return new ActionRowBuilder<ButtonBuilder>().addComponents(
      likeButton,
      regenerateButton,
      dislikeButton,
    );
  }

  public async updateRatingButtons(
    interaction: ButtonInteraction,
  ): Promise<void> {
    const messageId: string = interaction.message.id;

    const { likes, dislikes } =
      await this._ratingsRepository.getMemeRatings(messageId);

    await interaction.update({
      components: [this.constructRatingButtons(likes, dislikes)],
    });
  }
}
