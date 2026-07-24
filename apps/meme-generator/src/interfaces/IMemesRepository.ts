import type { Template } from "@jstmemit/shared/models/Template";
import type { TemplateProps } from "@jstmemit/shared/models/TemplateProps";

export abstract class IMemesRepository {
    public abstract generateMeme(
        template: Template,
        props: TemplateProps,
        animated: boolean,
    ): Promise<Buffer<ArrayBufferLike> | Uint8Array<ArrayBufferLike>>;
}
