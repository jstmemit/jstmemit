import {
    ActionRowBuilder,
    ButtonBuilder,
    type ButtonInteraction,
    ButtonStyle,
} from "discord.js";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";
import type { IRatingsRepository } from "@jstmemit/db/interfaces/IRatingsRepository";

export class RatingsService implements IRatingsService {
    // doesn't have to persist because template analytics is stored in database anyway
    // and who exactly voted doesn't matter that much
    private _ratings: Map<string, Set<string>> = new Map();

    private readonly _ratingsRepository: IRatingsRepository;

    public constructor(ratingsRepository: IRatingsRepository) {
        this._ratingsRepository = ratingsRepository;
    }

    /**
     * Checks if a user already rated the same meme recently and if not,
     * then calls RatingsRepository and saves his rating.
     *
     * @param userId
     * @param messageId
     * @param rating
     *
     * @author Kyrylo Maliuha
     */
    public async addRating(
        userId: string,
        messageId: string,
        rating: "like" | "dislike",
    ): Promise<boolean> {
        const alreadyRated: boolean = this._checkIfUserRated(userId, messageId);

        if (alreadyRated) {
            return false;
        }

        if (rating === "like") {
            await this._ratingsRepository.addLikeRating(messageId);
        }

        if (rating === "dislike") {
            await this._ratingsRepository.addDislikeRating(messageId);
        }

        this._ratings.get(messageId)?.add(userId);

        return true;
    }

    /**
     * Constructs a row of discord.js buttons (like, regenerate, dislike).
     *
     * @param likes
     * @param dislikes
     * @param generationId
     *
     * @author Kyrylo Maliuha
     */
    public constructRatingButtons(
        likes: number,
        dislikes: number,
        generationId: number,
    ): ActionRowBuilder<ButtonBuilder> {
        const likeButton: ButtonBuilder = new ButtonBuilder()
            .setCustomId(`like:${generationId}`)
            .setLabel(`👍 ${likes}`)
            .setStyle(ButtonStyle.Success);

        const regenerateButton: ButtonBuilder = new ButtonBuilder()
            .setCustomId(`meme`)
            .setLabel("🔄️")
            .setStyle(ButtonStyle.Secondary);

        const dislikeButton: ButtonBuilder = new ButtonBuilder()
            .setCustomId(`dislike:${generationId}`)
            .setLabel(`👎 ${dislikes}`)
            .setStyle(ButtonStyle.Danger);

        return new ActionRowBuilder<ButtonBuilder>().addComponents(
            likeButton,
            regenerateButton,
            dislikeButton,
        );
    }

    /**
     * Fetches the meme message from the bot, then likes/dislikes from the database
     * for it and updates the entire button row.
     *
     * @param interaction
     * @param generationId
     *
     * @author Kyrylo Maliuha
     */
    public async updateRatingButtons(
        interaction: ButtonInteraction,
        generationId: number,
    ): Promise<void> {
        const messageId: string = interaction.message.id;

        const { likes, dislikes } =
            await this._ratingsRepository.getMemeRatings(messageId);

        await interaction.update({
            components: [
                this.constructRatingButtons(likes, dislikes, generationId),
            ],
        });
    }

    /**
     * Gets a Set of users who rated the meme with passed messageId,
     * if Set doesn't exist returns false (didn't rate) and creates one.
     * If exists, checks if a passed userId is there and returns true (rated)
     * if it is.
     *
     * @param userId
     * @param messageId
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private _checkIfUserRated(userId: string, messageId: string): boolean {
        const userRatings: Set<string> | undefined =
            this._ratings.get(messageId);

        if (!userRatings) {
            this._ratings.set(messageId, new Set());
            return false;
        }

        return userRatings.has(userId);
    }
}
