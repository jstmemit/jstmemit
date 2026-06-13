import type { ActionRowBuilder, ButtonBuilder } from "discord.js";

export abstract class IRatingsService {
  public abstract constructRatingButtons(
    interactionId: string,
    likes: number,
    dislikes: number,
  ): ActionRowBuilder<ButtonBuilder>;
}
