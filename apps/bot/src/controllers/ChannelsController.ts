import type { IChannelsController } from "#/interfaces/IChannelsController.ts";
import type { ChatInputCommandInteraction, ContainerBuilder } from "discord.js";
import { MessageFlags } from "discord.js";
import type { IChannelsService } from "#/interfaces/IChannelsService.ts";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import type { IMessagesRepository } from "@jstmemit/db/interfaces/IMessagesRepository";

export class ChannelsController implements IChannelsController {
  private readonly _channelsService: IChannelsService;
  private readonly _componentsService: IComponentsService;
  private readonly _messagesRepository: IMessagesRepository;

  public constructor(
    channelsService: IChannelsService,
    componentsService: IComponentsService,
    messagesRepository: IMessagesRepository,
  ) {
    this._channelsService = channelsService;
    this._componentsService = componentsService;
    this._messagesRepository = messagesRepository;
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

      const messagesAmount: number =
        await this._messagesRepository.getMessagesAmountByChannelId(
          interaction.channelId,
        );

      const message: ContainerBuilder =
        this._componentsService.getEnableMessageComponent(
          isEnabled,
          messagesAmount,
        );

      await interaction.editReply({
        flags: MessageFlags.IsComponentsV2,
        components: [message],
      });
    } catch (error) {
      console.error(error);

      // TODO: needs an embed
      await interaction.editReply("error");
    }
  }
}
