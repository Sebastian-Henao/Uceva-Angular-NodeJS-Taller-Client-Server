import { Router } from "express";
import { MidlanersController } from "./midlaners.controller";

export class MidlanersRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new MidlanersController();

        /**
         * @openapi
         * /api/midlaners/{countMidlaners}:
         *   get:
         *     summary: Obtener listado de champions midlane
         *     description: Retorna la cantidad de campeones solicitada en la ruta con datos base y estadísticas variables.
         *     tags:
         *       - Midlaners
         *     parameters:
         *       - in: path
         *         name: countMidlaners
         *         required: true
         *         schema:
         *           type: integer
         *           minimum: 1
         *           example: 10
         *         description: Cantidad de midlaners a generar
         *     responses:
         *       200:
         *         description: Lista de campeones midlane
         *         content:
         *           application/json:
         *             schema:
         *               type: array
         *               items:
         *                 $ref: '#/components/schemas/Midlaner'
         *       400:
         *         description: Parámetro inválido
         *       500:
         *         description: Error interno del servidor
         */
        router.get("/:countMidlaners", controller.getAllMidlaners);

        return router;
    }
}
