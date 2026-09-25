import { Request, Response } from "express"
import { HandleError } from "../../../domain/erros/handle.error";
import { PersonajesService } from "./personajes.service";

export class PersonajesController {
    private readonly personajesService = new PersonajesService();
    getAllPersinajes = (req: Request, res: Response): void => {
        const { countPersonajes } = req.params;

        setTimeout(() => {
            this.personajesService
            .getAllPersonajes(Number(countPersonajes))
            .then((personajes) => res.status(201).json(personajes))
            .catch((error) => HandleError.error(error, res));
        }, 3000);
    };
}