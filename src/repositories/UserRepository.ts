import { eq, count } from 'drizzle-orm';
import { db } from '../db/index.js';
import { users } from '../db/schema.js';

export class UserRepository {
  public create(discordUserId: string, avatarUrl: string) {
    return db.insert(users).values({
      discordUserId,
      avatarUrl,
      createdAt: Date.now(),
    });
  }

  public update(discordUserId: string, avatarUrl: string) {
    return db
      .update(users)
      .set({ avatarUrl })
      .where(eq(users.discordUserId, discordUserId));
  }

  public async findByDiscordUserId(discordUserId: string) {
    return db.select().from(users).where(eq(users.discordUserId, discordUserId)).limit(1);
  }

  public async getRandomUserAvatar(): Promise<string | null> {
    const countResult = await db
      .select({ count: count() })
      .from(users);

    const totalCount: number = countResult[0]?.count ?? 0;

    if (totalCount === 0) {
      return null;
    }

    const randomOffset: number = Math.floor(Math.random() * totalCount);

    const result = await db
      .select()
      .from(users)
      .limit(1)
      .offset(randomOffset);

    return result[0]?.avatarUrl ?? null;
  }
}
