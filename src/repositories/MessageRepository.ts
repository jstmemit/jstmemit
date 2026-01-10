import { and, eq, lt } from 'drizzle-orm';
import { db } from '../db/index.js';
import { messages } from '../db/schema.js';

export class MessageRepository {
  private readonly db = db;

  public async create(channelId: number, content: string) {
    return this.db.insert(messages).values({
      channelId,
      content,
      createdAt: Date.now(),
    });
  }

  public async findAllByChannelId(channelId: number) {
    return this.db.select().from(messages).where(eq(messages.channelId, channelId));
  }

  public async deleteOlderThanInChannelId(channelId: number, timestamp: number) {
    return this.db
      .delete(messages)
      .where(
        and(
          eq(messages.channelId, channelId),
          lt(messages.createdAt, timestamp),
        ),
      );
  }
}
