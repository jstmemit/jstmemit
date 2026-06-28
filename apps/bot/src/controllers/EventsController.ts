import type { ButtonInteraction, ChatInputCommandInteraction, Guild, StringSelectMenuInteraction } from "discord.js";
import { type Client, type Interaction, type Message } from "discord.js";
import type { IContextController } from "#/interfaces/IContextController.ts";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type { IEventsController } from "#/interfaces/IEventsController.ts";
import type { IRatingsController } from "#/interfaces/IRatingsController.ts";
import type { ISettingsController } from "#/interfaces/ISettingsController.ts";
import { analytics } from "@jstmemit/analytics";
import { Env } from "@jstmemit/shared/schemas/Env";
import { respondMissingPermissions } from "#/helpers/respondMissingPermissions.ts";

const env = Env.parse(process.env);

export class EventsController implements IEventsController {
    private readonly _contextController: IContextController;
    private readonly _channelsController: IChannelsController;
    private readonly _memesController: IMemesController;
    private readonly _ratingsController: IRatingsController;
    private readonly _settingsController: ISettingsController;
    private readonly _isProduction: boolean = env.DISCORD_CLIENT_ID === env.DISCORD_CLIENT_ID_PRODUCTION;

    public constructor(
        contextController: IContextController,
        channelsController: IChannelsController,
        memesController: IMemesController,
        ratingsController: IRatingsController,
        settingsController: ISettingsController,
    ) {
        this._contextController = contextController;
        this._channelsController = channelsController;
        this._memesController = memesController;
        this._ratingsController = ratingsController;
        this._settingsController = settingsController;
    }

    /**
     * Handles the Events.ClientReady event from discord.js library
     *
     * @param readyClient
     *
     * @author Kyrylo Maliuha
     */
    public handleClientReady(readyClient: Client<true>): void {
        console.log(`Logged in as ${readyClient.user.tag}!`);

        if (this._isProduction) {
            analytics.capture({
                event: "guild_count_update",
                distinctId: "bot",
                properties: { guildCount: readyClient.guilds.cache.size },
            });
        }
    }

    /**
     * Handles the Events.MessageCreate event from discord.js library
     *
     * @param message
     *
     * @author Kyrylo Maliuha
     */
    public async handleMessageCreate(message: Message): Promise<void> {
        if (message.author.bot) {
            return;
        }

        await this._contextController.handleNewMessage(message);
    }

    /**
     * Handles the Events.InteractionCreate event from discord.js library
     *
     * @param interaction
     *
     * @author Kyrylo Maliuha
     */
    public async handleInteractionCreate(interaction: Interaction): Promise<void> {
        // chat commands
        if (interaction.isChatInputCommand()) {
            // without permissions
            switch (interaction.commandName) {
                case "meme":
                    await this._memesController.handleMemeInteraction(interaction);
                    break;
            }

            if (await this._checkForMissingPermissions(interaction)) {
                return;
            }

            // only with permissions
            switch (interaction.commandName) {
                case "enable":
                    await this._channelsController.handleEnableInteraction(interaction);
                    break;
                case "settings":
                    await this._settingsController.handleSettingsInteraction(interaction);
                    break;
            }
        }

        // buttons
        if (interaction.isButton()) {
            const id: string | undefined = interaction.customId.split(":")[1];
            const customId: string = interaction.customId.split(":")[0] || interaction.customId;

            // without permissions
            switch (customId) {
                case "meme":
                    await this._memesController.handleMemeInteraction(interaction);
                    break;
                case "like":
                case "dislike":
                    await this._ratingsController.handleRatingInteraction(interaction, customId, Number(id));
                    break;
            }

            if (await this._checkForMissingPermissions(interaction)) {
                return;
            }

            // only with permissions
            switch (customId) {
                case "meme":
                    await this._memesController.handleMemeInteraction(interaction);
                    break;
                case "like":
                case "dislike":
                    await this._ratingsController.handleRatingInteraction(interaction, customId, Number(id));
                    break;
                case "enable":
                case "disable":
                    await this._channelsController.handleEnableInteraction(interaction);
                    break;
                case "settings":
                    await this._settingsController.handleSettingsInteraction(interaction);
                    break;
                case "open-delete-data-confirmation":
                    await this._settingsController.handleOpenDeleteDataConfirmationInteraction(interaction);
                    break;
                case "delete-data":
                    await this._settingsController.handleDeleteDataInteraction(interaction);
                    break;
            }
        }

        // string select menu
        if (interaction.isStringSelectMenu()) {
            if (await this._checkForMissingPermissions(interaction)) {
                return;
            }

            switch (interaction.customId) {
                case "frequency":
                    await this._settingsController.handleFrequencySelect(interaction);
                    break;
                case "avatar":
                    await this._settingsController.handleUserAvatarsSelect(interaction);
                    break;
            }
        }
    }

    /**
     * Handles the Events.GuildCreate event from discord.js library
     *
     * @param guild
     *
     * @author Kyrylo Maliuha
     */
    public handleGuildCreate(guild: Guild): void {
        if (this._isProduction) {
            analytics.capture({
                event: "guild_joined",
                distinctId: "bot",
                properties: {
                    guildId: guild.id,
                    memberCount: guild.memberCount,
                    guildCount: guild.client.guilds.cache.size,
                },
            });
        }
    }

    /**
     * Handles the Events.GuildDelete event from discord.js library
     *
     * @param guild
     *
     * @author Kyrylo Maliuha
     */
    public handleGuildDelete(guild: Guild): void {
        if (this._isProduction) {
            analytics.capture({
                event: "guild_left",
                distinctId: "bot",
                properties: {
                    guildId: guild.id,
                    guildCount: guild.client.guilds.cache.size,
                },
            });
        }
    }

    /**
     * Checks if a user is missing Manage Server or Manage Channels permissions, then if
     * he does it will send an error message and return true.
     *
     * @param interaction
     * @private
     *
     * @author Kyrylo Maliuha
     */
    private async _checkForMissingPermissions(
        interaction: ButtonInteraction | ChatInputCommandInteraction | StringSelectMenuInteraction,
    ): Promise<boolean> {
        if (
            interaction?.memberPermissions?.has("ManageChannels", true) ||
            interaction?.memberPermissions?.has("ManageGuild", true)
        ) {
            return false;
        } else {
            await respondMissingPermissions(interaction);

            return true;
        }
    }
}
