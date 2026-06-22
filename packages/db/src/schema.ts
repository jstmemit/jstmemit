import { index, int, real, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

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
    imageUrl: text().notNull().unique(),
    source: text().notNull().default("attachment"),
    timestamp: int({ mode: "timestamp" }).notNull(),
    expiresAt: int({ mode: "timestamp" }),
});

export const generationsTable = sqliteTable(
    "generations_table",
    {
        id: int().primaryKey({ autoIncrement: true }),
        channelId: text().notNull(),
        templateId: int().notNull(),
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
    useAvatarsInMemes: int({ mode: "boolean" }).notNull().default(true),
    addedAt: int({ mode: "timestamp" }).notNull(),
});

export const ratingsTable = sqliteTable("ratings_table", {
    id: int().primaryKey({ autoIncrement: true }),
    messageId: text().notNull().unique(),
    likes: int().notNull().default(0),
    dislikes: int().notNull().default(0),
});

export const banditStatsTable = sqliteTable(
    "bandit_stats_table",
    {
        id: int().primaryKey({ autoIncrement: true }),
        scope: text({ enum: ["global", "channel", "user"] }).notNull(),
        scopeId: text().notNull(),
        templateId: int().notNull(),
        successes: real().notNull().default(0),
        failures: real().notNull().default(0),
        updatedAt: int({ mode: "timestamp" }).notNull(),
    },
    (table) => [uniqueIndex("bandit_scope_template_idx").on(table.scope, table.scopeId, table.templateId)],
);
