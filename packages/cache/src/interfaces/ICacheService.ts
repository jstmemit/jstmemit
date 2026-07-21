export abstract class ICacheService {
    public abstract get<T>(key: string): Promise<T | undefined>;
    public abstract set<T>(key: string, value: T, ttlMs?: number): Promise<boolean>;
    public abstract delete(key: string): Promise<boolean>;
    public abstract getOrSet<T>(key: string, factory: () => T | Promise<T>, ttlMs?: number): Promise<T>;
}
