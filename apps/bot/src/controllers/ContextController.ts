import type { IContextController } from "../interfaces/IContextController.ts";
import type { Message } from "discord.js";
import { z } from "zod";
import type { IContextService } from "../interfaces/IContextService.ts";

export class ContextController implements IContextController {
  private readonly _contextService: IContextService;

  public constructor(contextService: IContextService) {
    this._contextService = contextService;
  }

  public async handleNewMessage(message: Message): Promise<void> {
    try {
      const { id, content, channelId, attachments } = message;

      if (!z.string().min(1).max(1999).safeParse(content).success) {
        return;
      }

      if (!z.string().min(1).safeParse(channelId).success) {
        return;
      }

      await this._contextService.saveContent(id, channelId, content);
      await this._contextService.saveImages(id, channelId, attachments);
    } catch (error) {
      console.error(error);
    }
  }
}
