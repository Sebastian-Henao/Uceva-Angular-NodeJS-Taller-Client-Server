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
     * Maneja la petición GET para obtener todos los midlaners.
     * Invoca al servicio que junta los datos estáticos con faker.
     * 
     * @param req Petición Express
     * @param res Respuesta Express
     * @returns Resuelve con la respuesta HTTP en JSON
     */
    public getAllMidlaners = async (req: Request, res: Response): Promise<void> => {
        try {
            const midlaners = await this.service.getAllMidlaners();
            res.json(midlaners);
        } catch (error) {
            console.error("Error al obtener los midlaners:", error);
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}
