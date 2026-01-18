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
    animated: boolean = false,
    overlayImage?: Buffer,
  ) {
    const text: string = this.encodePath(texts);
    const memeUrl: string = template?.blank.replace('.jpg', '');

    const params = new URLSearchParams();
    params.set('width', '2000');

    const styles: string[] = [];
    // if (animated) {
    //   styles.push('animated');
    // }
    if (overlayImage) {
      styles.push(await temporaryImageRepository.uploadImage(overlayImage));
    }
    if (styles.length > 0) {
      params.set('style', styles.join(','));
    }

    const url = `${memeUrl!}/${text}.${format}?${params.toString()}`;
    console.log(url);

    const response: Response = await fetch(url);
    return response.url;
  }

  private encodeText(input: string): string {
    return input
      .replace(/_/g, '__')
      .replace(/-/g, '--')
      .replace(/\r\n|\r|\n/g, '~n')
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
