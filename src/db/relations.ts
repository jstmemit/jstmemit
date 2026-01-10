import { relations } from 'drizzle-orm/relations';
import { messages, images, channels } from './schema.js';

export const imagesRelations = relations(images, ({ one }) => ({
  message: one(messages, {
    fields: [images.messageId],
    references: [messages.id],
  }),
}));

export const messagesRelations = relations(messages, ({ one, many }) => ({
  images: many(images),
  channel: one(channels, {
    fields: [messages.channelId],
    references: [channels.id],
  }),
}));

export const channelsRelations = relations(channels, ({ many }) => ({
  messages: many(messages),
}));
