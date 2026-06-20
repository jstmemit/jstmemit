import type {
    ActionRowBuilder,
    ButtonBuilder,
    ButtonInteraction,
} from "discord.js";

export abstract class IRatingsService {
    public abstract addRating(
        userId: string,
        messageId: string,
        rating: "like" | "dislike",
    ): Promise<boolean>;
    public abstract constructRatingButtons(
        likes: number,
        dislikes: number,
        generationId: number,
    ): ActionRowBuilder<ButtonBuilder>;
    public abstract updateRatingButtons(
        interaction: ButtonInteraction,
        generationId: number,
    ): Promise<void>;
}
