import { Request, Response } from 'express';
import { CustomError } from '../../../domain/erros/custom.error';
import { HandleError } from '../../../domain/erros/handle.error';
import { AppointmentsService } from './appointments.service';

/**
 * Controlador HTTP del módulo de citas.
 */
export class AppointmentsController {
  private readonly appointmentsService = new AppointmentsService();

  /**
   * Devuelve las citas generadas según la cantidad solicitada.
   */
  getAllAppointments = (req: Request, res: Response): void => {
    try {
      const countAppointments = Number(req.params.countAppointments);

      if (!Number.isInteger(countAppointments) || countAppointments < 1 || countAppointments > 50) {
        throw CustomError.badRequest(
          'countAppointments debe ser un entero entre 1 y 50',
        );
      }

      const appointments = this.appointmentsService.getAllAppointments(countAppointments);
      res.status(200).json(appointments);
    } catch (error) {
      HandleError.error(error, res);
    }
  };
}