import type { MemeTemplate } from '../models/MemeTemplate.js';
import { TemporaryImageRepository } from './TemporaryImageRepository.js';

const temporaryImageRepository: TemporaryImageRepository = new TemporaryImageRepository();

export class MemeRepository {
  public async getMemeTemplates(): Promise<MemeTemplate[]> {
    const response: Response = await fetch(`${process.env.MEMEGEN_BASE_URL!}/templates/`);
    return await response.json() as MemeTemplate[];
  }

  public async generateMeme(
    template: MemeTemplate,
    texts: string[],
    format: string = 'webp',
    overlayImage?: Buffer,
  ) {
    const text: string = texts.join('/');
    const memeUrl: string = template?.blank.replace('.jpg', '');
    const style: string = overlayImage ? `?style=${encodeURIComponent(await temporaryImageRepository.uploadImage(overlayImage))}` : '';

    const response: Response = await fetch(`${memeUrl!}/${text}.${format}${style}?height=1500`);
    return response.url;
  }
}
