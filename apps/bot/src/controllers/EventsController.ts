import { type Client, type Interaction, type Message } from "discord.js";
import type { IContextController } from "#/interfaces/IContextController.ts";
import type { IMemesController } from "#/interfaces/IMemesController.ts";
import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type { IEventsController } from "#/interfaces/IEventsController.ts";
import type { IRatingsService } from "#/interfaces/IRatingsService.ts";

export class EventsController implements IEventsController {
  private readonly _contextController: IContextController;
  private readonly _channelsController: IChannelsController;
  private readonly _memesController: IMemesController;
  private readonly _ratingsService: IRatingsService;

  public constructor(
    contextController: IContextController,
    channelsController: IChannelsController,
    memesController: IMemesController,
    ratingsService: IRatingsService,
  ) {
    this._contextController = contextController;
    this._channelsController = channelsController;
    this._memesController = memesController;
    this._ratingsService = ratingsService;
  }

  public handleClientReady(readyClient: Client<true>): void {
    console.log(`Logged in as ${readyClient.user.tag}!`);
  }

  public async handleMessageCreate(message: Message): Promise<void> {
    if (message.author.bot) {
      return;
    }

    await this._contextController.handleNewMessage(message);
  }

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
          await this._ratingsService.updateRatingButtons(interaction);
          break;
        case "dislike":
          await this._ratingsService.updateRatingButtons(interaction);
          break;
      }
    }
  }
}
