export interface ScopedStats<T, K = string> {
    global: Map<K, T>;
    channel: Map<K, T>;
    user: Map<K, T>;
}
