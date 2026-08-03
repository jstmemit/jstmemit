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
    ChannelType,
    Message,
    InteractionContextType,
    Locale,
    MessageFlags,
    type TextBasedChannel,
    type ApplicationCommandOptionChoiceData,
} from "discord.js";
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
import { logger } from "#/container.ts";
import { analytics } from "@jstmemit/analytics";
import type { VoiceTranscriptionJob } from "@jstmemit/shared/models/VoiceTranscriptionJob";
import type { VoiceTranscriptionResult } from "@jstmemit/shared/models/VoiceTranscriptionResult";
import { timeout } from "#/helpers/timeout.ts";
import type { MemeGenerationTrigger } from "@jstmemit/shared/models/MemeGenerationTrigger";
import type { RequiredBotPermissions } from "@jstmemit/shared/models/RequiredBotPermissions";
import { getRequiredBotPermissions } from "#/helpers/getRequiredBotPermissions.ts";
import ms from "ms";
import type { ICacheService } from "@jstmemit/cache/interfaces/ICacheService";

export class MemesController implements IMemesController {
    private readonly _memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>;
    private readonly _memeGenerationQueueEvents: QueueEvents;
    private readonly _voiceTranscriptionQueue: Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>;
    private readonly _voiceTranscriptionQueueEvents: QueueEvents;
    private readonly _ratingsService: IRatingsService;
    private readonly _componentsService: IComponentsService;
    private readonly _channelsService: IChannelsService;
    private readonly _templatesRepository: ITemplatesRepository;
    private readonly _modalsService: IModalsService;
    private readonly _cacheService: ICacheService;

    public constructor(
        memeGenerationQueue: Queue<MemeGenerationJob, MemeGenerationResult>,
        memeGenerationQueueEvents: QueueEvents,
        voiceTranscriptionQueue: Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>,
        voiceTranscriptionQueueEvents: QueueEvents,
        ratingsService: IRatingsService,
        componentsService: IComponentsService,
        channelsService: IChannelsService,
        templatesRepository: ITemplatesRepository,
        modalsService: IModalsService,
        cacheService: ICacheService,
    ) {
        this._memeGenerationQueue = memeGenerationQueue;
        this._memeGenerationQueueEvents = memeGenerationQueueEvents;
        this._voiceTranscriptionQueue = voiceTranscriptionQueue;
        this._voiceTranscriptionQueueEvents = voiceTranscriptionQueueEvents;
        this._ratingsService = ratingsService;
        this._componentsService = componentsService;
        this._channelsService = channelsService;
        this._templatesRepository = templatesRepository;
        this._modalsService = modalsService;
        this._cacheService = cacheService;
    }

    /**
     * Sends a meme generation job to the queue and replies
     * to the channel back with a meme
     *
     * @param interaction
     * @param trigger
     *
     * @author Kyrylo Maliuha
     */
    public async handleMemeInteraction(
        interaction: ChatInputCommandInteraction | ButtonInteraction | Message,
        trigger?: MemeGenerationTrigger,
    ): Promise<void> {
        let parentGenerationId: number | undefined;
        const channelId: MemeGenerationJob["channelId"] = interaction.channelId;
        const userId: MemeGenerationJob["userId"] =
            interaction instanceof Message ? interaction.author.id : interaction.user.id;

        if (interaction instanceof Message) {
            trigger ??= "auto";
        } else if (interaction.isButton()) {
            trigger = "regenerate";

            const id: string | undefined = interaction.customId.split(":")[1];
            parentGenerationId = id ? Number(id) : undefined;
        } else {
            trigger = "command";
        }

        logger.emit({
            severityText: "info",
            body: "generate_meme.interaction.received",
            attributes: {
                trigger,
                ...this._getTelemetryProperties(interaction),
            },
        });

        let locale: Locale = Locale.EnglishUS;

        const channel = await this._channelsService.getChannel(channelId);
        const permissions: RequiredBotPermissions = getRequiredBotPermissions(interaction);

        if (!(interaction instanceof Message)) {
            locale = interaction.locale;
        }

        if (!channel?.enabled) {
            if (!(interaction instanceof Message)) {
                await interaction.deferReply();
            }

            logger.emit({
                severityText: "warn",
                body: "generate_meme.channel.not_enabled",
                attributes: {
                    trigger,
                    ...this._getTelemetryProperties(interaction),
                },
            });

            const notEnabledComponent: ContainerBuilder = this._componentsService.getEnableMessageComponent(
                locale,
                channel?.enabled || false,
                permissions,
            );
            const notEnabledButtons: ActionRowBuilder<ButtonBuilder> =
                this._componentsService.getEnableButtonsComponent(locale, channel?.enabled || false);

            await respond(interaction, [notEnabledComponent, notEnabledButtons]);

            return;
        }

        try {
            const job: Promise<MemeGenerationResult> = this._addGenerateMemeJob({
                channelId,
                guildId: interaction?.guildId || undefined,
                isUserInstall:
                    interaction instanceof Message
                        ? undefined
                        : "1" in (interaction?.authorizingIntegrationOwners || {}),
                locale: interaction instanceof Message ? undefined : interaction?.locale,
                userId,
                trigger,
                parentGenerationId,
                turbo: channel.turbo,
            });

            // if bot sent the meme without being prompted to do so
            if (interaction instanceof Message) {
                if (!permissions.sendMessages) {
                    return;
                }

                if (
                    !permissions.attachFiles ||
                    !permissions.viewChannel ||
                    !permissions.readHistory ||
                    !permissions.embedLinks
                ) {
                    const permissionError: ContainerBuilder =
                        this._componentsService.getMissingBotPermissionsMessageComponent(locale, permissions);

                    await respond(interaction, [permissionError]);
                    return;
                }

                const jobResult: MemeGenerationResult = await job;
                await interaction.reply({
                    components: [this._ratingsService.constructRatingButtons(0, 0, jobResult.generationId)],
                    files: [
                        {
                            attachment: Buffer.from(jobResult.png, "base64"),
                            name: "meme.webp",
                        },
                    ],
                    failIfNotExists: false,
                });

                return;
            }

            const budget: number = 1200 - (Date.now() - interaction.createdTimestamp);
            const fastResult: MemeGenerationResult | undefined = await Promise.race([
                job,
                timeout(Math.max(0, budget)),
            ]);

            if (fastResult) {
                // if bot sent the meme because of /meme or regenerate button + meme got generated faster than 2000ms
                await interaction.reply({
                    content: `<@${interaction.user.id}>`,
                    components: [this._ratingsService.constructRatingButtons(0, 0, fastResult.generationId)],
                    files: [
                        {
                            attachment: Buffer.from(fastResult.png, "base64"),
                            name: "meme.webp",
                        },
                    ],
                });
            } else {
                await interaction.deferReply();
                const jobResult: MemeGenerationResult = await job;

                await interaction.editReply({
                    content: `<@${interaction.user.id}>`,
                    components: [this._ratingsService.constructRatingButtons(0, 0, jobResult.generationId)],
                    files: [
                        {
                            attachment: Buffer.from(jobResult.png, "base64"),
                            name: "meme.webp",
                        },
                    ],
                });
            }
        } catch (error) {
            let message: ContainerBuilder;
            const reason: string = error instanceof Error ? error.message : "";

            switch (reason) {
                case "No props":
                    logger.emit({
                        severityText: "warn",
                        body: "generate_meme.context.insufficient.error_shown",
                        attributes: {
                            trigger,
                            ...this._getTelemetryProperties(interaction),
                        },
                    });

                    message = this._componentsService.getNotEnoughContextMessageComponent(locale, interaction.id);
                    break;
                default:
                    analytics.captureException(error);
                    logger.emit({
                        severityText: "error",
                        body: "generate_meme.job.failed",
                        attributes: {
                            trigger,
                            ...this._getTelemetryProperties(interaction),
                        },
                    });
                    message = this._componentsService.getErrorMessageComponent(locale, interaction.id);
            }

            if (trigger !== "auto") {
                await respond(interaction, [message]);
            }
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

        logger.emit({
            severityText: "info",
            body: "generate_meme.interaction.received",
            attributes: {
                trigger: "custom",
                ...this._getTelemetryProperties(interaction),
            },
        });

        const template: Template | undefined = await this._getTemplate(interaction, templateName);

        if (!template) {
            return;
        }

        if (!interaction.channelId) {
            logger.emit({
                severityText: "warn",
                body: "generate_meme.interaction.channel_missing",
                attributes: {
                    trigger: "custom",
                    ...this._getTelemetryProperties(interaction),
                },
            });
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
                guildId: interaction?.guildId || undefined,
                isUserInstall: "1" in (interaction.authorizingIntegrationOwners || {}),
                locale: interaction.locale,
                userId: interaction.user.id,
                trigger: "custom",
                templateName: templateName,
                texts,
                images,
                turbo: false,
            });

            await interaction.editReply({
                content: `<@${interaction.user.id}>`,
                files: [
                    {
                        attachment: Buffer.from(jobResult.png, "base64"),
                        name: "meme.webp",
                    },
                ],
            });
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
                severityText: "error",
                body: "generate_meme.job.failed",
                attributes: {
                    ...this._getTelemetryProperties(interaction),
                },
            });
            await interaction.editReply({
                components: [this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id)],
            });
        }
    }

    public async handleGenerateViaContextMenuInteraction(
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
        templateName: string | undefined,
    ): Promise<void> {
        logger.emit({
            severityText: "info",
            body: "generate_meme.interaction.received",
            attributes: {
                trigger: "context",
                ...this._getTelemetryProperties(interaction),
            },
        });

        const template: Template | undefined = await this._getTemplate(interaction, templateName);

        if (!template) {
            return;
        }

        await interaction.deferReply();

        try {
            const texts: Record<string, string> = await this._getContextMenuTexts(template, interaction);
            const images: Record<string, string> = this._getContextMenuImage(template, interaction);

            const jobResult: MemeGenerationResult = await this._addGenerateMemeJob({
                channelId: interaction.channelId,
                guildId: interaction?.guildId || undefined,
                isUserInstall: "1" in (interaction.authorizingIntegrationOwners || {}),
                locale: interaction.locale,
                userId: interaction.user.id,
                trigger: "context",
                templateName,
                texts,
                images,
                turbo: false,
            });

            await interaction.editReply({
                content: `<@${interaction.user.id}>`,
                files: [
                    {
                        attachment: Buffer.from(jobResult.png, "base64"),
                        name: "meme.webp",
                    },
                ],
            });
        } catch (error) {
            analytics.captureException(error);
            logger.emit({
                severityText: "error",
                body: "generate_meme.job.failed",
                attributes: {
                    ...this._getTelemetryProperties(interaction),
                },
            });
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
            interaction.locale,
            templateName,
            template?.texts,
            template?.images,
        );

        await interaction.showModal(modal);
    }

    /**
     * Searches for templates with a given text in their name, displayName, topics
     * and sends them back to autocomplete
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha & Oleksii Sych
     */
    public async handleTemplateAutocompleteInteraction(interaction: AutocompleteInteraction): Promise<void> {
        const focused: string = interaction.options.getFocused().toLowerCase();
        const templates: Template[] = this._templatesRepository.getAll();

        const matches: ApplicationCommandOptionChoiceData[] = await this._cacheService.getOrSet(
            `custom:${focused}`,
            () => {
                return templates
                    .filter((template: Template): boolean => {
                        const matchesName: boolean = template.name.toLowerCase().includes(focused);
                        const matchesDisplayName: boolean = template.displayName.toLowerCase().includes(focused);
                        const matchesTopics: boolean = template.topics.some((topic: string) =>
                            topic.toLowerCase().includes(focused),
                        );

                        return Boolean(matchesName || matchesDisplayName || matchesTopics);
                    })
                    .slice(0, 25)
                    .map((template: Template) => ({ name: template.displayName, value: template.name }))
                    .sort((a: ApplicationCommandOptionChoiceData, b: ApplicationCommandOptionChoiceData) =>
                        a.name.localeCompare(b.name),
                    );
            },
            ms("1h"),
        );

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
        const template: Template | undefined = this._templatesRepository
            .getAll()
            .find((template: Template): boolean => template.name === templateName);

        if (!template) {
            logger.emit({
                severityText: "error",
                body: "generate_meme.template.not_found",
                attributes: {
                    ...this._getTelemetryProperties(interaction),
                },
            });

            await interaction.reply({
                components: [
                    this._componentsService.getUnknownTemplateMessageComponent(interaction.locale, interaction.id),
                ],
                flags: [MessageFlags.IsComponentsV2, MessageFlags.Ephemeral],
            });
        }

        return template;
    }

    private async _getContextMenuTexts(
        template: Template,
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
    ): Promise<Record<string, string>> {
        const texts: Record<string, string> = {};
        const slots: TemplateText[] = template.texts ?? [];
        const [first, second] = slots;

        if (interaction.isMessageContextMenuCommand()) {
            const message: Message = interaction.targetMessage;
            const voiceMessage: string | undefined = message?.attachments.first()?.proxyURL;

            if (message.flags.has("IsVoiceMessage") && voiceMessage) {
                logger.emit({
                    severityText: "info",
                    body: "generate_meme.context_menu.used_on_voice_message",
                    attributes: {
                        ...this._getTelemetryProperties(interaction),
                    },
                });
                const result: VoiceTranscriptionResult = await this._addVoiceTranscriptionJob({
                    url: voiceMessage,
                    channelId: interaction.channelId,
                });
                message.content = result.text;
            }

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
                logger.emit({
                    severityText: "warn",
                    body: "generate_meme.modal.unsupported_attachment_image_format",
                    attributes: {
                        ...this._getTelemetryProperties(interaction),
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

    private _getAppPermissionsBitfield(
        interaction:
            | ChatInputCommandInteraction
            | ButtonInteraction
            | Message
            | ModalSubmitInteraction
            | MessageContextMenuCommandInteraction
            | UserContextMenuCommandInteraction,
    ): string | undefined {
        return interaction instanceof Message
            ? interaction.guild?.members.me?.permissionsIn(interaction.channelId).bitfield.toString()
            : interaction.appPermissions?.bitfield.toString();
    }

    private _getTelemetryProperties(
        interaction:
            | ChatInputCommandInteraction
            | ButtonInteraction
            | Message
            | ModalSubmitInteraction
            | MessageContextMenuCommandInteraction
            | UserContextMenuCommandInteraction,
    ): Record<string, string | number | boolean | undefined> {
        const channel: TextBasedChannel | null = interaction.channel;

        const base: Record<string, string | number | boolean | undefined> = {
            interaction_id: interaction.id,
            channel_id: interaction.channelId || undefined,
            guild_id: interaction.guildId || undefined,
            channel_type: channel ? ChannelType[channel.type] : undefined,
            is_thread: channel?.isThread(),
            permissions: this._getAppPermissionsBitfield(interaction),
            receive_latency_ms: Date.now() - interaction.createdTimestamp,
        };

        if (interaction instanceof Message) {
            return {
                ...base,
                posthogDistinctId: interaction.author.id,
                source: "message",
                guild_locale: interaction.guild?.preferredLocale,
                attachment_count: interaction.attachments.size,
                content_length: interaction.content.length,
                author_is_bot: interaction.author.bot,
            };
        }

        return {
            ...base,
            posthogDistinctId: interaction.user.id,
            source: "interaction",
            user_locale: interaction.locale,
            guild_locale: interaction.guildLocale || undefined,
            context: interaction.context != null ? InteractionContextType[interaction.context] : undefined,
            is_user_install: "1" in (interaction.authorizingIntegrationOwners || {}),
            deferred: interaction.deferred,
            replied: interaction.replied,
        };
    }

    private async _addGenerateMemeJob(data: MemeGenerationJob): Promise<MemeGenerationResult> {
        const job: Job<MemeGenerationJob, MemeGenerationResult> = await this._memeGenerationQueue.add(
            "meme-generation",
            data,
        );

        logger.emit({
            severityText: "debug",
            body: "generate_meme.job.added",
            attributes: {
                job_id: job.id,
                channel_id: data.channelId,
                posthogDistinctId: data.userId,
                trigger: data.trigger,
                template_name: data.templateName,
            },
        });

        return job.waitUntilFinished(this._memeGenerationQueueEvents, 60000);
    }

    private async _addVoiceTranscriptionJob(data: VoiceTranscriptionJob): Promise<VoiceTranscriptionResult> {
        const job: Job<VoiceTranscriptionJob, VoiceTranscriptionResult> = await this._voiceTranscriptionQueue.add(
            "voice-transcription",
            data,
        );

        logger.emit({
            severityText: "debug",
            body: "voice.speech_to_text.job.added",
            attributes: {
                job_id: job.id,
                channel_id: data.channelId,
            },
        });

        return job.waitUntilFinished(this._voiceTranscriptionQueueEvents, 60000);
    }
}
