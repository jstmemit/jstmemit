export abstract class IFontsRepository {
    public abstract getImpact(): Buffer;
    public abstract getComicSans(): Buffer;
    public abstract getNotoSansHk(): Buffer;
    public abstract getNotoSansJp(): Buffer;
    public abstract getNotoSansKr(): Buffer;
    public abstract getNotoSansSc(): Buffer;
    public abstract getNotoSansTc(): Buffer;
}
