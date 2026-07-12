import type { TemplateText } from "@jstmemit/shared/models/TemplateText";
import type { TemplateImage } from "@jstmemit/shared/models/TemplateImage";
import type { ModalBuilder } from "discord.js";

export abstract class IModalsService {
    public abstract getGenerateCustomMemeModal(
        templateName: string,
        texts: TemplateText[] | undefined,
        images: TemplateImage[] | undefined,
    ): ModalBuilder;
    public abstract getSendFeedbackModal(userId: string): ModalBuilder;
}
