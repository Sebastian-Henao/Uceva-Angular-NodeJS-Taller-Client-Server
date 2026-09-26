import { Router } from 'express';
import { AppointmentsController } from './appointments.controller';

export class AppointmentsRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new AppointmentsController();

    /**
     * @openapi
     * /api/appointments/{countAppointments}:
     *   get:
     *     summary: Obtener citas médicas
     *     description: Retorna citas generadas dinámicamente con Faker.
     *     tags:
     *       - Appointments
     *     parameters:
     *       - in: path
     *         name: countAppointments
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           maximum: 50
     *           example: 10
     *         description: Cantidad de citas a generar.
     *     responses:
     *       200:
     *         description: Lista de citas generadas.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Appointment'
     *       400:
     *         description: Cantidad inválida.
     */
    router.get('/:countAppointments', controller.getAllAppointments);

    return router;
  }
}