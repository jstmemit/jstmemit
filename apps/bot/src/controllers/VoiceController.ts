import type { Message } from "discord.js";
import {
    ChannelType,
    type ChatInputCommandInteraction,
    InteractionContextType,
    type MessageContextMenuCommandInteraction,
    MessageFlags,
} from "discord.js";
import type { IVoiceController } from "#/interfaces/IVoiceController.ts";
import { type IAudioMetadata, parseBuffer } from "music-metadata";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import { logger } from "#/container.ts";
import { analytics } from "@jstmemit/analytics";
import type { Job, Queue, QueueEvents } from "bullmq";
import type { TextNarrationJob } from "@jstmemit/shared/models/TextNarrationJob";
import type { TextNarrationResult } from "@jstmemit/shared/models/TextNarrationResult";
import type { INarrationsRepository } from "@jstmemit/db/interfaces/INarrationsRepository";
import ms from "ms";

export class VoiceController implements IVoiceController {
    private readonly _textNarrationQueue: Queue<TextNarrationJob, TextNarrationResult>;
    private readonly _textNarrationQueueEvents: QueueEvents;
    private readonly _componentsService: IComponentsService;
    private readonly _narrationsRepository: INarrationsRepository;

    public constructor(
        componentsService: IComponentsService,
        textNarrationQueue: Queue<TextNarrationJob, TextNarrationResult>,
        textNarrationQueueEvents: QueueEvents,
        narrationsRepository: INarrationsRepository,
    ) {
        this._componentsService = componentsService;
        this._textNarrationQueue = textNarrationQueue;
        this._textNarrationQueueEvents = textNarrationQueueEvents;
        this._narrationsRepository = narrationsRepository;
    }

    public async handleNarrateTextInteraction(
        interaction: ChatInputCommandInteraction | MessageContextMenuCommandInteraction,
    ): Promise<void> {
        await interaction.deferReply();
        let duration: number = 1;
        let text: string | null = null;
        let voice: string | null = null;

        if (interaction.isChatInputCommand()) {
            text = interaction.options.getString("text");
            voice = interaction.options.getString("voice");
        }

        if (interaction.isMessageContextMenuCommand()) {
            const message: Message = interaction.targetMessage;
            text = message.content;
        }

        if (!text) {
            logger.emit({
                severityText: "warn",
                body: "voice.narrate_text.no_text_given",
                attributes: {
                    posthogDistinctId: interaction.user.id,
                    channel_id: interaction.channelId,
                    guild_id: interaction.guildId,
                    locale: interaction.locale,
                    receive_latency_ms: Date.now() - interaction.createdTimestamp,
                    context: interaction.context != null ? InteractionContextType[interaction.context] : undefined,
                    is_user_install: "1" in (interaction.authorizingIntegrationOwners || {}),
                    deferred: interaction.deferred,
                    replied: interaction.replied,
                    voice,
                },
            });
            await respond(interaction, [
                this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id),
            ]);
            return;
        }

        const result: TextNarrationResult = await this._addTextNarrationJob({
            guildId: interaction.guildId,
            channelId: interaction.channelId,
            userId: interaction.user.id,
            text,
            voiceId: voice,
        });

        if (!result || !result.audio) {
            logger.emit({
                severityText: "warn",
                body: "voice.narrate_text.failed_error_shown",
                attributes: {
                    posthogDistinctId: interaction.user.id,
                    channel_id: interaction.channelId,
                    guild_id: interaction.guildId,
                    locale: interaction.locale,
                    receive_latency_ms: Date.now() - interaction.createdTimestamp,
                    context: interaction.context != null ? InteractionContextType[interaction.context] : undefined,
                    is_user_install: "1" in (interaction.authorizingIntegrationOwners || {}),
                    deferred: interaction.deferred,
                    replied: interaction.replied,
                    channelType: interaction.channel ? ChannelType[interaction.channel.type] : undefined,
                    voiceExplicitlyPicked: voice != null,
                    textLength: text.length,
                    voice,
                },
            });
            await respond(interaction, [
                this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id),
            ]);
            return;
        }

        const audio: Buffer = Buffer.from(result.audio);

        if (audio.byteLength === 0) {
            return;
        }

        logger.emit({
            severityText: "debug",
            body: "voice.narrate_text.audio_received",
            attributes: {
                byte_length: audio.byteLength,
                magic: audio.subarray(0, 8).toString("hex"),
                text_length: text.length,
            },
        });

        try {
            const metadata: IAudioMetadata = await parseBuffer(audio, { mimeType: "audio/ogg" });
            duration = Math.round(metadata.format.duration || 1);
        } catch (error) {
            logger.emit({
                severityText: "warn",
                body: "voice.narrate_text.metadata_parse_failed",
                attributes: {
                    error_message: error instanceof Error ? error.message : String(error),
                    byte_length: audio.byteLength,
                    magic: audio.subarray(0, 8).toString("hex"),
                },
            });
        }

        analytics.capture({
            event: "text_narrated",
            distinctId: interaction.user.id,
            properties: {
                channelId: interaction.channelId,
                guildId: interaction.guildId,
                locale: interaction.locale,
                receiveLatencyMs: Date.now() - interaction.createdTimestamp,
                context: interaction.context != null ? InteractionContextType[interaction.context] : undefined,
                isUserInstall: "1" in (interaction.authorizingIntegrationOwners || {}),
                channelType: interaction.channel ? ChannelType[interaction.channel.type] : undefined,
                voiceExplicitlyPicked: voice != null,
                textLength: text.length,
                durationSeconds: duration,
                audioBytes: audio.byteLength,
                voice,
            },
        });

        await this._narrationsRepository.add(interaction.channelId, result.voice, new Date());

        await interaction.followUp({
            files: [
                {
                    attachment: audio,
                    name: `${text.substring(0, 16)}.ogg`,
                    duration: duration,
                    waveform: this._randomWaveform(),
                },
            ],
            flags: MessageFlags.IsVoiceMessage,
        });
    }

    private _randomWaveform(): string {
        const bytes: Uint8Array = new Uint8Array(64);
        let level: number = 128;
        for (let i = 0; i < bytes.length; i++) {
            level = Math.max(32, Math.min(224, level + (Math.random() - 0.5) * 80));
            bytes[i] = level;
        }
        return Buffer.from(bytes).toString("base64");
    }

    private async _addTextNarrationJob(data: TextNarrationJob): Promise<TextNarrationResult> {
        const job: Job<TextNarrationJob, TextNarrationResult> = await this._textNarrationQueue.add(
            "text-narration",
            data,
        );

        logger.emit({
            severityText: "debug",
            body: "voice.narrate_text.job.added",
            attributes: {
                job_id: job.id,
                channel_id: data.channelId,
                guild_id: data.guildId,
                voice_id: data.voiceId,
                posthogDistinctId: data.userId,
            },
        });

        return job.waitUntilFinished(this._textNarrationQueueEvents, ms("10m"));
    }
}
