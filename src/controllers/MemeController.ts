import type { MemeTemplate } from '../models/MemeTemplate.js';
import { MemeRepository } from '../repositories/MemeRepository.js';
import { ChannelRepository } from '../repositories/ChannelRepository.js';
import { MessageRepository } from '../repositories/MessageRepository.js';
import { MarkovRepository } from '../repositories/MarkovRepository.js';
import { AttachmentRepository } from '../repositories/AttachmentRepository.js';

const memeRepository: MemeRepository = new MemeRepository();
const channelRepository: ChannelRepository = new ChannelRepository();
const messageRepository: MessageRepository = new MessageRepository();
const markovRepository: MarkovRepository = new MarkovRepository();
const attachmentRepository: AttachmentRepository = new AttachmentRepository();

export class MemeController {
  public async chooseMemeTemplate(discordChannelId: string): Promise<MemeTemplate> {
    const templateList: MemeTemplate[] = await memeRepository.getMemeTemplates();
    const index: number = Math.floor(Math.random() * templateList.length);
    return templateList[index]!;
  }

  public async generateMeme(template: MemeTemplate, discordChannelId: string): Promise<string> {
    const channelId: number = await channelRepository.getIdByDiscordChannelId(discordChannelId) as number;
    const allMessages = await messageRepository.findAllByChannelId(channelId);

    const messages: string[] = allMessages
      .map((message): string | null => message.content)
      .filter((content: string | null): content is string => content !== null);

    const neededMessagesCount: number = template.lines;
    const memeTexts: string[] = [];

    for (let i = 0; i < neededMessagesCount; i++) {
      const text: string = await markovRepository.generateMarkovText(messages);
      memeTexts.push(text);
    }

    if (template.overlays > 0) {
      const overlayImage = await attachmentRepository.getRandomImageByChannelId(channelId) as Buffer;

      const meme: string = await memeRepository.generateMeme(template, memeTexts, 'jpg', overlayImage);
      return meme;
    }
    const meme: string = await memeRepository.generateMeme(template, memeTexts, 'jpg');
    return meme;
  }
}
