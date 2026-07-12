import type { Template } from "#/models/Template.ts";
import type { TemplateMapKey } from "#/models/TemplateMapKey.ts";

export abstract class ITemplatesRepository {
    public abstract getAll(): Template[];
    public abstract getAllByFieldMap<K extends keyof Template>(
        templates: Template[],
        fieldName: K,
    ): Map<TemplateMapKey<Template, K>, Template[]>;
    public abstract getAllByField<K extends keyof Template>(
        fieldName: K,
        value: TemplateMapKey<Template, K>,
    ): Template[];
}
