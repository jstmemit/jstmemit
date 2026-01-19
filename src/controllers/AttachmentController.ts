import { AttachmentRepository } from '../repositories/AttachmentRepository.js';
import { UserRepository } from '../repositories/UserRepository.js';

const attachmentRepository: AttachmentRepository = new AttachmentRepository();
const userRepository: UserRepository = new UserRepository();

export class AttachmentController {
  public async getRandomImageByChannelId(channelId: number) {
    const images: Buffer[] = [];

    images.push(await attachmentRepository.getRandomImageByChannelId(channelId) as Buffer);

    const userAvatar: string | null = await userRepository.getRandomUserAvatar();
    if (userAvatar) {
      const response: Response = await fetch(userAvatar);
      const buffer: ArrayBuffer = await response.arrayBuffer();
      images.push(Buffer.from(buffer));
    }

    return images[Math.floor(Math.random() * images.length)];
  }
}
