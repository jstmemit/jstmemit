import { type Client, type Interaction, type Message } from "discord.js";
import type { IContextController } from "./../interfaces/IContextController.ts";
import type { IMemesController } from "../interfaces/IMemesController.ts";
import type { IChannelsController } from "../interfaces/IChannelsController.ts";

export class EventsController {
  private readonly _contextController: IContextController;
  private readonly _channelsController: IChannelsController;
  private readonly _memesController: IMemesController;

  public constructor(
    contextController: IContextController,
    channelsController: IChannelsController,
    memesController: IMemesController,
  ) {
    this._contextController = contextController;
    this._channelsController = channelsController;
    this._memesController = memesController;
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
  }
}
