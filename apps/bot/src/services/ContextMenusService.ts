import type { Job, Queue, QueueEvents } from "bullmq";
import { logger } from "#/container.ts";
import ms from "ms";
import type { Message } from "discord.js";
import {
    type MessageContextMenuCommandInteraction,
    type User,
    type UserContextMenuCommandInteraction,
} from "discord.js";
import { getTelemetryProperties } from "#/helpers/getTelemetryProperties.ts";
import type { VoiceTranscriptionJob } from "@jstmemit/shared/models/VoiceTranscriptionJob";
import type { VoiceTranscriptionResult } from "@jstmemit/shared/models/VoiceTranscriptionResult";
import type { Template } from "@jstmemit/shared/models/Template";
import type { TemplateText } from "@jstmemit/shared/models/TemplateText";
import type { IContextMenusService } from "#/interfaces/IContextMenusService.ts";

export class ContextMenusService implements IContextMenusService {
    private readonly _voiceTranscriptionQueue: Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>;
    private readonly _voiceTranscriptionQueueEvents: QueueEvents;

    public constructor(
        voiceTranscriptionQueue: Queue<VoiceTranscriptionJob, VoiceTranscriptionResult>,
        voiceTranscriptionQueueEvents: QueueEvents,
    ) {
        this._voiceTranscriptionQueue = voiceTranscriptionQueue;
        this._voiceTranscriptionQueueEvents = voiceTranscriptionQueueEvents;
    }

    public async getContextMenuTexts(
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
                        ...getTelemetryProperties(interaction),
                    },
                });
                const result: VoiceTranscriptionResult = await this._addVoiceTranscriptionJob({
                    url: voiceMessage,
                    channelId: interaction.channelId,
                });
                message.content = result.text;
            }

            // if a template has 1 slot
            if (first && !second) {
                texts[first.id] = message.embeds[0]?.data.thumbnail?.proxy_url
                    ? message.author.displayName
                    : message.content;

                // if a template has 2 slots
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

    public getContextMenuImage(
        template: Template,
        interaction: MessageContextMenuCommandInteraction | UserContextMenuCommandInteraction,
    ): Record<string, string> {
        const images: Record<string, string> = {};

        // if a template has image slot #1
        if (template.images?.[0]) {
            if (interaction.isMessageContextMenuCommand()) {
                const message: Message = interaction.targetMessage;

                images[template.images[0].id] =
                    message.embeds[0]?.data.thumbnail?.proxy_url ||
                    message.author.displayAvatarURL({ extension: "png", size: 512 });
            }

            if (interaction.isUserContextMenuCommand()) {
                const user: User = interaction.targetUser;

                images[template.images[0].id] = user.displayAvatarURL({ extension: "png", size: 512 });
            }
        }

        // if a template has image slot #2
        if (template.images?.[1]) {
            images[template.images[1].id] = interaction.user.displayAvatarURL({ extension: "png", size: 512 });
        }

        return images;
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

        return job.waitUntilFinished(this._voiceTranscriptionQueueEvents, ms("10m"));
    }
}
