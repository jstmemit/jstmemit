import type { MemeTemplate } from '../models/MemeTemplate.js';
import { MemeRepository } from '../repositories/MemeRepository.js';
import { ChannelRepository } from '../repositories/ChannelRepository.js';
import { MessageRepository } from '../repositories/MessageRepository.js';
import { MarkovRepository } from '../repositories/MarkovRepository.js';
import { memes } from '../config/memes.js';
import { AttachmentController } from './AttachmentController.js';
import { AnalyticsService } from '../services/AnalyticsService.js';

const memeRepository: MemeRepository = new MemeRepository();
const channelRepository: ChannelRepository = new ChannelRepository();
const messageRepository: MessageRepository = new MessageRepository();
const markovRepository: MarkovRepository = new MarkovRepository();
const attachmentController: AttachmentController = new AttachmentController();
const analyticsService: AnalyticsService = new AnalyticsService();

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

    const override = memes[template.id];
    const emptyLines = new Set(override?.emptyLines ?? []);

    const neededMessagesCount: number = template.lines;
    const memeTexts: string[] = [];

    for (let i = 0; i < neededMessagesCount; i++) {
      if (emptyLines.has(i)) {
        memeTexts.push('_');
      } else {
        const text: string = await markovRepository.generateMarkovText(messages);
        memeTexts.push(text);
      }
    }

    console.log(template);
    analyticsService.captureEvent(
      discordChannelId,
      'meme-generated',
      { ...template },
    );

    const animated: boolean = template.styles.includes('animated');
    const format: 'webp' | 'jpg' = animated ? 'webp' : 'jpg';

    const useOverlays = template.overlays > 0 && !override?.disableImages;

    if (useOverlays) {
      const overlayImage = (await attachmentController.getRandomImageByChannelId(
        channelId,
      )) as Buffer;

      const meme: string = await memeRepository.generateMeme(
        template,
        memeTexts,
        format,
        overlayImage,
      );
      return meme;
    }
    const meme: string = await memeRepository.generateMeme(
      template,
      memeTexts,
      format,
    );
    return meme;
  }
}
