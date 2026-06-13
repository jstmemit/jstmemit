import type { ButtonInteraction } from "discord.js";

export abstract class IRatingsController {
  public abstract handleRatingInteraction(
    interaction: ButtonInteraction,
    rating: "like" | "dislike",
  ): Promise<void>;
}
