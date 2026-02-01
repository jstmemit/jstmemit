import { VoteRepository } from '../repositories/VoteRepository.js';
import { AnalyticsService } from './AnalyticsService.js';

const voteRepository = new VoteRepository();
const analyticsService = new AnalyticsService();

export class VoteService {
  public hasVoted(analyticsId: string, userId: string): boolean {
    return voteRepository.hasVoted(analyticsId, userId);
  }

  public vote(
    analyticsId: string,
    userId: string,
    channelId: string,
    type: 'like' | 'dislike',
  ): { likes: number; dislikes: number } {
    voteRepository.addVote(analyticsId, userId, type);

    const [templateName, generatedAt] = analyticsId.split('-');

    if (type === 'like') {
      analyticsService.captureMemeLiked(channelId, templateName!, generatedAt!);
    } else {
      analyticsService.captureMemeDisliked(channelId, templateName!, generatedAt!);
    }

    return voteRepository.getCounts(analyticsId);
  }
}
