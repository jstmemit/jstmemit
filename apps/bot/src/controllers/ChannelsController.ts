import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type { ChatInputCommandInteraction } from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";

export class ChannelsController implements IChannelsController {
  private readonly _channelsService: IChannelsService;

  public constructor(channelsService: IChannelsService) {
    this._channelsService = channelsService;
  }

  /**
   * Handles /enable command. Calls ChannelService to
   * switch channel (if disabled, then enable and vice versa).
   *
   * @param interaction
   *
   * @author Kyrylo Maliuha
   */
  public async handleEnableInteraction(
    interaction: ChatInputCommandInteraction,
  ): Promise<void> {
    await interaction.deferReply();

    try {
      const isEnabled: boolean = await this._channelsService.switchChannel(
        interaction.channelId,
      );

      // TODO: needs an embed
      await interaction.editReply(`channel is ${isEnabled}`);
    } catch (error) {
      console.error(error);

      // TODO: needs an embed
      await interaction.editReply("error");
    }
  }
}
