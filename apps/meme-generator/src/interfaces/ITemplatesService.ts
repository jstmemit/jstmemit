import type { Template } from "../models/Template.ts";

export abstract class ITemplatesService {
  public abstract getRandomTemplate(): Template | undefined;
}
