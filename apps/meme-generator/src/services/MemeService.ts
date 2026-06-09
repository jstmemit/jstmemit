import type { Template } from "../models/Template.ts";
import type { TemplateResult } from "../models/TemplateResult.ts";
import type { IMemeService } from "../interfaces/IMemeService.ts";
import type { IMemeRepository } from "../interfaces/IMemeRepository.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";

export class MemeService implements IMemeService {
  private readonly _memeRepository: IMemeRepository;
  private readonly _messagesRepository: IMessagesRepository;

  public constructor(
    memeRepository: IMemeRepository,
    messagesRepository: IMessagesRepository,
  ) {
    this._memeRepository = memeRepository;
    this._messagesRepository = messagesRepository;
  }

  public async generateMeme(
    template: Template,
    channelId: string,
  ): Promise<TemplateResult> {
    try {
      const texts =
        await this._messagesRepository.getMessagesContentByChannelId(channelId);

      const images: string[] = ["https://placehold.co/600x400.png"];

      const svg: string | undefined = await this._memeRepository.generateMeme(
        template,
        {
          texts,
          images,
        },
      );

      if (!svg) {
        return {
          success: false,
        };
      }

      const png: Buffer = this._memeRepository.convertIntoBuffer(
        svg,
        template.width,
      );

      return {
        success: true,
        result: png,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
      };
    }
  }
}
