import type { MemeRatings } from "@jstmemit/shared/models/MemeRatings";

export abstract class IRatingsRepository {
  public abstract getMemeRatings(messageId: string): Promise<MemeRatings>;
}
