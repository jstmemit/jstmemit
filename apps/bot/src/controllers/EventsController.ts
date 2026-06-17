import type { Guild } from "discord.js";
import { type Client, type Interaction, type Message } from "discord.js";
import type { IContextController } from "#/interfaces/IContextController.ts";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type { IEventsController } from "#/interfaces/IEventsController.ts";
import type { IRatingsController } from "#/interfaces/IRatingsController.ts";
import type { ISettingsController } from "#/interfaces/ISettingsController.ts";
import { analytics } from "@jstmemit/analytics/index";
import { Env } from "@jstmemit/shared/schemas/Env";

const env = Env.parse(process.env);

export class EventsController implements IEventsController {
    private readonly _contextController: IContextController;
    private readonly _channelsController: IChannelsController;
    private readonly _memesController: IMemesController;
    private readonly _ratingsController: IRatingsController;
    private readonly _settingsController: ISettingsController;

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

        if (env.DISCORD_CLIENT_ID === env.DISCORD_CLIENT_ID_PRODUCTION) {
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
    public async handleInteractionCreate(
        interaction: Interaction,
    ): Promise<void> {
        // chat commands
        if (interaction.isChatInputCommand()) {
            switch (interaction.commandName) {
                case "meme":
                    await this._memesController.handleMemeInteraction(
                        interaction,
                    );
                    break;
                case "enable":
                    await this._channelsController.handleEnableInteraction(
                        interaction,
                    );
                    break;
                case "settings":
                    await this._settingsController.handleSettingsInteraction(
                        interaction,
                    );
                    break;
            }
        }

        // buttons
        if (interaction.isButton()) {
            switch (interaction.customId) {
                case "meme":
                    await this._memesController.handleMemeInteraction(
                        interaction,
                    );
                    break;
                case "like":
                    await this._ratingsController.handleRatingInteraction(
                        interaction,
                        "like",
                    );
                    break;
                case "dislike":
                    await this._ratingsController.handleRatingInteraction(
                        interaction,
                        "dislike",
                    );
                    break;
                case "enable":
                case "disable":
                    await this._channelsController.handleEnableInteraction(
                        interaction,
                    );
                    break;
                case "settings":
                    await this._settingsController.handleSettingsInteraction(
                        interaction,
                    );
                    break;
            }
        }

        // string select menu
        if (interaction.isStringSelectMenu()) {
            switch (interaction.customId) {
                case "frequency":
                    await this._settingsController.handleFrequencySelect(
                        interaction,
                    );
                    break;
                case "avatar":
                    await this._settingsController.handleUserAvatarsSelect(
                        interaction,
                    );
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
        if (env.DISCORD_CLIENT_ID === env.DISCORD_CLIENT_ID_PRODUCTION) {
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
        if (env.DISCORD_CLIENT_ID === env.DISCORD_CLIENT_ID_PRODUCTION) {
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
}
