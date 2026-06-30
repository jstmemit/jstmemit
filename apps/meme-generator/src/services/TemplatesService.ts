import type { Template } from "@jstmemit/shared/models/Template";
import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository.ts";
import type { ITemplatesService } from "#/interfaces/ITemplatesService.ts";
import _ from "lodash";

export class TemplatesService implements ITemplatesService {
    private readonly _templatesRepository: ITemplatesRepository;

    public constructor(templatesRepository: ITemplatesRepository) {
        this._templatesRepository = templatesRepository;
    }

    /**
     * Gets all templates from TemplatesRepository, then shuffles them
     * and returns first template from the array
     *
     * @return Template
     *
     * @author Kyrylo Maliuha
     */
    public getRandomTemplate(): Template | undefined {
        const templates: Template[] = this._templatesRepository.getAll();

        return _.shuffle(templates)[0];
    }
}
