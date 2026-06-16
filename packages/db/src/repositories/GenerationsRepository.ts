import { generationsTable } from "../schema.ts";
import { db } from "../index.ts";
import type { IGenerationsRepository } from "../interfaces/IGenerationsRepository.ts";

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
}
