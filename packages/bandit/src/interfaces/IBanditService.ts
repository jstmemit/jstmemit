import type { Template } from "@jstmemit/shared/models/Template";
import type { RatingKind } from "@jstmemit/shared/models/RatingKind";

export abstract class IBanditService {
    public abstract selectTemplate(channelId: string, userId?: string): Promise<Template | undefined>;

    public abstract recordRating(
        channelId: string,
        templateName: string,
        rating: RatingKind,
        userId?: string,
    ): Promise<void>;
}
