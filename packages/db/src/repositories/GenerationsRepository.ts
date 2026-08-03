import { generationsTable } from "../schema.ts";
import { db } from "../index.ts";
import type { IGenerationsRepository } from "../interfaces/IGenerationsRepository.ts";
import { count, eq, countDistinct } from "drizzle-orm";

export class GenerationsRepository implements IGenerationsRepository {
    public async add(channelId: string, templateName: string, date: Date): Promise<number> {
        try {
            const generation = {
                channelId: channelId,
                templateName: templateName,
                createdAt: date,
            };

            const result = await db.insert(generationsTable).values(generation);

            return Number(result.lastInsertRowid);
        } catch (error) {
            console.error(error);

            return 0;
        }
    }

    public async get(generationId: number): Promise<typeof generationsTable.$inferSelect | undefined> {
        try {
            const generations = await db
                .select()
                .from(generationsTable)
                .where(eq(generationsTable.id, generationId))
                .limit(1);

            return generations[0];
        } catch (error) {
            console.error(error);

            return undefined;
        }
    }

    public async getCountPerChannel(channelId: string): Promise<number> {
        try {
            const result = await db
                .select({ count: count() })
                .from(generationsTable)
                .where(eq(generationsTable.channelId, channelId))
                .limit(1);

            return result[0]?.count as number;
        } catch (error) {
            console.error(error);

            return 0;
        }
    }

    public async getTemplateCountPerChannel(channelId: string): Promise<number> {
        try {
            const result = await db
                .select({ count: countDistinct(generationsTable.templateName) })
                .from(generationsTable)
                .where(eq(generationsTable.channelId, channelId));

            return result[0]?.count as number;
        } catch (error) {
            console.error(error);

            return 0;
        }
    }
}
