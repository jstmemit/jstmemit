import { eq, and } from 'drizzle-orm';
import { db } from '../db/index.js';
import { settings } from '../db/schema.js';

export class SettingsRepository {
  public async isSettingEnabled(channelId: number, setting: string): Promise<boolean> {
    const result = await db
      .select()
      .from(settings)
      .where(and(eq(settings.channelId, channelId), eq(settings.key, setting)))
      .limit(1);

    return result[0]?.value === '1';
  }

  public async setSetting(channelId: number, setting: string, value: boolean): Promise<void> {
    const stringValue = value ? '1' : '0';
    const existingSetting = await db
      .select()
      .from(settings)
      .where(and(eq(settings.channelId, channelId), eq(settings.key, setting)))
      .limit(1);

    if (existingSetting.length > 0) {
      await db
        .update(settings)
        .set({ value: stringValue })
        .where(and(eq(settings.channelId, channelId), eq(settings.key, setting)));
    } else {
      await db
        .insert(settings)
        .values({ channelId, key: setting, value: stringValue });
    }
  }

  public async toggleSetting(channelId: number, setting: string): Promise<void> {
    const isEnabled: boolean = await this.isSettingEnabled(channelId, setting);
    await this.setSetting(channelId, setting, !isEnabled);
  }
}
