import type { Message } from "discord.js";

export abstract class IContextController {
  public abstract handleNewMessage(message: Message): Promise<void>;
}
