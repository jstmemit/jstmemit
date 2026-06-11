import type { Template } from "../models/Template.ts";

export abstract class ITemplatesRepository {
  public abstract getAll(): Template[];
}
