ALTER TABLE `ratings_table` ADD `channelId` text DEFAULT '' NOT NULL;--> statement-breakpoint
PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_channels_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`channelId` text NOT NULL UNIQUE,
	`enabled` integer DEFAULT false NOT NULL,
	`frequency` integer DEFAULT 10 NOT NULL,
	`useAvatarsInMemes` integer DEFAULT true NOT NULL,
	`addedAt` integer NOT NULL,
	`turbo` integer DEFAULT false NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_channels_table`(`id`, `channelId`, `enabled`, `frequency`, `useAvatarsInMemes`, `addedAt`, `turbo`) SELECT `id`, `channelId`, `enabled`, `frequency`, `useAvatarsInMemes`, `addedAt`, `turbo` FROM `channels_table`;--> statement-breakpoint
DROP TABLE `channels_table`;--> statement-breakpoint
ALTER TABLE `__new_channels_table` RENAME TO `channels_table`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
DROP INDEX IF EXISTS `images_channel_source_idx`;--> statement-breakpoint
DROP INDEX IF EXISTS `messages_channel_idx`;--> statement-breakpoint
CREATE INDEX `images_channel_source_timestamp_idx` ON `images_table` (`channelId`,`source`,`timestamp`);--> statement-breakpoint
CREATE INDEX `messages_channel_timestamp_idx` ON `messages_table` (`channelId`,`timestamp`);--> statement-breakpoint
CREATE INDEX `ratings_channel_idx` ON `ratings_table` (`channelId`);