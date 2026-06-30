import type { BanditStat } from "@jstmemit/shared/models/BanditStat";
import type { BanditScope } from "@jstmemit/shared/models/BanditScope";

export abstract class IBanditRepository {
    public abstract getStats(scope: BanditScope, scopeId: string, templateNames: string[]): Promise<BanditStat[]>;

    public abstract addReward(
        scope: BanditScope,
        scopeId: string,
        templateName: string,
        deltaSuccess: number,
        deltaFailure: number,
    ): Promise<boolean>;

    public abstract decayAll(factor: number): Promise<boolean>;
}
