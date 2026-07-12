import type { Template } from "#/models/Template.ts";
import type { ArrayElement } from "#/models/ArrayElement.ts";

export abstract class ITemplatesRepository {
    public abstract getAll(): Template[];
    public abstract getAllByFieldMap<T, K extends keyof T>(
        items: T[],
        fieldName: K,
    ): Map<NonNullable<ArrayElement<T[K]>>, T[]>;
    public abstract getAllByField<K extends keyof Template>(
        fieldName: K,
        value: NonNullable<ArrayElement<Template[K]>>,
    ): Template[];
}
