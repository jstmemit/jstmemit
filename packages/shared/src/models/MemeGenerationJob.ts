import type { Template } from "@jstmemit/meme-generator/models/Template";

export interface MemeGenerationJob {
  channelId: string;
  template?: Template;
}
