import type { ContainerBuilder } from "discord.js";

export abstract class IComponentsService {
    public abstract getEnableMessageComponent(
        isEnabled: boolean,
        messagesAmount: number,
    ): ContainerBuilder;
}
