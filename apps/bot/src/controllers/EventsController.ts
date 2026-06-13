import { type Client, type Interaction, type Message } from "discord.js";
import type { IContextController } from "#/interfaces/IContextController.ts";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type { IEventsController } from "#/interfaces/IEventsController.ts";
import type { IRatingsController } from "#/interfaces/IRatingsController.ts";

export class EventsController implements IEventsController {
  private readonly _contextController: IContextController;
  private readonly _channelsController: IChannelsController;
  private readonly _memesController: IMemesController;
  private readonly _ratingsController: IRatingsController;

  public constructor(
    contextController: IContextController,
    channelsController: IChannelsController,
    memesController: IMemesController,
    ratingsController: IRatingsController,
  ) {
    this._contextController = contextController;
    this._channelsController = channelsController;
    this._memesController = memesController;
    this._ratingsController = ratingsController;
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
          await this._memesController.handleMemeInteraction(interaction);
          break;
        case "enable":
          await this._channelsController.handleEnableInteraction(interaction);
      }
    }

    // buttons
    if (interaction.isButton()) {
      switch (interaction.customId) {
        case "meme":
          await this._memesController.handleMemeInteraction(interaction);
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
      }
    }
  }
}
