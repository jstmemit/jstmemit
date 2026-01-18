import type { MemeTemplate } from '../models/MemeTemplate.js';
import { TemporaryImageRepository } from './TemporaryImageRepository.js';
import { templates } from '../config/templates.js';

const temporaryImageRepository: TemporaryImageRepository = new TemporaryImageRepository();

export class MemeRepository {
  public async getMemeTemplates(): Promise<MemeTemplate[]> {
    return templates;
  }

  public async generateMeme(
    template: MemeTemplate,
    texts: string[],
    format: string = 'webp',
    overlayImage?: Buffer,
  ) {
    const text: string = this.encodePath(texts);
    const memeUrl: string = template?.blank.replace('.jpg', '');

    const params = new URLSearchParams();
    params.set('width', '2000');

    const styles: string[] = [];
    if (template.styles && template.styles.length > 0) {
      const filteredStyles: string[] = template.styles.filter((s) => s !== 'animated' && s !== 'default');
      if (filteredStyles.length > 0) {
        const randomStyle: string = filteredStyles[Math.floor(Math.random() * filteredStyles.length)] as string;
        styles.push(randomStyle);
      }
    }

    if (overlayImage) {
      styles.push(await temporaryImageRepository.uploadImage(overlayImage));
    }
    if (styles.length > 0) {
      params.set('style', styles.join(','));
    }

    const url = `${memeUrl!}/${text}.${format}?${params.toString()}`;

    const response: Response = await fetch(url);
    return response.url;
  }

  private encodeText(input: string): string {
    return input
      .replace(/_/g, '__')
      .replace(/-/g, '--')
      .replace(/\r\n|\r|\n/g, '')
      .replace(/\?/g, '~q')
      .replace(/&/g, '~a')
      .replace(/%/g, '~p')
      .replace(/#/g, '~h')
      .replace(/\//g, '~s')
      .replace(/\\/g, '~b')
      .replace(/</g, '~l')
      .replace(/>/g, '~g')
      .replace(/"/g, "''")
      .replace(/ /g, '_');
  }

  private encodePath(texts: string[]): string {
    return texts.map((t) => this.encodeText(t)).join('/');
  }
}
