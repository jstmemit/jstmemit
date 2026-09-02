import type { ActionRowBuilder, ButtonBuilder, ButtonInteraction } from "discord.js";
import type { Font } from "@jstmemit/shared/models/Font";

export abstract class IRatingsService {
    public abstract addRating(
        userId: string,
        messageId: string,
        channelId: string,
        rating: "like" | "dislike",
    ): Promise<boolean>;
    public abstract constructRatingButtons(
        likes: number,
        dislikes: number,
        generationId: number,
        templateName?: string,
        font?: Font["value"],
    ): ActionRowBuilder<ButtonBuilder>;
    public abstract updateRatingButtons(
        interaction: ButtonInteraction,
        generationId: number,
        templateName?: string,
    ): Promise<void>;
}
