import { Router } from "express";
import { MidlanersController } from "./midlaners.controller";

export class MidlanersRoutes {
    static get routes(): Router {
        const router = Router();
        const controller = new MidlanersController();

        router.get("/", controller.getAllMidlaners);

        return router;
    }
}
