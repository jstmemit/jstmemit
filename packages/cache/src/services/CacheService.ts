import type Keyv from "keyv";
import type { ICacheService } from "#/interfaces/ICacheService.ts";

export class CacheService implements ICacheService {
    private readonly _keyv: Keyv;

    public constructor(keyv: Keyv) {
        this._keyv = keyv;
    }

    public get<T>(key: string): Promise<T | undefined> {
        return this._keyv.get<T>(key);
    }

    public set<T>(key: string, value: T, ttlMs?: number): Promise<boolean> {
        return this._keyv.set(key, value, ttlMs);
    }

    public delete(key: string): Promise<boolean> {
        return this._keyv.delete(key);
    }

    public async getOrSet<T>(key: string, factory: () => Promise<T>, ttlMs?: number): Promise<T | undefined> {
        const cached: T | undefined = await this._keyv.get<T>(key);

        const isHit: boolean = cached !== undefined;
        if (isHit) return cached;

        const fresh: T = await factory();
        await this._keyv.set(key, fresh, ttlMs);
        return fresh;
    }
}
