type ArrayElement<V> = V extends readonly (infer U)[] ? U : V;
export type TemplateMapKey<T, K extends keyof T> = NonNullable<ArrayElement<T[K]>>;
export type TemplateMapStringKey<T, K extends keyof T> = TemplateMapKey<T, K> & string;
