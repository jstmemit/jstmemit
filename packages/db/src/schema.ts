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
    (table) => [
        index("messages_channel_timestamp_idx").on(table.channelId, table.timestamp),
        index("messages_timestamp_idx").on(table.timestamp),
    ],
);

export const imagesTable = sqliteTable(
    "images_table",
    {
        id: int().primaryKey({ autoIncrement: true }),
        messageId: text().notNull(),
        channelId: text().notNull(),
        imageUrl: text().notNull().unique(),
        source: text().notNull().default("attachment"),
        timestamp: int({ mode: "timestamp" }).notNull(),
        expiresAt: int({ mode: "timestamp" }),
    },
    (table) => [
        index("images_channel_source_timestamp_idx").on(table.channelId, table.source, table.timestamp),
        index("images_expires_at_idx").on(table.expiresAt),
        index("images_timestamp_idx").on(table.timestamp),
    ],
);

export const generationsTable = sqliteTable(
    "generations_table",
    {
        id: int().primaryKey({ autoIncrement: true }),
        channelId: text().notNull(),
        templateName: text().notNull(),
        createdAt: int({ mode: "timestamp" }).notNull(),
    },
    (table) => [
        index("generations_channel_idx").on(table.channelId),
        index("generations_template_idx").on(table.templateName),
    ],
);

export const narrationsTable = sqliteTable(
    "narrations_table",
    {
        id: int().primaryKey({ autoIncrement: true }),
        channelId: text().notNull(),
        voice: text().notNull(),
        createdAt: int({ mode: "timestamp" }).notNull(),
    },
    (table) => [index("narrations_channel_idx").on(table.channelId)],
);

export const channelsTable = sqliteTable("channels_table", {
    id: int().primaryKey({ autoIncrement: true }),
    channelId: text().notNull().unique(),
    enabled: int({ mode: "boolean" }).notNull().default(false),
    frequency: int().notNull().default(10),
    useAvatarsInMemes: int({ mode: "boolean" }).notNull().default(true),
    addedAt: int({ mode: "timestamp" }).notNull(),
    turbo: int({ mode: "boolean" }).notNull().default(false),
    milestones: int({ mode: "boolean" }).notNull().default(true),
    font: text(),
});

export const ratingsTable = sqliteTable(
    "ratings_table",
    {
        id: int().primaryKey({ autoIncrement: true }),
        messageId: text().notNull().unique(),
        channelId: text().notNull().default(""),
        likes: int().notNull().default(0),
        dislikes: int().notNull().default(0),
    },
    (table) => [index("ratings_channel_idx").on(table.channelId)],
);

export const banditStatsTable = sqliteTable(
    "bandit_stats_table",
    {
        id: int().primaryKey({ autoIncrement: true }),
        scope: text({ enum: ["global", "channel", "user"] }).notNull(),
        scopeId: text().notNull(),
        templateName: text().notNull(),
        successes: real().notNull().default(0),
        failures: real().notNull().default(0),
        updatedAt: int({ mode: "timestamp" }).notNull(),
    },
    (table) => [uniqueIndex("bandit_scope_template_idx").on(table.scope, table.scopeId, table.templateName)],
);
