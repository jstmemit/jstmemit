import { type IMessagesRepository } from "../interfaces/IMessagesRepository.ts";
import { messagesTable } from "../schema.ts";
import { and, count, eq, gte, lte, sql } from "drizzle-orm";
import { db } from "../index.ts";

export class MessagesRepository implements IMessagesRepository {
  public async new(
    messageId: string,
    channelId: string,
    content: string,
    timestamp: Date,
  ): Promise<boolean> {
    try {
      const message: typeof messagesTable.$inferInsert = {
        messageId: messageId,
        channelId: channelId,
        content: content,
        timestamp: timestamp,
      };

      await db.insert(messagesTable).values(message);

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  }

  public async getMessagesAmountByChannelId(
    channelId: string,
  ): Promise<number> {
    try {
      const messages = await db
        .select({ amount: count(messagesTable.content) })
        .from(messagesTable)
        .where(eq(messagesTable.channelId, channelId));

      return messages[0]?.amount || 0;
    } catch (error) {
      console.error(error);

      return 0;
    }
  }

  public async getMessagesContentByChannelId(
    channelId: string,
    limit: number = 100,
    minLength?: number,
    maxLength?: number,
  ): Promise<string[]> {
    try {
      const messages = await db
        .select({ content: messagesTable.content })
        .from(messagesTable)
        .where(
          and(
            eq(messagesTable.channelId, channelId),
            minLength !== undefined
              ? gte(sql`length(${messagesTable.content})`, minLength)
              : undefined,
            maxLength !== undefined
              ? lte(sql`length(${messagesTable.content})`, maxLength)
              : undefined,
          ),
        )
        .orderBy(sql`random()`)
        .limit(limit);

      return messages.map((message) => message.content);
    } catch (error) {
      console.error(error);

      return [];
    }
  }
}
