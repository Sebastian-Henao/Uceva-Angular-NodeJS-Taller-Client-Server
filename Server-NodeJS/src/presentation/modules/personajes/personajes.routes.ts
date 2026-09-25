import { Router } from "express";
import { PersonajesController } from "./personajes.controller";

export class PersonajesRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new PersonajesController();
        router.get("/:countPersonajes", controller.getAllPersinajes);
        return router;
    }
}