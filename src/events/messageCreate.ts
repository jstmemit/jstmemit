import type { Attachment, Message } from 'discord.js';
import { ChatService } from '../services/ChatService.js';
import { UserController } from '../controllers/UserController.js';

const chatService = new ChatService();
const userController: UserController = new UserController();

export const messageCreate = async (message: Message): Promise<void> => {
  if (message.author.bot) {
    return;
  }

  if (message?.content || message.attachments.first()) {
    await chatService.receiveTextMessage(
      message?.content,
      message.id,
      message.channelId,
      message.guildId!,
      message.createdAt,
    );

    if (message.attachments.first()) {
      const attachments: Partial<Attachment>[] = message.attachments.map((attachment: Attachment): Partial<Attachment> => ({
        id: attachment.id,
        name: attachment.name,
        url: attachment.proxyURL,
        size: attachment.size,
        contentType: attachment.contentType,
      }));

      await chatService.receiveAttachments(message.id, message.channelId, attachments);
    }
  }

  await userController.createOrUpdateByDiscordUserId(
    message.author.id,
    message.author.displayAvatarURL({ size: 1024 }),
  );
};
