import type { ITemplatesRepository } from "@jstmemit/shared/interfaces/ITemplatesRepository";
import type { Template } from "@jstmemit/shared/models/Template";
import type { ITemplatesService } from "../interfaces/ITemplatesService.ts";

export class TemplatesService implements ITemplatesService {
    private readonly _templatesRepository: ITemplatesRepository;

    public constructor(templatesRepository: ITemplatesRepository) {
        this._templatesRepository = templatesRepository;
    }

    public getTemplateByName(name: string): Template {
        const templates: Template[] = this._templatesRepository.getAll();

        const template: Template | undefined = templates.find((element: Template): boolean => element.name == name);

        if (!template) {
            throw new Error();
        }

        return template;
    }
}
