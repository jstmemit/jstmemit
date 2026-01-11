import type { MemeTemplate } from '../models/MemeTemplate.js';
import { MemeRepository } from '../repositories/MemeRepository.js';

const memeRepository: MemeRepository = new MemeRepository();

export class MemeController {
  public chooseMemeTemplate(discordChannelId: string): Promise<MemeTemplate> {
    const templates: Promise<MemeTemplate[]> = memeRepository.getMemeTemplates();

    return templates.then((templateList: MemeTemplate[]): MemeTemplate => {
      const index: number = Math.floor(Math.random() * templateList.length);
      return templateList[index]!;
    });
  }
}
