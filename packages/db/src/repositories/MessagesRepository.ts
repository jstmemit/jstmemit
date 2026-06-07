import { type IMessagesRepository } from "../interfaces/IMessagesRepository.ts";
import { messagesTable } from "../schema.ts";
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
}
