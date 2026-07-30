export abstract class IFontsRepository {
    public abstract getImpact(): Buffer;
    public abstract getComicSansRegular(): Buffer;
    public abstract getComicSansBold(): Buffer;
    public abstract getNotoSansMath(): Buffer;
    public abstract getNotoSans(): Buffer;
    public abstract getNotoSansHk(): Buffer;
    public abstract getNotoSansJp(): Buffer;
    public abstract getNotoSansKr(): Buffer;
    public abstract getNotoSansSc(): Buffer;
    public abstract getNotoSansTc(): Buffer;
    public abstract getNotoSansArabic(): Buffer;
    public abstract getNotoSansArmenian(): Buffer;
    public abstract getNotoSansBengali(): Buffer;
    public abstract getNotoSansDevanagari(): Buffer;
    public abstract getNotoSansGeorgian(): Buffer;
    public abstract getNotoSansHebrew(): Buffer;
    public abstract getNotoSansThai(): Buffer;
}
