import { db } from '../db/index.js';
import { images } from '../db/schema.js';

export class AttachmentRepository {
  private readonly db = db;

  public create(messageId: number, imageData: Buffer) {
    return this.db.insert(images).values({
      messageId,
      imageData,
    });
  }
}
