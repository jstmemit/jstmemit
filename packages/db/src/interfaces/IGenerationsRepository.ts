import type { generationsTable } from "../schema.ts";

export abstract class IGenerationsRepository {
    public abstract add(channelId: string, templateName: string, date: Date): Promise<number>;

    public abstract get(generationId: number): Promise<typeof generationsTable.$inferSelect | undefined>;
}
