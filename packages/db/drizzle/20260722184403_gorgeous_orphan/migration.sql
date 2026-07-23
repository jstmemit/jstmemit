CREATE INDEX `images_channel_source_idx` ON `images_table` (`channelId`,`source`);--> statement-breakpoint
CREATE INDEX `images_expires_at_idx` ON `images_table` (`expiresAt`);--> statement-breakpoint
CREATE INDEX `images_timestamp_idx` ON `images_table` (`timestamp`);--> statement-breakpoint
CREATE INDEX `messages_timestamp_idx` ON `messages_table` (`timestamp`);