import type { MemeTemplate } from '../models/MemeTemplate.js';
import { MemeRepository } from '../repositories/MemeRepository.js';
import { ChannelRepository } from '../repositories/ChannelRepository.js';
import { MessageRepository } from '../repositories/MessageRepository.js';
import { MarkovRepository } from '../repositories/MarkovRepository.js';

const memeRepository: MemeRepository = new MemeRepository();
const channelRepository: ChannelRepository = new ChannelRepository();
const messageRepository: MessageRepository = new MessageRepository();
const markovRepository: MarkovRepository = new MarkovRepository();

export class MemeController {
  public async chooseMemeTemplate(discordChannelId: string): Promise<MemeTemplate> {
    const templateList = await memeRepository.getMemeTemplates();
    const index: number = Math.floor(Math.random() * templateList.length);
    return templateList[index]!;
  }

  public async generateMeme(template: MemeTemplate, discordChannelId: string): Promise<string> {
    const channelId: number = await channelRepository.getIdByDiscordChannelId(discordChannelId) as number;
    const allMessages = await messageRepository.findAllByChannelId(channelId);

    const messages: string[] = allMessages
      .map((message) => message.content)
      .filter((content): content is string => content !== null);

    const neededMessagesCount: number = template.lines;
    const memeTexts: string[] = [];

    for (let i = 0; i < neededMessagesCount; i++) {
      const text: string = await markovRepository.generateMarkovText(messages);
      memeTexts.push(text);
    }

    const meme: string = await memeRepository.generateMeme(template, memeTexts);
    return meme;
  }
}
