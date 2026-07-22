import { type ChatInputCommandInteraction, InteractionContextType, MessageFlags } from "discord.js";
import type { IVoiceController } from "#/interfaces/IVoiceController.ts";
import type { IVoiceService } from "@jstmemit/voice/interface/IVoiceService";
import { type IAudioMetadata, parseBuffer } from "music-metadata";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import { logger } from "#/container.ts";
import { analytics } from "@jstmemit/analytics";

export class VoiceController implements IVoiceController {
    private readonly _voiceService: IVoiceService;
    private readonly _componentsService: IComponentsService;

    public constructor(voiceService: IVoiceService, componentsService: IComponentsService) {
        this._voiceService = voiceService;
        this._componentsService = componentsService;
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

        const result: Buffer<ArrayBufferLike> | undefined = await this._voiceService.narrateText(text, voice);

        if (!result) {
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

        const metadata: IAudioMetadata = await parseBuffer(result);
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
                    attachment: result,
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
}
