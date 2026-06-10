import type { ITemplatesRepository } from "../interfaces/ITemplatesRepository.ts";
import type { Template } from "../models/Template.ts";
import { topBottomText } from "../data/templates/topBottomText.tsx";

export class TemplatesRepository implements ITemplatesRepository {
  /**
   * Returns an array of all template objects
   *
   * @returns Template[]
   *
   * @author Kyrylo Maliuha
   */
  public getAll(): Template[] {
    return [topBottomText];
  }
}
