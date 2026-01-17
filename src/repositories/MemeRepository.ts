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
    animated: boolean = false,
    overlayImage?: Buffer,
  ) {
    const text: string = texts.join('/');
    const memeUrl: string = template?.blank.replace('.jpg', '');

    const params = new URLSearchParams();
    params.set('width', '2000');

    const styles: string[] = [];
    if (animated) {
      styles.push('animated');
    }
    if (overlayImage) {
      styles.push(await temporaryImageRepository.uploadImage(overlayImage));
    }
    if (styles.length > 0) {
      params.set('style', styles.join(','));
    }

    const response: Response = await fetch(
      `${memeUrl!}/${text}.${format}?${params.toString()}`,
    );
    return response.url;
  }
}
