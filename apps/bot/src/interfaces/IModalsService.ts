import type { TemplateText } from "@jstmemit/shared/models/TemplateText";
import type { TemplateImage } from "@jstmemit/shared/models/TemplateImage";
import type { Locale, ModalBuilder } from "discord.js";
import type { Font } from "@jstmemit/shared/models/Font";

export abstract class IModalsService {
    public abstract getGenerateCustomMemeModal(
        language: Locale,
        templateName: string,
        texts: TemplateText[] | undefined,
        images: TemplateImage[] | undefined,
        fontL: Font["value"],
    ): ModalBuilder;
    public abstract getSendFeedbackModal(language: Locale, userId: string, error: boolean): ModalBuilder;
}
