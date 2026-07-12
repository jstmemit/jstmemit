import {
    type User,
    type UserContextMenuCommandInteraction,
    type MessageContextMenuCommandInteraction,
    type ModalSubmitInteraction,
    type Attachment,
    type ModalBuilder,
    type ButtonInteraction,
    type ContainerBuilder,
    type ActionRowBuilder,
    type ButtonBuilder,
    type AutocompleteInteraction,
    type ChatInputCommandInteraction,
    Locale,
} from "discord.js";
import { MessageFlags, Message } from "discord.js";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import type { QueueEvents, Job, Queue } from "bullmq";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { Template } from "@jstmemit/shared/models/Template";
import type { IModalsService } from "#/interfaces/IModalsService.ts";
import type { TemplateText } from "@jstmemit/shared/models/TemplateText";

export class MemesController implements IMemesController {
    private readonly _memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>;
    private readonly _memeGenerationQueueEvents: QueueEvents;
    private readonly _ratingsService: IRatingsService;
    private readonly _componentsService: IComponentsService;
    private readonly _channelsService: IChannelsService;
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _modalsService: IModalsService;

    public constructor(
        memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>,
        memeGenerationQueueEvents: QueueEvents,
        ratingsService: IRatingsService,
        componentsService: IComponentsService,
        channelsService: IChannelsService,
        templatesRepository: ITemplatesRepository,
        modalsService: IModalsService,
    ) {
        this._memeGenerationQueue = memeGenerationQueue;
        this._memeGenerationQueueEvents = memeGenerationQueueEvents;
        this._ratingsService = ratingsService;
        this._componentsService = componentsService;
        this._channelsService = channelsService;
        this._templatesRepository = templatesRepository;
        this._modalsService = modalsService;
    }

    /**
     * Sends a meme generation job to the queue and replies
     * to the channel back with a meme
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
    ): Promise<void> {
        const channelId: MemeGenerationJob["channelId"] = interaction.channelId;
        const userId: MemeGenerationJob["userId"] =
            interaction instanceof Message ? interaction.author.id : interaction.user.id;

        let trigger: MemeGenerationJob["trigger"];
        let locale: Locale = Locale.EnglishUS;

        const channel = await this._channelsService.getChannel(channelId);

        if (!(interaction instanceof Message)) {
            locale = interaction.locale;
        }

        if (!channel?.enabled) {
            const notEnabledComponent: ContainerBuilder = this._componentsService.getEnableMessageComponent(
                locale,
                channel?.enabled || false,
            );
            const notEnabledButtons: ActionRowBuilder<ButtonBuilder> =
                this._componentsService.getEnableButtonsComponent(locale, channel?.enabled || false);

            await respond(interaction, [notEnabledComponent, notEnabledButtons]);

            return;
        }

        if (!(interaction instanceof Message)) {
            await interaction.deferReply();
        }

        if (interaction instanceof Message) {
            trigger = "auto";
        } else if (interaction.isButton()) {
            trigger = "regenerate";
        } else {
            trigger = "command";
        }

        try {
            const jobResult: MemeGenerationResult = await this._addGenerateMemeJob({
                channelId,
                userId,
                trigger,
            });

            // if bot sent the meme without being prompted to do so
            if (interaction instanceof Message) {
                await interaction.reply({
                    components: [this._ratingsService.constructRatingButtons(0, 0, jobResult.generationId)],
                    files: [
                        {
                            attachment: Buffer.from(jobResult.png, "base64"),
                            name: "meme.png",
                        },
                    ],
                });

                return;
            }

            // if bot sent the meme because of /meme or regenerate button
            if (interaction.isChatInputCommand() || interaction.isButton()) {
                await interaction.editReply({
                    content: `<@${interaction.user.id}>`,
                    components: [this._ratingsService.constructRatingButtons(0, 0, jobResult.generationId)],
                    files: [
                        {
                            attachment: Buffer.from(jobResult.png, "base64"),
                            name: "meme.png",
                        },
                    ],
                });
            }
        } catch (error) {
            let message: ContainerBuilder;
            const reason: string = error instanceof Error ? error.message : "";

            switch (reason) {
                case "No props":
                    message = this._componentsService.getNotEnoughContextMessageComponent(locale, interaction.id);
                    break;
                default:
                    message = this._componentsService.getErrorMessageComponent(locale, interaction.id);
            }

            await respond(interaction, [message]);
        }
    }

    /**
     * Gets selected template, texts, images and sends a meme generation job to the queue,
     * then replies to the channel back with a meme when it's ready
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleGenerateCustomMemeModalSubmit(interaction: ModalSubmitInteraction): Promise<void> {
        const templateName: string | undefined = interaction.customId.split(":")[1];
        const template: Template | undefined = await this._getTemplate(interaction, templateName);

        if (!template) {
            return;
        }

        if (!interaction.channelId) {
            await interaction.reply({
                components: [this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id)],
                flags: [MessageFlags.IsComponentsV2, MessageFlags.Ephemeral],
            });
            return;
        }

        await interaction.deferReply();

        const texts: Record<string, string> = this._getModalTexts(template, interaction);
        const images: Record<string, string> | undefined = await this._getModalImages(template, interaction);

        if (!images) {
            return;
        }

        try {
            const jobResult: MemeGenerationResult = await this._addGenerateMemeJob({
                channelId: interaction.channelId,
                userId: interaction.user.id,
                trigger: "custom",
                templateName: templateName,
                texts,
                images,
            });

            await interaction.editReply({
                content: `<@${interaction.user.id}>`,
                files: [
                    {
                        attachment: Buffer.from(jobResult.png, "base64"),
                        name: "meme.png",
                    },
                ],
            });
        } catch {
            await interaction.editReply({
                components: [this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id)],
            });
        }
    }

    public async handleGenerateViaContextMenuInteraction(
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
        templateName: string,
    ): Promise<void> {
        const template: Template | undefined = await this._getTemplate(interaction, templateName);

        if (!template) {
            return;
        }

        await interaction.deferReply();

        const texts: Record<string, string> = this._getContextMenuTexts(template, interaction);
        const images: Record<string, string> = this._getContextMenuImage(template, interaction);

        try {
            const jobResult: MemeGenerationResult = await this._addGenerateMemeJob({
                channelId: interaction.channelId,
                userId: interaction.user.id,
                trigger: "context",
                templateName,
                texts,
                images,
            });

            await interaction.editReply({
                content: `<@${interaction.user.id}>`,
                files: [
                    {
                        attachment: Buffer.from(jobResult.png, "base64"),
                        name: "meme.png",
                    },
                ],
            });
        } catch {
            await interaction.editReply({
                components: [this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id)],
                flags: MessageFlags.IsComponentsV2,
            });
        }
    }

    public async handleGenerateCustomMemeInteraction(interaction: ChatInputCommandInteraction): Promise<void> {
        const templateName: string = interaction.options.getString("template", true);
        const template: Template | undefined = await this._getTemplate(interaction, templateName);

        if (!template) {
            return;
        }

        const modal: ModalBuilder = this._modalsService.getGenerateCustomMemeModal(
            templateName,
            template?.texts,
            template?.images,
        );

        await interaction.showModal(modal);
    }

    /**
     * Searches for templates with a given text in their name
     * and sends them back to autocomplete
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleTemplateAutocompleteInteraction(interaction: AutocompleteInteraction): Promise<void> {
        const templates: Template[] = this._templatesRepository.getAll();

        const focused: string = interaction.options.getFocused().toLowerCase();

        const matches = templates
            .filter((template: Template): boolean => template.name.toLowerCase().includes(focused))
            .slice(0, 25)
            .map((template: Template) => ({ name: template.name, value: template.name }));

        await interaction.respond(matches);
    }

    private async _getTemplate(
        interaction:
            | ModalSubmitInteraction
            | MessageContextMenuCommandInteraction
            | ChatInputCommandInteraction
            | UserContextMenuCommandInteraction,
        templateName: string | undefined,
    ): Promise<Template | undefined> {
        const template: Template = this._templatesRepository
            .getAll()
            .find((template: Template): boolean => template.name === templateName);

        if (!template) {
            await interaction.reply({
                components: [
                    this._componentsService.getUnknownTemplateMessageComponent(interaction.locale, interaction.id),
                ],
                flags: [MessageFlags.IsComponentsV2, MessageFlags.Ephemeral],
            });
        }

        return template;
    }

    private _getContextMenuTexts(
        template: Template,
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
    ): Record<string, string> {
        const texts: Record<string, string> = {};
        const slots: TemplateText[] = template.texts ?? [];
        const [first, second] = slots;

        if (interaction.isMessageContextMenuCommand()) {
            const message: Message = interaction.targetMessage;

            if (first && !second) {
                texts[first.id] = message.content;
            } else if (first && second) {
                texts[first.id] = message.author.displayName;
                texts[second.id] = message.content;
            }
        }

        if (interaction.isUserContextMenuCommand()) {
            const user: User = interaction.targetUser;

            if (first) {
                texts[first.id] = user.displayName;
            }
        }

        return texts;
    }

    private _getContextMenuImage(
        template: Template,
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
    ): Record<string, string> {
        const images: Record<string, string> = {};

        if (template.images?.[0]) {
            if (interaction.isMessageContextMenuCommand()) {
                const message: Message = interaction.targetMessage;

                images[template.images[0].id] = message.author.displayAvatarURL({ extension: "png", size: 512 });
            }

            if (interaction.isUserContextMenuCommand()) {
                const user: User = interaction.targetUser;

                images[template.images[0].id] = user.displayAvatarURL({ extension: "png", size: 512 });
            }
        }

        if (template.images?.[1]) {
            images[template.images[1].id] = interaction.user.displayAvatarURL({ extension: "png", size: 512 });
        }

        return images;
    }

    private async _getModalImages(
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

    private _getModalTexts(template: Template, interaction: ModalSubmitInteraction): Record<string, string> {
        const texts: Record<string, string> = {};

        template.texts?.forEach((text: TemplateText): void => {
            const value: string = interaction.fields.getTextInputValue(`text:${text.id}`);

            if (value.length > 0) {
                texts[text.id] = value;
            }
        });

        return texts;
    }

    private async _addGenerateMemeJob(data: MemeGenerationJob): Promise<MemeGenerationResult> {
        const job: Job<MemeGenerationJob, MemeGenerationResult> = await this._memeGenerationQueue.add(
            "meme-generation",
            data,
        );
        return job.waitUntilFinished(this._memeGenerationQueueEvents, 60000);
    }
}
