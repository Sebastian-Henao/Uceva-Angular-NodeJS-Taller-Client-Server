import { Request, Response } from "express";
import { MidlanersService } from "./midlaners.service";

/**
 * Controlador encargado de manejar las peticiones HTTP
 * relacionadas con los midlaners de League of Legends.
 */
export class MidlanersController {

    private readonly service: MidlanersService;

    constructor() {
        this.service = new MidlanersService();
    }

    /**
     * Maneja la petición GET para obtener una cantidad determinada de midlaners.
     * Invoca al servicio que junta los datos estáticos con faker.
     * 
     * @param req Petición Express
     * @param res Respuesta Express
     * @returns Resuelve con la respuesta HTTP en JSON
     */
    public getAllMidlaners = async (req: Request, res: Response): Promise<void> => {
        try {
            const { countMidlaners } = req.params;
            const count = Number(countMidlaners);

            if (!Number.isInteger(count) || count <= 0) {
                res.status(400).json({ error: "El parámetro countMidlaners debe ser un número entero positivo" });
                return;
            }

            const midlaners = await this.service.getAllMidlaners(count);
            res.json(midlaners);
        } catch (error) {
            console.error("Error al obtener los midlaners:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}
