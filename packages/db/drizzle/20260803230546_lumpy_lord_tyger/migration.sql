CREATE TABLE `narrations_table` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`channelId` text NOT NULL,
	`voice` text NOT NULL,
	`createdAt` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `narrations_channel_idx` ON `narrations_table` (`channelId`);