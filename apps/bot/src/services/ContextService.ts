import type { IContextService } from "../interfaces/IContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { IChannelsService } from "../interfaces/IChannelsService.ts";

export class ContextService implements IContextService {
  private readonly _messagesRepository: IMessagesRepository;
  private readonly _channelsService: IChannelsService;

  public constructor(
    messagesRepository: IMessagesRepository,
    channelsService: IChannelsService,
  ) {
    this._messagesRepository = messagesRepository;
    this._channelsService = channelsService;
  }

  public async saveContent(
    messageId: string,
    channelId: string,
    content: string,
  ): Promise<boolean> {
    await this._channelsService.addChannel(channelId);

    return await this._messagesRepository.new(
      messageId,
      channelId,
      content,
      new Date(),
    );
  }
}
