import {
  blob, int, sqliteTable, text,
} from 'drizzle-orm/sqlite-core';

export const channels = sqliteTable('channels', {
  id: int().primaryKey({ autoIncrement: true }),
  languageCode: text().notNull(),
  isEnabled: int().notNull(),
  discordChannelId: text().notNull(),
  discordGuildId: text().notNull(),
  createdAt: int().notNull(),
});

export const settings = sqliteTable('settings', {
  id: int().primaryKey({ autoIncrement: true }),
  channelId: int().notNull().references(() => channels.id, { onDelete: 'cascade' }),
  key: text().notNull().unique(),
  value: text().notNull(),
});

export const users = sqliteTable('users', {
  id: int().primaryKey({ autoIncrement: true }),
  discordUserId: text().notNull(),
  avatarUrl: text().notNull(),
  createdAt: int().notNull(),
});

export const messages = sqliteTable('messages', {
  id: int().primaryKey({ autoIncrement: true }),
  discordMessageId: text().notNull(),
  channelId: int().notNull().references(() => channels.id, { onDelete: 'cascade' }),
  content: text(),
  createdAt: int().notNull(),
});

export const images = sqliteTable('images', {
  id: int().primaryKey({ autoIncrement: true }).notNull(),
  messageId: int().notNull().references(() => messages.id, { onDelete: 'cascade' }),
  imageData: blob().notNull(),
});
