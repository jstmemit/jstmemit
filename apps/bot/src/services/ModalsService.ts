import type { IModalsService } from "#/interfaces/IModalsService.ts";
import type { TemplateText } from "@jstmemit/shared/models/TemplateText";
import type { TemplateImage } from "@jstmemit/shared/models/TemplateImage";
import { type Attachment, type Locale, MessageFlags, type ModalSubmitInteraction } from "discord.js";
import { FileUploadBuilder, LabelBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { t } from "@jstmemit/i18n";
import type { Font } from "@jstmemit/shared/models/Font";
import type { Template } from "@jstmemit/shared/models/Template";
import { logger } from "#/container.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { getTelemetryProperties } from "#/helpers/getTelemetryProperties.ts";

export class ModalsService implements IModalsService {
    private readonly _componentsService: IComponentsService;

    public constructor(componentsService: IComponentsService) {
        this._componentsService = componentsService;
    }

    public getGenerateCustomMemeModal(
        language: Locale,
        templateName: string,
        texts: TemplateText[] | undefined,
        images: TemplateImage[] | undefined,
        font: Font["value"],
    ): ModalBuilder {
        const modal: ModalBuilder = new ModalBuilder()
            .setCustomId(`custom-meme:${templateName}|${font}`)
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

    public getSendFeedbackModal(language: Locale, userId: string, error: boolean): ModalBuilder {
        const modal: ModalBuilder = new ModalBuilder()
            .setCustomId(`${error ? "error-feedback" : "feedback"}:${userId}`)
            .setTitle(error ? t("modal.feedback.title.error", language) : t("modal.feedback.title", language));

        const input: LabelBuilder = new LabelBuilder()
            .setLabel(t("modal.feedback.label", language))
            .setDescription(
                error ? t("modal.feedback.description.error", language) : t("modal.feedback.description", language),
            )
            .setTextInputComponent(
                new TextInputBuilder()
                    .setCustomId(`text`)
                    .setStyle(TextInputStyle.Paragraph)
                    .setRequired(true)
                    .setPlaceholder(
                        error
                            ? t("modal.feedback.placeholder.error", language)
                            : t("modal.feedback.placeholder", language),
                    )
                    .setMaxLength(1000),
            );

        modal.addLabelComponents(input);

        return modal;
    }

    public async getMemeModalImages(
        template: Template,
        interaction: ModalSubmitInteraction,
    ): Promise<Record<string, string> | undefined> {
        const images: Record<string, string> = {};

        for (const image of template.images ?? []) {
            const files = interaction.fields.getUploadedFiles(`image:${image.id}`);
            const attachment: Attachment | undefined = files?.first();

            if (!attachment) {
                images[image.id] = "";
                continue;
            }

            if (!attachment.contentType?.startsWith("image/")) {
                logger.emit({
                    severityText: "warn",
                    body: "generate_meme.modal.unsupported_attachment_image_format",
                    attributes: {
                        ...getTelemetryProperties(interaction),
                    },
                });
                await interaction.editReply({
                    components: [
                        this._componentsService.getWrongFileFormatMessageComponent(
                            interaction.locale,
                            interaction.id,
                            image.description,
                        ),
                    ],
                    flags: MessageFlags.IsComponentsV2,
                });
                return;
            }

            images[image.id] = attachment.url;
        }

        return images;
    }

    public getMemeModalTexts(template: Template, interaction: ModalSubmitInteraction): Record<string, string> {
        const texts: Record<string, string> = {};

        template.texts?.forEach((text: TemplateText): void => {
            const value: string = interaction.fields.getTextInputValue(`text:${text.id}`);

            if (value.length > 0) {
                texts[text.id] = value;
            }
        });

        return texts;
    }
}
