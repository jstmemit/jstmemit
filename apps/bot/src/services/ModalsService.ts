import type { IModalsService } from "#/interfaces/IModalsService.ts";
import type { TemplateText } from "@jstmemit/shared/models/TemplateText";
import type { TemplateImage } from "@jstmemit/shared/models/TemplateImage";
import type { Locale } from "discord.js";
import { FileUploadBuilder, LabelBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { t } from "@jstmemit/i18n";

export class ModalsService implements IModalsService {
    public getGenerateCustomMemeModal(
        language: Locale,
        templateName: string,
        texts: TemplateText[] | undefined,
        images: TemplateImage[] | undefined,
    ): ModalBuilder {
        const modal: ModalBuilder = new ModalBuilder()
            .setCustomId(`custom-meme:${templateName}`)
            .setTitle(t("modal.customMeme.title", language));

        texts?.forEach((text: TemplateText): void => {
            const label: LabelBuilder = new LabelBuilder()
                .setLabel(t("modal.customMeme.text.label", language, { id: String(text.id) }))
                .setDescription(text.description)
                .setTextInputComponent(
                    new TextInputBuilder()
                        .setCustomId(`text:${text.id}`)
                        .setStyle(TextInputStyle.Short)
                        .setRequired(false)
                        .setPlaceholder(t("modal.customMeme.text.placeholder", language))
                        .setMaxLength(200),
                );

            modal.addLabelComponents(label);
        });

        images?.forEach((image: TemplateImage): void => {
            const label: LabelBuilder = new LabelBuilder()
                .setLabel(t("modal.customMeme.image.label", language, { id: String(image.id) }))
                .setDescription(image.description)
                .setFileUploadComponent(
                    new FileUploadBuilder()
                        .setCustomId(`image:${image.id}`)
                        .setMinValues(1)
                        .setMaxValues(1)
                        .setRequired(false),
                );

            modal.addLabelComponents(label);
        });

        return modal;
    }

    public getSendFeedbackModal(language: Locale, userId: string): ModalBuilder {
        const modal: ModalBuilder = new ModalBuilder()
            .setCustomId(`feedback:${userId}`)
            .setTitle(t("modal.feedback.title", language));

        const input: LabelBuilder = new LabelBuilder()
            .setLabel(t("modal.feedback.label", language))
            .setDescription(t("modal.feedback.description", language))
            .setTextInputComponent(
                new TextInputBuilder()
                    .setCustomId(`text`)
                    .setStyle(TextInputStyle.Paragraph)
                    .setRequired(true)
                    .setPlaceholder(t("modal.feedback.placeholder", language))
                    .setMaxLength(1000),
            );

        modal.addLabelComponents(input);

        return modal;
    }
}
