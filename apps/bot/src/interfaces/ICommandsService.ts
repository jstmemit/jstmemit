export abstract class ICommandsService {
    public abstract getCommandMention(name: string): string | undefined;
}
