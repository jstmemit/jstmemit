import { index, int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const messagesTable = sqliteTable(
  "messages_table",
  {
    id: int().primaryKey({ autoIncrement: true }),
    messageId: text().notNull().unique(),
    channelId: text().notNull(),
    content: text().notNull(),
    timestamp: int({ mode: "timestamp" }).notNull(),
  },
  (table) => [index("messages_channel_idx").on(table.channelId)],
);

export const imagesTable = sqliteTable("images_table", {
  id: int().primaryKey({ autoIncrement: true }),
  messageId: text().notNull(),
  channelId: text().notNull(),
  imageUrl: text().notNull(),
  timestamp: int({ mode: "timestamp" }).notNull(),
});

export const reactionsTable = sqliteTable("reactions_table", {
  id: int().primaryKey({ autoIncrement: true }),
  messageId: text().notNull(),
  userId: text().notNull(),
  emoji: text().notNull(),
});

export const generationsTable = sqliteTable(
  "generations_table",
  {
    id: int().primaryKey({ autoIncrement: true }),
    messageId: text().notNull().unique(),
    channelId: text().notNull(),
    templateId: text().notNull(),
    createdAt: int({ mode: "timestamp" }).notNull(),
  },
  (table) => [
    index("generations_channel_idx").on(table.channelId),
    index("generations_template_idx").on(table.templateId),
  ],
);

export const channelsTable = sqliteTable("channels_table", {
  id: int().primaryKey({ autoIncrement: true }),
  channelId: text().notNull().unique(),
  enabled: int({ mode: "boolean" }).notNull().default(false),
  frequency: int().notNull().default(20),
  addedAt: int({ mode: "timestamp" }).notNull(),
});

export const ratingsTable = sqliteTable("ratings_table", {
  id: int().primaryKey({ autoIncrement: true }),
  messageId: text().notNull().unique(),
  channelId: text().notNull(),
  likes: int().notNull().default(0),
  dislikes: int().notNull().default(0),
});
