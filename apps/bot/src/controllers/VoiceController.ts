import { type ChatInputCommandInteraction, InteractionContextType, MessageFlags } from "discord.js";
import type { IVoiceController } from "#/interfaces/IVoiceController.ts";
import { type IAudioMetadata, parseBuffer } from "music-metadata";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import { logger } from "#/container.ts";
import { analytics } from "@jstmemit/analytics";
import type { Job, Queue, QueueEvents } from "bullmq";
import type { TextNarrationJob } from "@jstmemit/shared/models/TextNarrationJob";
import type { TextNarrationResult } from "@jstmemit/shared/models/TextNarrationResult";

export class VoiceController implements IVoiceController {
    private readonly _textNarrationQueue: Queue<TextNarrationJob, TextNarrationResult>;
    private readonly _textNarrationQueueEvents: QueueEvents;
    private readonly _componentsService: IComponentsService;

    public constructor(
        componentsService: IComponentsService,
        textNarrationQueue: Queue<TextNarrationJob, TextNarrationResult>,
        textNarrationQueueEvents: QueueEvents,
    ) {
        this._componentsService = componentsService;
        this._textNarrationQueue = textNarrationQueue;
        this._textNarrationQueueEvents = textNarrationQueueEvents;
    }

    public async handleNarrateTextInteraction(interaction: ChatInputCommandInteraction): Promise<void> {
        await interaction.deferReply();

        const text: string | null = interaction.options.getString("text");
        const voice: string | null = interaction.options.getString("voice");

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
                    voice,
                },
            });
            await respond(interaction, [
                this._componentsService.getErrorMessageComponent(interaction.locale, interaction.id),
            ]);
            return;
        }

        const audio: Buffer<ArrayBufferLike> = Buffer.from(result.audio);
        const metadata: IAudioMetadata = await parseBuffer(audio);
        const duration: number = Math.round(metadata.format.duration || 1);

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
                voice,
            },
        });

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

        return job.waitUntilFinished(this._textNarrationQueueEvents, 130000);
    }
}
