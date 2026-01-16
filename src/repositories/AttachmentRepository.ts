import { eq, count } from 'drizzle-orm';
import { db } from '../db/index.js';
import { images, messages } from '../db/schema.js';

export class AttachmentRepository {
  private readonly db = db;

  public create(messageId: number, imageData: Buffer) {
    return this.db.insert(images).values({
      messageId,
      imageData,
    });
  }

  public async getRandomImageByChannelId(channelId: number) {
    const countResult = await this.db
      .select({ count: count() })
      .from(images)
      .innerJoin(messages, eq(images.messageId, messages.id))
      .where(eq(messages.channelId, channelId));

    const totalCount: number = countResult[0]?.count ?? 0;

    if (totalCount === 0) {
      return null;
    }

    const randomOffset: number = Math.floor(Math.random() * totalCount);

    const result = await this.db
      .select()
      .from(images)
      .innerJoin(messages, eq(images.messageId, messages.id))
      .where(eq(messages.channelId, channelId))
      .limit(1)
      .offset(randomOffset);

    return result[0]?.images.imageData ?? null;
  }
}
