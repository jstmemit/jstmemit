import {
  blob, index, int, sqliteTable, text,
} from 'drizzle-orm/sqlite-core';

export const channels = sqliteTable('channels', {
  id: int().primaryKey({ autoIncrement: true }),
  languageCode: text().notNull(),
  guildId: int().notNull(),
  createdAt: int().notNull(),
});

export const messages = sqliteTable(
  'messages',
  {
    id: int().primaryKey({ autoIncrement: true }),
    channelId: int()
      .notNull()
      .references(() => channels.id, { onDelete: 'cascade' }),
    content: text().notNull(),
    createdAt: int().notNull(),
  },
  (table) => ({
    channelIdx: index('channel_idx').on(table.channelId),
  }
  ),
);

export const images = sqliteTable('images', {
  id: int().primaryKey({ autoIncrement: true }),
  messageId: int()
    .notNull()
    .references(() => messages.id, { onDelete: 'cascade' }),
  imageData: blob().notNull(),
});

export const users = sqliteTable('users', {
  id: int().primaryKey({ autoIncrement: true }),
  createdAt: int().notNull(),
});
