import type {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonInteraction,
} from "discord.js";

export abstract class IRatingsService {
  public abstract constructRatingButtons(
    likes: number,
    dislikes: number,
  ): ActionRowBuilder<ButtonBuilder>;
  public abstract updateRatingButtons(
    interaction: ButtonInteraction,
  ): Promise<void>;
}
