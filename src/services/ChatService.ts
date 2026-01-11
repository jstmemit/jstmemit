import type { Attachment } from 'discord.js';
import { MessageRepository } from '../repositories/MessageRepository.js';
import { ChannelRepository } from '../repositories/ChannelRepository.js';
import { AttachmentRepository } from '../repositories/AttachmentRepository.js';

const messageRepository: MessageRepository = new MessageRepository();
const channelRepository: ChannelRepository = new ChannelRepository();
const attachmentRepository: AttachmentRepository = new AttachmentRepository();

export class ChatService {
  public async receiveTextMessage(
    content: string,
    discordMessageId: string,
    discordChannelId: string,
    discordGuildId: string,
    createdAt: Date,
  ): Promise<void> {
    const channelExists: boolean = await channelRepository.existsByDiscordChannelId(discordChannelId);

    if (!channelExists) {
      await channelRepository.create(
        discordChannelId,
        discordGuildId,
      );
    }

    if (!(await channelRepository.isChannelEnabled(discordChannelId))) {
      return;
    }

    await messageRepository.create(
      await channelRepository.getIdByDiscordChannelId(discordChannelId) as number,
      content,
      discordMessageId,
      createdAt,
    );
  }

  public async receiveAttachments(
    discordMessageId: string,
    discordChannelId: string,
    attachments: Partial<Attachment>[],
  ): Promise<void> {
    if (!(await channelRepository.isChannelEnabled(discordChannelId))) {
      return;
    }

    await Promise.all(
      attachments.map(async (attachment: Partial<Attachment>): Promise<void> => {
        if (!attachment.url) {
          return;
        }

        const arrayBuffer: ArrayBuffer = await fetch(attachment.url).then(
          (res: Response): Promise<ArrayBuffer> => res.arrayBuffer(),
        );

        const imageData: Buffer = Buffer.from(arrayBuffer);

        const message = (
          await messageRepository.findByDiscordMessageId(discordMessageId)
        )[0];

        if (!message?.id) {
          return;
        }

        const messageId: number = message.id as number;

        await attachmentRepository.create(messageId, imageData);
      }),
    );
  }
}
