import type { IBanditRepository } from "../interfaces/IBanditRepository.ts";
import { banditStatsTable } from "../schema.ts";
import { and, eq, inArray, sql } from "drizzle-orm";
import { db } from "../index.ts";
import type { BanditStat } from "@jstmemit/shared/models/BanditStat";
import type { BanditScope } from "@jstmemit/shared/models/BanditScope";
import { analytics } from "@jstmemit/analytics";

export class BanditRepository implements IBanditRepository {
    public async getStats(scope: BanditScope, scopeId: string, templateNames: string[]): Promise<BanditStat[]> {
        try {
            if (templateNames.length === 0) {
                return [];
            }

            const rows = await db
                .select({
                    name: banditStatsTable.templateName,
                    successes: banditStatsTable.successes,
                    failures: banditStatsTable.failures,
                })
                .from(banditStatsTable)
                .where(
                    and(
                        eq(banditStatsTable.scope, scope),
                        eq(banditStatsTable.scopeId, scopeId),
                        inArray(banditStatsTable.templateName, templateNames),
                    ),
                );

            const byTemplate: Map<string, BanditStat> = new Map(rows.map((row) => [row.name, row]));

            return templateNames.map(
                (templateName: string): BanditStat =>
                    byTemplate.get(templateName) ?? {
                        name: templateName,
                        successes: 0,
                        failures: 0,
                    },
            );
        } catch (error) {
            analytics.captureException(error);

            return templateNames.map((templateName: string) => ({
                name: templateName,
                successes: 0,
                failures: 0,
            }));
        }
    }

    public async addReward(
        scope: BanditScope,
        scopeId: string,
        templateName: string,
        deltaSuccess: number,
        deltaFailure: number,
    ): Promise<boolean> {
        try {
            await db
                .insert(banditStatsTable)
                .values({
                    scope: scope,
                    scopeId: scopeId,
                    templateName: templateName,
                    successes: deltaSuccess,
                    failures: deltaFailure,
                    updatedAt: new Date(),
                })
                .onConflictDoUpdate({
                    target: [banditStatsTable.scope, banditStatsTable.scopeId, banditStatsTable.templateName],
                    set: {
                        successes: sql`${banditStatsTable.successes} + ${deltaSuccess}`,
                        failures: sql`${banditStatsTable.failures} + ${deltaFailure}`,
                        updatedAt: new Date(),
                    },
                });

            return true;
        } catch (error) {
            analytics.captureException(error);

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
            analytics.captureException(error);

            return false;
        }
    }
}
