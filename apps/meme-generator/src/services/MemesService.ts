import type { Template } from "../models/Template.ts";
import type { IMemesService } from "../interfaces/IMemesService.ts";
import type { IMemesRepository } from "../interfaces/IMemesRepository.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";
import type { IImagesRepository } from "@jstmemit/db/interfaces/IImagesRepository";
import type { TemplateProps } from "../models/TemplateProps.ts";
import type { TemplateImage } from "../models/TemplateImage.ts";
import type { TemplateText } from "../models/TemplateText.ts";
import type { ITemplatesService } from "../interfaces/ITemplatesService.ts";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";

export class MemesService implements IMemesService {
  private readonly _memesRepository: IMemesRepository;
  private readonly _messagesRepository: IMessagesRepository;
  private readonly _imagesRepository: IImagesRepository;
  private readonly _templatesService: ITemplatesService;

  public constructor(
    memesRepository: IMemesRepository,
    messagesRepository: IMessagesRepository,
    imagesRepository: IImagesRepository,
    templatesService: ITemplatesService,
  ) {
    this._memesRepository = memesRepository;
    this._messagesRepository = messagesRepository;
    this._imagesRepository = imagesRepository;
    this._templatesService = templatesService;
  }

  /**
   * Generates a meme by first getting needed props, calling the repository
   * and converting the response into a .png buffer
   *
   * @param data
   *
   * @author Kyrylo Maliuha
   */
  public async generateMeme(
    data: MemeGenerationJob,
  ): Promise<MemeGenerationResult> {
    let { template } = data;
    const { channelId } = data;

    if (!template) {
      template = this._templatesService.getRandomTemplate();
    }

    if (!template) {
      throw new Error();
    }

    const props: TemplateProps | undefined = await this.getMemeTemplateContext(
      template,
      channelId,
    );

    if (!props) {
      throw new Error();
    }

    const svg: string | undefined = await this._memesRepository.generateMeme(
      template,
      props,
    );

    if (!svg) {
      throw new Error();
    }

    const png: Buffer = this._memesRepository.convertIntoBuffer(
      svg,
      template.width,
    );

    return {
      png: png.toString("base64"),
    };
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

    if (channelTexts.length <= 1 || channelImages.length <= 1) {
      return undefined;
    }

    return {
      images: channelImages.slice(0, templateImages.length),
      texts: channelTexts.slice(0, templateTexts.length),
    };
  }
}
