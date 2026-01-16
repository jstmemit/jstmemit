import type { ImgbbResponse } from '../models/ImgbbResponse.js';

export class TemporaryImageRepository {
  private readonly apiKey: string = process.env.IMGBB_API_KEY!;

  private readonly baseUrl: string = process.env.IMGBB_BASE_URL!;

  public async uploadImage(image: Buffer, expiration: number = 60): Promise<string> {
    const base64Image: string = image.toString('base64');

    const formData: FormData = new FormData();
    formData.append('image', base64Image);

    const response: Response = await fetch(
      `${this.baseUrl}?key=${this.apiKey}&expiration=${expiration}`,
      { method: 'POST', body: formData },
    );

    const result: ImgbbResponse = await response.json() as ImgbbResponse;
    return result.data.url;
  }
}
