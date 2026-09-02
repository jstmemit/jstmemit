CREATE TABLE `bandit_stats_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`scope` text NOT NULL,
	`scopeId` text NOT NULL,
	`templateName` text NOT NULL,
	`successes` real DEFAULT 0 NOT NULL,
	`failures` real DEFAULT 0 NOT NULL,
	`updatedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `channels_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`channelId` text NOT NULL UNIQUE,
	`enabled` integer DEFAULT false NOT NULL,
	`frequency` integer DEFAULT 20 NOT NULL,
	`useAvatarsInMemes` integer DEFAULT true NOT NULL,
	`addedAt` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `generations_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`channelId` text NOT NULL,
	`templateName` text NOT NULL,
	`createdAt` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `images_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`messageId` text NOT NULL,
	`channelId` text NOT NULL,
	`imageUrl` text NOT NULL UNIQUE,
	`source` text DEFAULT 'attachment' NOT NULL,
	`timestamp` integer NOT NULL,
	`expiresAt` integer
);
--> statement-breakpoint
CREATE TABLE `messages_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`messageId` text NOT NULL UNIQUE,
	`channelId` text NOT NULL,
	`content` text NOT NULL,
	`timestamp` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `ratings_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`messageId` text NOT NULL UNIQUE,
	`likes` integer DEFAULT 0 NOT NULL,
	`dislikes` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `bandit_scope_template_idx` ON `bandit_stats_table` (`scope`,`scopeId`,`templateName`);--> statement-breakpoint
CREATE INDEX `generations_channel_idx` ON `generations_table` (`channelId`);--> statement-breakpoint
CREATE INDEX `generations_template_idx` ON `generations_table` (`templateName`);--> statement-breakpoint
CREATE INDEX `messages_channel_idx` ON `messages_table` (`channelId`);