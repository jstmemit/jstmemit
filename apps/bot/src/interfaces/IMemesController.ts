import type { ChatInputCommandInteraction } from "discord.js";

export abstract class IMemesController {
  public abstract handleMemeInteraction(
    interaction: ChatInputCommandInteraction,
  ): Promise<void>;
}
