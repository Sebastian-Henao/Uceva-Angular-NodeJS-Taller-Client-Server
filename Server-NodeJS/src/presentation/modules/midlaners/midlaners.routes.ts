import { Router } from "express";
import { MidlanersController } from "./midlaners.controller";

export class MidlanersRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new MidlanersController();

        /**
         * @openapi
         * /api/midlaners:
         *   get:
         *     summary: Obtener los 20 campeones de la línea central
         *     description: Retorna los campeones midlane con sus datos base y estadísticas variables.
         *     tags:
         *       - Midlaners
         *     responses:
         *       200:
         *         description: Lista de campeones midlane
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/Midlaner'
         *       500:
         *         description: Error interno del servidor
         */
        router.get("/", controller.getAllMidlaners);

        return router;
    }
}
