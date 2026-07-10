export interface ScopedStats<T> {
    global: Map<string, T>;
    channel: Map<string, T>;
    user: Map<string, T>;
}
