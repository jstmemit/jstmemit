import type { IModalsService } from "#/interfaces/IModalsService.ts";
import type { TemplateText } from "@jstmemit/shared/models/TemplateText";
import type { TemplateImage } from "@jstmemit/shared/models/TemplateImage";
import { FileUploadBuilder, LabelBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js";

export class ModalsService implements IModalsService {
    public getGenerateCustomMemeModal(
        texts: TemplateText[] | undefined,
        images: TemplateImage[] | undefined,
    ): ModalBuilder {
        const modal: ModalBuilder = new ModalBuilder().setCustomId("meme").setTitle("Generate a custom meme");

        texts?.forEach((text: TemplateText): void => {
            const label: LabelBuilder = new LabelBuilder()
                .setLabel(`Text #${text.id}`)
                .setDescription(text.description)
                .setTextInputComponent(
                    new TextInputBuilder()
                        .setCustomId(`text:${text.id}`)
                        .setStyle(TextInputStyle.Short)
                        .setRequired(false)
                        .setPlaceholder("Something funny here")
                        .setMaxLength(200),
                );

            modal.addLabelComponents(label);
        });

        images?.forEach((image: TemplateImage): void => {
            const label: LabelBuilder = new LabelBuilder()
                .setLabel(`Image #${image.id}`)
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
}
