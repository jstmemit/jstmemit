import type { VoteRecord } from '../models/VoteRecord.js';

export class VoteRepository {
  private votes: Map<string, VoteRecord> = new Map();

  public hasVoted(analyticsId: string, userId: string): boolean {
    const record = this.votes.get(analyticsId);
    if (!record) return false;
    return record.likes.has(userId) || record.dislikes.has(userId);
  }

  public addVote(analyticsId: string, userId: string, type: 'like' | 'dislike'): void {
    let record = this.votes.get(analyticsId);

    if (!record) {
      record = { likes: new Set(), dislikes: new Set() };
      this.votes.set(analyticsId, record);
    }

    if (type === 'like') {
      record.likes.add(userId);
    } else {
      record.dislikes.add(userId);
    }
  }

  public getCounts(analyticsId: string): { likes: number; dislikes: number } {
    const record = this.votes.get(analyticsId);
    if (!record) {
      return { likes: 0, dislikes: 0 };
    }
    return {
      likes: record.likes.size,
      dislikes: record.dislikes.size,
    };
  }
}
