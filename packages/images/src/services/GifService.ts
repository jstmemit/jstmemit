import type { IGifService } from "#/interfaces/IGifService.ts";
import { analytics } from "@jstmemit/analytics";

export class GifService implements IGifService {
    /**
     * Fetches a Tenor URL and looks for a direct link to the GIF
     * source inside <link> elements with "image_src" rel attribute
     *
     * @param url
     *
     * @author Kyrylo Maliuha
     */
    public async getTenorSourceUrl(url: string): Promise<string | undefined> {
        try {
            const response: Response = await fetch(url);

            if (!response.ok) {
                return undefined;
            }

            const html: string = await response.text();
            const match: RegExpMatchArray | null = html.match(/<link[^>]+rel="image_src"[^>]+href="([^"]+)"/i);

            return match?.[1];
        } catch (error) {
            analytics.captureException(error);
        }
    }

    /**
     * Fetches a Giphy URL and looks for direct link to the GIF
     * source inside "og:image" property
     * @param url
     */
    public async getGiphySourceUrl(url: string): Promise<string | undefined> {
        try {
            const response: Response = await fetch(url);

            if (!response.ok) {
                return undefined;
            }

            const html: string = await response.text();
            const match: RegExpMatchArray | null = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i);

            return match?.[1];
        } catch (error) {
            analytics.captureException(error);
        }
    }
}
