import { eq } from 'drizzle-orm';
import { db } from '../db/index.js';
import { channels } from '../db/schema.js';

export class ChannelRepository {
  private readonly db = db;

  public async create(discordChannelId: string, discordGuildId: string) {
    return this.db.insert(channels).values({
      discordChannelId,
      discordGuildId,
      languageCode: 'en',
      isEnabled: 0,
      createdAt: Date.now(),
    });
  }

  public async getChannelByDiscordId(discordChannelId: string) {
    return this.db.select().from(channels).where(eq(channels.discordChannelId, discordChannelId)).limit(1);
  }

  public async getDiscordChannelIdById(id: number) {
    const result = await this.db.select().from(channels).where(eq(channels.id, id));
    return result[0]?.discordChannelId;
  }

  public async getIdByDiscordChannelId(discordChannelId: string) {
    const result = await this.db.select().from(channels).where(eq(channels.discordChannelId, discordChannelId));
    return result[0]?.id;
  }

  public async existsByDiscordChannelId(discordChannelId: string) {
    const result = await this.db.select().from(channels).where(eq(channels.discordChannelId, discordChannelId));
    return result.length > 0;
  }

  public async isChannelEnabled(discordChannelId: string): Promise<boolean> {
    const channel = await this.getChannelByDiscordId(discordChannelId);
    return channel[0]?.isEnabled === 1;
  }

  public async switchChannelByDiscordId(discordChannelId: string) {
    const channel = await this.getChannelByDiscordId(discordChannelId);

    const isEnabled = channel[0]?.isEnabled === 1 ? 0 : 1;
    return this.db.update(channels).set({ isEnabled }).where(eq(channels.discordChannelId, discordChannelId));
  }
}
