import type { ActionRowBuilder, ButtonBuilder, ButtonInteraction } from "discord.js";

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
    ): ActionRowBuilder<ButtonBuilder>;
    public abstract updateRatingButtons(
        interaction: ButtonInteraction,
        generationId: number,
        templateName?: string,
    ): Promise<void>;
}
