import { UserRepository } from '../repositories/UserRepository.js';

const userRepository: UserRepository = new UserRepository();

export class UserController {
  public async createOrUpdateByDiscordUserId(discordUserId: string, avatarUrl: string) {
    const existingUser = await userRepository.findByDiscordUserId(discordUserId);

    if (existingUser.length > 0) {
      return userRepository.update(discordUserId, avatarUrl);
    }
    return userRepository.create(discordUserId, avatarUrl);
  }
}
