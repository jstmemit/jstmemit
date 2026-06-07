import type { IContextService } from "../interfaces/IContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";

export class ContextService implements IContextService {
  private readonly _messagesRepository: IMessagesRepository;

  public constructor(messagesRepository: IMessagesRepository) {
    this._messagesRepository = messagesRepository;
  }

  public async saveContent(
    messageId: string,
    channelId: string,
    content: string,
  ): Promise<boolean> {
    return await this._messagesRepository.new(
      messageId,
      channelId,
      content,
      new Date(),
    );
  }
}
