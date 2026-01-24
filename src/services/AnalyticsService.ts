import { PostHog } from 'posthog-node';

const client = new PostHog(
  process.env.POSTHOG_PROJECT_API_KEY!,
  {
    host: 'https://eu.i.posthog.com',
  },
);

export class AnalyticsService {
  public async captureEvent(channelId: string, event: string, properties?: Record<string, any>) {
    client.capture({
      distinctId: channelId,
      event,
      properties,
    });
  }
}
