import { Router } from "express";
import { PersonajesController } from "./personajes.controller";

export class PersonajesRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new PersonajesController();
        /**
         * @openapi
         * /api/personajes/{countPersonajes}:
         *   get:
         *     summary: Obtener listado de personajes
         *     description: Retorna una lista de personajes generados dinámicamente según la cantidad solicitada.
         *     tags:
         *       - Personajes
         *     parameters:
         *       - in: path
         *         name: countPersonajes
         *         required: true
         *         schema:
         *           type: integer
         *           minimum: 1
         *           example: 10
         *         description: Cantidad de personajes a generar
         *     responses:
         *       200:
         *         description: Lista de personajes generados
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/Personaje'
         *       400:
         *         description: Parámetro inválido
         */
        router.get("/:countPersonajes", controller.getAllPersonajes);
        return router;
    }
}