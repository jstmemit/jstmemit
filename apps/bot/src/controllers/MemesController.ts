import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { MessageContextMenuCommandInteraction } from "discord.js";
import { type Attachment, MessageFlags, type ModalSubmitInteraction } from "discord.js";
import { type ModalBuilder } from "discord.js";
import {
    Message,
    type ButtonInteraction,
    type ContainerBuilder,
    type ActionRowBuilder,
    type ButtonBuilder,
    type AutocompleteInteraction,
} from "discord.js";
import { type ChatInputCommandInteraction } from "discord.js";
import type { MemeGenerationJob } from "@jstmemit/shared/models/MemeGenerationJob";
import type { MemeGenerationResult } from "@jstmemit/shared/models/MemeGenerationResult";
import type { QueueEvents } from "bullmq";
import { type Job } from "bullmq";
import { type Queue } from "bullmq";
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

        const channel = await this._channelsService.getChannel(channelId);

        if (!channel?.enabled) {
            const notEnabledComponent: ContainerBuilder = this._componentsService.getEnableMessageComponent(
                channel?.enabled || false,
            );
            const notEnabledButtons: ActionRowBuilder<ButtonBuilder> =
                this._componentsService.getEnableButtonsComponent(channel?.enabled || false);

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

        const job: Job<MemeGenerationJob, MemeGenerationResult> = await this._memeGenerationQueue.add(
            "meme-generation",
            {
                channelId,
                userId,
                trigger,
            },
        );

        try {
            const jobResult: MemeGenerationResult = await job.waitUntilFinished(this._memeGenerationQueueEvents, 60000);

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
                    message = this._componentsService.getNotEnoughContextMessageComponent(interaction.id);
                    break;
                default:
                    message = this._componentsService.getErrorMessageComponent(interaction.id);
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
        const template: Template | undefined = this._templatesRepository
            .getAll()
            .find((template: Template): boolean => template.name === templateName);

        if (!template) {
            await interaction.reply({
                components: [this._componentsService.getUnknownTemplateMessageComponent(interaction.id)],
                flags: MessageFlags.IsComponentsV2,
                ephemeral: true,
            });
            return;
        }

        if (!interaction.channelId) {
            await interaction.reply({
                components: [this._componentsService.getErrorMessageComponent(interaction.id)],
                flags: MessageFlags.IsComponentsV2,
                ephemeral: true,
            });
            return;
        }

        await interaction.deferReply();

        const texts: Record<string, string> = {};

        template.texts?.forEach((text: TemplateText): void => {
            const value: string = interaction.fields.getTextInputValue(`text:${text.id}`);

            if (value.length > 0) {
                texts[text.id] = value;
            }
        });

        const images: Record<string, string> = {};

        for (const image of template.images ?? []) {
            const files = interaction.fields.getUploadedFiles(`image:${image.id}`);
            const attachment: Attachment | undefined = files?.first();

            if (!attachment) {
                continue;
            }

            if (!attachment.contentType?.startsWith("image/")) {
                await interaction.editReply({
                    components: [
                        this._componentsService.getWrongFileFormatMessageComponent(interaction.id, image.description),
                    ],
                    flags: MessageFlags.IsComponentsV2,
                });
                return;
            }

            images[image.id] = attachment.url;
        }

        const job: Job<MemeGenerationJob, MemeGenerationResult> = await this._memeGenerationQueue.add(
            "meme-generation",
            {
                channelId: interaction.channelId,
                userId: interaction.user.id,
                trigger: "custom",
                templateName: templateName,
                texts,
                images,
            },
        );

        try {
            const jobResult: MemeGenerationResult = await job.waitUntilFinished(this._memeGenerationQueueEvents, 60000);

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
                components: [this._componentsService.getErrorMessageComponent(interaction.id)],
            });
        }
    }

    public async handleGenerateViaContextMenuInteraction(
        interaction: MessageContextMenuCommandInteraction,
        templateName: string,
    ): Promise<void> {
        const template: Template | undefined = this._templatesRepository
            .getAll()
            .find((template: Template): boolean => template.name === templateName);

        if (!template) {
            await interaction.reply({
                components: [this._componentsService.getUnknownTemplateMessageComponent(interaction.id)],
                flags: MessageFlags.IsComponentsV2,
                ephemeral: true,
            });
            return;
        }

        await interaction.deferReply();

        const message: Message = interaction.targetMessage;

        const texts: Record<string, string> = {};
        const images: Record<string, string> = {};
        const slots: TemplateText[] = template.texts ?? [];
        const [first, second] = slots;

        if (first && !second) {
            texts[first.id] = message.content;
        } else if (first && second) {
            texts[first.id] = message.author.displayName;
            texts[second.id] = message.content;
        }

        if (template.images?.[0]) {
            images[template.images[0].id] = message.author.displayAvatarURL({ extension: "png", size: 512 });
        }

        const job: Job<MemeGenerationJob, MemeGenerationResult> = await this._memeGenerationQueue.add(
            "meme-generation",
            {
                channelId: interaction.channelId,
                userId: interaction.user.id,
                trigger: "context",
                templateName,
                texts,
                images,
            },
        );

        try {
            const jobResult: MemeGenerationResult = await job.waitUntilFinished(this._memeGenerationQueueEvents, 60000);

            await interaction.editReply({
                content: `<@${interaction.user.id}>`,
                files: [
                    {
                        attachment: Buffer.from(jobResult.png, "base64"),
                        name: "meme.png",
                    },
                ],
            });
        } catch (e) {
            console.error(e);
            await interaction.editReply({
                components: [this._componentsService.getErrorMessageComponent(interaction.id)],
                flags: MessageFlags.IsComponentsV2,
            });
        }
    }

    public async handleGenerateCustomMemeInteraction(interaction: ChatInputCommandInteraction): Promise<void> {
        const templateName: string = interaction.options.getString("template", true);
        const template: Template | undefined = this._templatesRepository
            .getAll()
            .find((template: Template): boolean => template.name === templateName);

        if (!template) {
            await interaction.reply({
                components: [this._componentsService.getUnknownTemplateMessageComponent(interaction.id)],
                flags: MessageFlags.IsComponentsV2,
                ephemeral: true,
            });
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
}
