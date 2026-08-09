import { ActionRowBuilder, ButtonBuilder, type ButtonInteraction, ButtonStyle } from "discord.js";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";
import type { IRatingsRepository } from "@jstmemit/db/interfaces/IRatingsRepository";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";
import ms from "ms";

export class RatingsService implements IRatingsService {
    private readonly _ratingsRepository: IRatingsRepository;
    private readonly _cacheService: ICacheService;

    public constructor(ratingsRepository: IRatingsRepository, cacheService: ICacheService) {
        this._ratingsRepository = ratingsRepository;
        this._cacheService = cacheService;
    }

    /**
     * Checks if a user already rated the same meme recently and if not,
     * then calls RatingsRepository and saves his rating.
     *
     * @param userId
     * @param messageId
     * @param channelId
     * @param rating
     *
     * @author Kyrylo Maliuha
     */
    public async addRating(
        userId: string,
        messageId: string,
        channelId: string,
        rating: "like" | "dislike",
    ): Promise<boolean> {
        const alreadyRated: boolean | undefined = await this._cacheService.get(`rating:${messageId}:${userId}`);

        if (alreadyRated) {
            return false;
        }

        if (rating === "like") {
            await this._ratingsRepository.addLikeRating(messageId, channelId);
        }

        if (rating === "dislike") {
            await this._ratingsRepository.addDislikeRating(messageId, channelId);
        }

        await this._cacheService.set(`rating:${messageId}:${userId}`, true, ms("1d"));

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
            .setEmoji("👍")
            .setLabel(`${likes}`)
            .setStyle(ButtonStyle.Success);

        const regenerateButton: ButtonBuilder = new ButtonBuilder()
            .setCustomId(`meme:${generationId}`)
            .setEmoji("🔄️")
            .setStyle(ButtonStyle.Primary);

        const dislikeButton: ButtonBuilder = new ButtonBuilder()
            .setCustomId(`dislike:${generationId}`)
            .setEmoji("👎")
            .setLabel(`${dislikes}`)
            .setStyle(ButtonStyle.Danger);

        return new ActionRowBuilder<ButtonBuilder>().addComponents(likeButton, regenerateButton, dislikeButton);
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
    public async updateRatingButtons(interaction: ButtonInteraction, generationId: number): Promise<void> {
        const messageId: string = interaction.message.id;

        const { likes, dislikes } = await this._ratingsRepository.getMemeRatings(messageId);

        await interaction.editReply({
            components: [this.constructRatingButtons(likes, dislikes, generationId)],
        });
    }
}
