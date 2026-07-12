export type ArrayElement<V> = V extends readonly (infer U)[] ? U : V;
