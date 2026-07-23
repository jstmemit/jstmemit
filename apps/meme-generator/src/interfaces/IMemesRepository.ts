import type { Template } from "@jstmemit/shared/models/Template";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";

export abstract class IMemesRepository {
    public abstract generateMeme(template: Template, props: TemplateProps): Promise<string | undefined>;

    public abstract convertIntoBuffer(svg: string, width: number, turbo: boolean): Promise<Buffer>;
}
