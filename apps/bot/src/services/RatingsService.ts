import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";

export class RatingsService implements IRatingsService {
  public constructRatingButtons(
    interactionId: string,
    likes: number,
    dislikes: number,
  ): ActionRowBuilder<ButtonBuilder> {
    const likeButton = new ButtonBuilder()
      .setCustomId(`like_${interactionId}`)
      .setLabel(`👍 ${likes}`)
      .setStyle(ButtonStyle.Secondary);

    const regenerateButton = new ButtonBuilder()
      .setCustomId(`meme-regenerate`)
      .setLabel("🔄️")
      .setStyle(ButtonStyle.Secondary);

    const dislikeButton = new ButtonBuilder()
      .setCustomId(`dislike_${interactionId}`)
      .setLabel(`👎 ${dislikes}`)
      .setStyle(ButtonStyle.Secondary);

    return new ActionRowBuilder<ButtonBuilder>().addComponents(
      likeButton,
      regenerateButton,
      dislikeButton,
    );
  }
}
