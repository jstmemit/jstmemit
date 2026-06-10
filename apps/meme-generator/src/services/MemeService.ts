import type { Template } from "../models/Template.ts";
import type { TemplateResult } from "../models/TemplateResult.ts";
import type { IMemeService } from "../interfaces/IMemeService.ts";
import type { IMemeRepository } from "../interfaces/IMemeRepository.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import type { TemplateProps } from "../models/TemplateProps.ts";
import type { TemplateImage } from "../models/TemplateImage.ts";
import type { TemplateText } from "../models/TemplateText.ts";

export class MemeService implements IMemeService {
  private readonly _memeRepository: IMemeRepository;
  private readonly _messagesRepository: IMessagesRepository;
  private readonly _imagesRepository: IImagesRepository;

  public constructor(
    memeRepository: IMemeRepository,
    messagesRepository: IMessagesRepository,
    imagesRepository: IImagesRepository,
  ) {
    this._memeRepository = memeRepository;
    this._messagesRepository = messagesRepository;
    this._imagesRepository = imagesRepository;
  }

  /**
   * Generates a meme by first getting needed props, calling the repository
   * and converting the response into a .png buffer
   *
   * @param template
   * @param channelId
   *
   * @author Kyrylo Maliuha
   */
  public async generateMeme(
    template: Template,
    channelId: string,
  ): Promise<TemplateResult | undefined> {
    try {
      const props: TemplateProps | undefined =
        await this.getMemeTemplateContext(template, channelId);

      if (!props) {
        return undefined;
      }

      const svg: string | undefined = await this._memeRepository.generateMeme(
        template,
        props,
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

  /**
   * Gets text messages and images from the channel, shuffles them
   * and removes everything what's not needed for the chosen template
   *
   * @param template
   * @param channelId
   *
   * @author Kyrylo Maliuha
   */
  public async getMemeTemplateContext(
    template: Template,
    channelId: string,
  ): Promise<TemplateProps | undefined> {
    const templateImages: TemplateImage[] | undefined = template.images;
    const templateTexts: TemplateText[] | undefined = template.texts;

    const channelTexts: string[] =
      await this._messagesRepository.getMessagesContentByChannelId(channelId);

    const channelImages: string[] =
      await this._imagesRepository.getImagesByChannelId(channelId, new Date());

    if (!templateImages || !templateTexts) {
      return undefined;
    }

    if (!channelTexts || !channelImages) {
      return undefined;
    }

    return {
      images: channelImages.slice(0, templateImages.length),
      texts: channelTexts.slice(0, templateTexts.length),
    };
  }
}
