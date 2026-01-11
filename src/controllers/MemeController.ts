import type { MemeTemplate } from '../models/MemeTemplate.js';
import { MemeRepository } from '../repositories/MemeRepository.js';

const memeRepository: MemeRepository = new MemeRepository();

export class MemeController {
  public async chooseMemeTemplate(discordChannelId: string): Promise<MemeTemplate> {
    const templateList = await memeRepository.getMemeTemplates();
    const index: number = Math.floor(Math.random() * templateList.length);
    return templateList[index]!;
  }
}
