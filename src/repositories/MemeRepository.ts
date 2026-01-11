import type { MemeTemplate } from '../models/MemeTemplate.js';

export class MemeRepository {
  public async getMemeTemplates(): Promise<MemeTemplate[]> {
    const response: Response = await fetch(`${process.env.MEMEGEN_BASE_URL!}/templates/`);
    return await response.json() as MemeTemplate[];
  }

  public async generateMeme(template: MemeTemplate, texts: string[], format: string = 'webp') {
    const text: string = texts.join('/');
    const memeUrl: string = template?.blank.replace('.jpg', '');

    const response: Response = await fetch(`${memeUrl!}/${text}.${format}`);
    return response.url;
  }
}
