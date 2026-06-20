import type { IContextController } from "#/interfaces/IContextController.ts";
import type { Message } from "discord.js";
import type { IContextService } from "#/interfaces/IContextService.ts";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";

export class ContextController implements IContextController {
    private readonly _contextService: IContextService;
    private readonly _channelsService: IChannelsService;

    public constructor(
        contextService: IContextService,
        channelsService: IChannelsService,
    ) {
        this._contextService = contextService;
        this._channelsService = channelsService;
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
            const { id, content, channelId, attachments, author } = message;

            if (!channelId) {
                return;
            }

            if (!(await this._channelsService.isChannelEnabled(channelId))) {
                return;
            }

            const avatar: string | null = author.avatarURL();

            if (avatar) {
                this._contextService.saveAvatar(id, channelId, avatar);
            }

            if (attachments) {
                this._contextService.saveImages(id, channelId, attachments);
            }

            if (content.length > 0 && content.length < 2000) {
                if (content.startsWith("https://tenor.com/view")) {
                    await this._contextService.saveGif(id, channelId, content);
                } else {
                    await this._contextService.saveContent(
                        id,
                        channelId,
                        content,
                    );
                }
            }
        } catch (error) {
            console.error(error);
        }
    }
}
