import { ContainerBuilder, TextDisplayBuilder } from "discord.js";
import type { IComponentsService } from "#/interfaces/IComponentsService.ts";
import { emojis } from "#/data/emojis.ts";

export class ComponentsService implements IComponentsService {
  public getEnableMessageComponent(
    isEnabled: boolean,
    messagesAmount: number,
  ): ContainerBuilder {
    const progressBar: string = this._createProgressBar(messagesAmount, 30, 10);

    return new ContainerBuilder()
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          `# ${isEnabled ? `🎉 Bot is ready!` : `🔴 Training is **disabled** in this channel!`}`,
        ),
      )
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          isEnabled
            ? `Setup is finished! Bot is training on new messages and will generate memes during active chatting moments. Quality of text inside memes will improve as soon as bot has ~30 messages in its memory.`
            : `Bot is disabled in this channel! To respect your privacy, Jstmemit needs to be enabled before it can start learning from messages here.`,
        ),
      )
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(
          messagesAmount < 30
            ? `Messages in memory: **${messagesAmount}/30**`
            : `Messages in memory: **${messagesAmount}**`,
        ),
      )
      .addTextDisplayComponents(
        new TextDisplayBuilder().setContent(`${progressBar}`),
      );
  }

  private _createProgressBar(
    value: number,
    max: number,
    segments: number,
  ): string {
    const clamped: number = Math.max(0, Math.min(value, max));

    const percentage: number = clamped / max;

    const filled: number = Math.floor(percentage * segments);

    let progressBar: string = "";

    for (let i: number = 0; i < segments; i++) {
      if (i < filled) {
        if (i === 0) {
          progressBar += emojis.fill1;
        } else if (i === segments - 1 || i === filled - 1) {
          progressBar += emojis.fill3;
        } else {
          progressBar += emojis.fill2;
        }
      } else {
        if (i === 0) {
          progressBar += emojis.empty1;
        } else if (i === segments - 1) {
          progressBar += emojis.empty3;
        } else {
          progressBar += emojis.empty2;
        }
      }
    }

    return progressBar;
  }
}
