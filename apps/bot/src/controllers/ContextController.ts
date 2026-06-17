import type { IContextController } from "#/interfaces/IContextController.ts";
import type { Message } from "discord.js";
import type { IContextService } from "#/interfaces/IContextService.ts";

export class ContextController implements IContextController {
    private readonly _contextService: IContextService;

    public constructor(contextService: IContextService) {
        this._contextService = contextService;
    }

    /**
     * Handles new messages. Calls ContextService to save
     * images and text content
     *
     * @param message
     *
     * @author Kyrylo Maliuha
     */
    public async handleNewMessage(message: Message): Promise<void> {
        try {
            const { id, content, channelId, attachments } = message;

            if (!channelId) {
                return;
            }

            if (attachments) {
                await this._contextService.saveImages(
                    id,
                    channelId,
                    attachments,
                );
            }

            if (content.length >= 0 || content.length < 1999) {
                if (content.startsWith("https://tenor.com/view")) {
                    await this._contextService.saveGif(id, channelId, content);
                }

                await this._contextService.saveContent(id, channelId, content);
            }
        } catch (error) {
            console.error(error);
        }
    }
}
