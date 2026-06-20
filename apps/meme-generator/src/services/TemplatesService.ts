import type { Template } from "@jstmemit/shared/models/Template";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository.ts";
import type { ITemplatesService } from "#/interfaces/ITemplatesService.ts";

export class TemplatesService implements ITemplatesService {
    private readonly _templatesRepository: ITemplatesRepository;

    public constructor(templatesRepository: ITemplatesRepository) {
        this._templatesRepository = templatesRepository;
    }

    /**
     * Gets all templates from TemplatesRepository, then shuffles them
     * with each template's weight in mind
     *
     * @return Template
     *
     * @author Kyrylo Maliuha
     */
    public getRandomTemplate(): Template | undefined {
        const templates: Template[] = this._templatesRepository.getAll();

        const total: number = templates.reduce(
            (sum: number, template: Template): number =>
                sum + (template.weight ?? 1),
            0,
        );

        let roll: number = Math.random() * total;

        for (const template of templates) {
            roll -= template.weight ?? 1;

            if (roll < 0) {
                return template;
            }
        }

        return templates[templates.length - 1];
    }
}
