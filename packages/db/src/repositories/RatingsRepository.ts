import type { MemeRatings } from "@jstmemit/shared/models/MemeRatings";
import { db } from "../index.ts";
import { ratingsTable } from "../schema.ts";
import { eq } from "drizzle-orm";
import type { IRatingsRepository } from "../interfaces/IRatingsRepository.ts";

export class RatingsRepository implements IRatingsRepository {
  public async getMemeRatings(messageId: string): Promise<MemeRatings> {
    try {
      const ratings = await db
        .select()
        .from(ratingsTable)
        .where(eq(ratingsTable.messageId, messageId))
        .limit(1);

      return {
        likes: ratings[0]?.likes || 0,
        dislikes: ratings[0]?.dislikes || 0,
      };
    } catch (error) {
      console.error(error);

      return {
        likes: 0,
        dislikes: 0,
      };
    }
  }
}
