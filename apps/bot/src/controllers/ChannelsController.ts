import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type { ChatInputCommandInteraction } from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";

export class ChannelsController implements IChannelsController {
  private readonly _channelsService: IChannelsService;

  public constructor(channelsService: IChannelsService) {
    this._channelsService = channelsService;
  }

  public async handleEnableInteraction(
    interaction: ChatInputCommandInteraction,
  ): Promise<void> {
    await interaction.deferReply();

    try {
      const isEnabled: boolean = await this._channelsService.switchChannel(
        interaction.channelId,
      );

      await interaction.editReply(`channel is ${isEnabled}`);
    } catch (error) {
      console.error(error);

      await interaction.editReply("error");
    }
  }
}
