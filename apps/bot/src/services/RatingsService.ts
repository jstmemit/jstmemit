import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";

export class RatingsService implements IRatingsService {
  public constructRatingButtons(
    interactionId: string,
    likes: number,
    dislikes: number,
  ): ActionRowBuilder<ButtonBuilder> {
    const likeButton: ButtonBuilder = new ButtonBuilder()
      .setCustomId(`like_${interactionId}`)
      .setLabel(`👍 ${likes}`)
      .setStyle(ButtonStyle.Success);

    const regenerateButton: ButtonBuilder = new ButtonBuilder()
      .setCustomId(`meme`)
      .setLabel("🔄️")
      .setStyle(ButtonStyle.Secondary);

    const dislikeButton: ButtonBuilder = new ButtonBuilder()
      .setCustomId(`dislike_${interactionId}`)
      .setLabel(`👎 ${dislikes}`)
      .setStyle(ButtonStyle.Danger);

    return new ActionRowBuilder<ButtonBuilder>().addComponents(
      likeButton,
      regenerateButton,
      dislikeButton,
    );
  }
}
