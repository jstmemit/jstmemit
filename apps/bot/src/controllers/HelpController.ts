import { type ChatInputCommandInteraction } from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { respond } from "#/helpers/respond.ts";
import { analytics } from "@jstmemit/analytics";
import type { IHelpController } from "#/interfaces/IHelpController.ts";
import type { channelsTable } from "@jstmemit/db/schema.ts";

export class HelpController implements IHelpController {
    private readonly _componentsService: IComponentsService;
    private readonly _channelsService: IChannelsService;

    public constructor(componentsService: IComponentsService, channelsService: IChannelsService) {
        this._componentsService = componentsService;
        this._channelsService = channelsService;
    }

    /**
     * Handles /help command.
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleHelpInteraction(interaction: ChatInputCommandInteraction): Promise<void> {
        await interaction.deferReply();

        try {
            const channel: typeof channelsTable.$inferSelect | undefined = await this._channelsService.getChannel(
                interaction.channelId,
            );

            analytics.capture({
                event: "help_opened",
                distinctId: interaction.user.id,
                properties: {
                    guildId: interaction.guildId,
                    command: "/help",
                    ...channel,
                },
            });

            // await respond(interaction, [this._componentsService.getSettingsHeaderMessageComponent()]);
        } catch (error) {
            analytics.captureException(error);
            await respond(interaction, [this._componentsService.getErrorMessageComponent(interaction.id)]);
        }
    }
}
