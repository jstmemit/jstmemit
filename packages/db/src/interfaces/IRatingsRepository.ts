import type { MemeRatings } from "@jstmemit/shared/models/MemeRatings";

export abstract class IRatingsRepository {
    public abstract getMemeRatings(messageId: string): Promise<MemeRatings>;
    public abstract addLikeRating(messageId: string): Promise<void>;
    public abstract addDislikeRating(messageId: string): Promise<void>;
}
