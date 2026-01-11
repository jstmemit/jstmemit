import type { MemeTemplate } from '../models/MemeTemplate.js';

export class MemeRepository {
  public async getMemeTemplates(): Promise<MemeTemplate[]> {
    const response: Response = await fetch(`${process.env.MEMEGEN_BASE_URL!}/templates/`);
    return await response.json() as MemeTemplate[];
  }
}
