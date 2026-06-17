import { generationsTable } from "../schema.ts";
import { db } from "../index.ts";
import type { IGenerationsRepository } from "../interfaces/IGenerationsRepository.ts";
import { eq } from "drizzle-orm";

export class GenerationsRepository implements IGenerationsRepository {
    public async add(
        channelId: string,
        templateId: number,
        date: Date,
    ): Promise<number> {
        try {
            const generation = {
                channelId: channelId,
                templateId: templateId,
                createdAt: date,
            };

            const result = await db.insert(generationsTable).values(generation);

            return Number(result.lastInsertRowid);
        } catch (error) {
            console.error(error);

            return 0;
        }
    }

    public async get(
        generationId: number,
    ): Promise<typeof generationsTable.$inferSelect | undefined> {
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
}
