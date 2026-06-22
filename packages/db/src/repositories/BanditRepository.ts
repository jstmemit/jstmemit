import type { IBanditRepository } from "../interfaces/IBanditRepository.ts";
import { banditStatsTable } from "../schema.ts";
import { and, eq, inArray, sql } from "drizzle-orm";
import { db } from "../index.ts";
import type { BanditStat } from "@jstmemit/shared/models/BanditStat";
import type { BanditScope } from "@jstmemit/shared/models/BanditScope";

export class BanditRepository implements IBanditRepository {
    public async getStats(scope: BanditScope, scopeId: string, templateIds: number[]): Promise<BanditStat[]> {
        try {
            if (templateIds.length === 0) {
                return [];
            }

            const rows = await db
                .select({
                    templateId: banditStatsTable.templateId,
                    successes: banditStatsTable.successes,
                    failures: banditStatsTable.failures,
                })
                .from(banditStatsTable)
                .where(
                    and(
                        eq(banditStatsTable.scope, scope),
                        eq(banditStatsTable.scopeId, scopeId),
                        inArray(banditStatsTable.templateId, templateIds),
                    ),
                );

            const byTemplate: Map<number, BanditStat> = new Map(rows.map((row) => [row.templateId, row]));

            return templateIds.map(
                (templateId: number): BanditStat =>
                    byTemplate.get(templateId) ?? {
                        templateId: templateId,
                        successes: 0,
                        failures: 0,
                    },
            );
        } catch (error) {
            console.error(error);

            return templateIds.map((templateId: number) => ({
                templateId: templateId,
                successes: 0,
                failures: 0,
            }));
        }
    }

    public async addReward(
        scope: BanditScope,
        scopeId: string,
        templateId: number,
        deltaSuccess: number,
        deltaFailure: number,
    ): Promise<boolean> {
        try {
            await db
                .insert(banditStatsTable)
                .values({
                    scope: scope,
                    scopeId: scopeId,
                    templateId: templateId,
                    successes: deltaSuccess,
                    failures: deltaFailure,
                    updatedAt: new Date(),
                })
                .onConflictDoUpdate({
                    target: [banditStatsTable.scope, banditStatsTable.scopeId, banditStatsTable.templateId],
                    set: {
                        successes: sql`${banditStatsTable.successes} + ${deltaSuccess}`,
                        failures: sql`${banditStatsTable.failures} + ${deltaFailure}`,
                        updatedAt: new Date(),
                    },
                });

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    }

    public async decayAll(factor: number): Promise<boolean> {
        try {
            await db.update(banditStatsTable).set({
                successes: sql`${banditStatsTable.successes} * ${factor}`,
                failures: sql`${banditStatsTable.failures} * ${factor}`,
            });

            return true;
        } catch (error) {
            console.error(error);

            return false;
        }
    }
}
