export abstract class IGenerationsRepository {
    public abstract add(
        channelId: string,
        templateId: number,
        date: Date,
    ): Promise<number>;
}
