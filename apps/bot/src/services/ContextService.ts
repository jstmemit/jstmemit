import type { IContextService } from "../interfaces/IContextService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { IChannelsService } from "../interfaces/IChannelsService.ts";
import type { Attachment, Collection } from "discord.js";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";

export class ContextService implements IContextService {
  private readonly _messagesRepository: IMessagesRepository;
  private readonly _imagesRepository: IImagesRepository;
  private readonly _channelsService: IChannelsService;

  public constructor(
    messagesRepository: IMessagesRepository,
    imagesRepository: IImagesRepository,
    channelsService: IChannelsService,
  ) {
    this._messagesRepository = messagesRepository;
    this._imagesRepository = imagesRepository;
    this._channelsService = channelsService;
  }

  public async saveContent(
    messageId: string,
    channelId: string,
    content: string,
  ): Promise<boolean> {
    await this._channelsService.addChannel(channelId);

    const channel = await this._channelsService.getChannel(channelId);

    if (!channel?.enabled) {
      return false;
    }

    return await this._messagesRepository.new(
      messageId,
      channelId,
      content,
      new Date(),
    );
  }

  public async saveImages(
    messageId: string,
    channelId: string,
    attachments: Collection<string, Attachment>,
  ): Promise<boolean> {
    await this._channelsService.addChannel(channelId);

    const channel = await this._channelsService.getChannel(channelId);

    if (!channel?.enabled) {
      return false;
    }

    attachments.forEach((attachment) => {
      this._imagesRepository
        .new(messageId, channelId, attachment.url, new Date())
        .catch((error) => {
          console.error(error);
        });
    });

    return true;
  }
}
