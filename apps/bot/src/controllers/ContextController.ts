import type { IContextController } from "#/interfaces/IContextController.ts";
import type { GuildEmoji } from "discord.js";
import { type Guild, type Sticker } from "discord.js";
import { type Collection, type GuildMember, type Message, type TextBasedChannel } from "discord.js";
import { PermissionFlagsBits } from "discord.js";
import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import { Env } from "@jstmemit/shared/schemas/Env";
import { analytics } from "@jstmemit/analytics";
import { logger } from "#/container.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";

const env = Env.parse(process.env);

export class ContextController implements IContextController {
    private readonly _contextService: IContextService;
    private readonly _channelsService: IChannelsService;
    private readonly _memesController: IMemesController;
    private readonly _componentsService: IComponentsService;

    public constructor(
        contextService: IContextService,
        channelsService: IChannelsService,
        memesController: IMemesController,
        componentsService: IComponentsService,
    ) {
        this._contextService = contextService;
        this._channelsService = channelsService;
        this._memesController = memesController;
        this._componentsService = componentsService;
    }

    /**
     * Handles new messages. Checks if a channel is enabled and
     * then calls ContextService to save images, avatars and text content
     *
     * @param message
     *
     * @author Kyrylo Maliuha
     */
    public async handleNewMessage(message: Message): Promise<void> {
        try {
            let mentioned: boolean = false;
            const { id, content, channelId, attachments, author } = message;

            if (!channelId) {
                return;
            }

            if (content?.includes(`<@${env.DISCORD_CLIENT_ID}>`) && message.inGuild()) {
                if (await this._checkForNeededPermissions(message)) {
                    await this._memesController.handleMemeInteraction(message, "mention");
                } else {
                    await respond(message, [
                        this._componentsService.getMissingBotPermissionsMessageComponent(message.guild.preferredLocale),
                    ]);
                }
                mentioned = true;
            }

            if (!(await this._channelsService.isChannelEnabled(channelId))) {
                return;
            }

            const avatar: string | null = author.avatarURL();

            if (avatar) {
                try {
                    await this._contextService.saveAvatar(id, channelId, avatar);
                } catch (error) {
                    analytics.captureException(error);
                    logger.emit({
                        severityText: "error",
                        body: "context.save_avatar.error",
                        attributes: {
                            posthogDistinctId: message.author.id,
                            channel_id: message.channelId,
                            guild_id: message.guildId,
                            error_message: error instanceof Error ? error.message : String(error),
                        },
                    });
                }
            }

            if (attachments) {
                try {
                    await this._contextService.saveImages(id, channelId, attachments);
                } catch (error) {
                    analytics.captureException(error);
                    logger.emit({
                        severityText: "error",
                        body: "context.save_images.error",
                        attributes: {
                            posthogDistinctId: message.author.id,
                            channel_id: message.channelId,
                            guild_id: message.guildId,
                            attachments_amount: attachments.size,
                            error_message: error instanceof Error ? error.message : String(error),
                        },
                    });
                }
            }

            if (message.flags.has("IsVoiceMessage") && message?.attachments?.first()?.proxyURL) {
                try {
                    await this._contextService.saveTranscribedVoice(
                        id,
                        channelId,
                        message?.attachments?.first()?.proxyURL as string,
                    );
                } catch (error) {
                    analytics.captureException(error);
                    logger.emit({
                        severityText: "error",
                        body: "context.save_transcribed_voice.error",
                        attributes: {
                            posthogDistinctId: message.author.id,
                            channel_id: message.channelId,
                            guild_id: message.guildId,
                            error_message: error instanceof Error ? error.message : String(error),
                        },
                    });
                }
            }

            if (content.length > 0 && content.length < 2000) {
                if (this._checkIfLinkToGif(content)) {
                    await this._contextService.saveGif(id, channelId, content);
                } else {
                    await this._contextService.saveContent(id, channelId, content);
                }
            }

            if ((await this._channelsService.rollChannelFrequency(channelId)) && !mentioned) {
                if (await this._checkForNeededPermissions(message)) {
                    await this._memesController.handleMemeInteraction(message);
                }
            }
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
                severityText: "error",
                body: "context.new_message.error",
                attributes: {
                    posthogDistinctId: message.author.id,
                    channel_id: message.channelId,
                    guild_id: message.guildId,
                    error_message: error instanceof Error ? error.message : String(error),
                },
            });
        }
    }

    private _checkIfLinkToGif(text: string): boolean {
        return text.startsWith("https://tenor.com/view") || text.startsWith("https://media3.giphy.com/");
    }

    private async _checkForNeededPermissions(message: Message): Promise<boolean> {
        if (!message.inGuild()) {
            return true;
        }

        const bot: GuildMember = message.guild.members.me || (await message.guild.members.fetchMe());
        const permissions = message.channel.permissionsFor(bot);
        if (!permissions.has(PermissionFlagsBits.AttachFiles) || !permissions.has(PermissionFlagsBits.SendMessages)) {
            logger.emit({
                severityText: "warn",
                body: "context.auto_meme_generation.not_enough_permissions",
                attributes: {
                    posthogDistinctId: message.author.id,
                    channel_id: message.channelId,
                    guild_id: message.guildId,
                    bot_permissions: permissions?.bitfield.toString(),
                    bot_permissions_list: permissions?.toArray().join(","),
                },
            });

            return false;
        }

        return true;
    }

    public async prefetchChannel(channel: TextBasedChannel, guild: Guild): Promise<number> {
        let prefetched: number = 0;

        try {
            const messages: Collection<string, Message> = await channel.messages.fetch({ limit: 50 });

            for (const message of messages.values()) {
                if (message.author.bot || message.system) {
                    continue;
                }

                const { id, content, channelId, attachments, author } = message;

                try {
                    const avatar: string | null = author.avatarURL();

                    if (avatar) {
                        await this._contextService.saveAvatar(id, channelId, avatar);
                    }

                    if (attachments.size > 0) {
                        await this._contextService.saveImages(id, channelId, attachments);
                    }

                    if (content.length > 0 && content.length < 2000) {
                        if (this._checkIfLinkToGif(content)) {
                            await this._contextService.saveGif(id, channelId, content);
                        } else {
                            await this._contextService.saveContent(id, channelId, content);
                        }
                    }

                    prefetched++;
                } catch (error) {
                    analytics.captureException(error);
                    logger.emit({
                        severityText: "error",
                        body: "context.prefetch.message_error",
                        attributes: {
                            channel_id: channelId,
                            message_id: id,
                            error_message: error instanceof Error ? error.message : String(error),
                        },
                    });
                }
            }

            const emojis: Collection<string, GuildEmoji> = await guild.emojis.fetch();

            for (const emoji of emojis.values()) {
                const url: string = emoji.imageURL({ size: 128 });

                await this._contextService.saveAvatar(emoji.id, channel.id, url);
            }

            const stickers: Collection<string, Sticker> = await guild.stickers.fetch();

            for (const sticker of stickers.values()) {
                await this._contextService.saveAvatar(sticker.id, channel.id, sticker.url);
            }
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
                severityText: "error",
                body: "context.prefetch.error",
                attributes: {
                    channel_id: channel.id,
                    error_message: error instanceof Error ? error.message : String(error),
                },
            });
        }

        return prefetched;
    }
}
