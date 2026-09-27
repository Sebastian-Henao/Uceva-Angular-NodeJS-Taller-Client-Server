import { faker } from '@faker-js/faker';
import {
  Appointment,
  AppointmentStatus,
} from '../../../domain/interfaces/appointment.interface';

/**
 * Servicio encargado de generar citas médicas ficticias.
 */
export class AppointmentsService {
  private readonly specialties = [
    'Medicina general',
    'Cardiología',
    'Dermatología',
    'Pediatría',
    'Odontología',
  ];

  private readonly statuses: AppointmentStatus[] = [
    'Pendiente',
    'Confirmada',
    'Cancelada',
  ];

  /**
   * Obtiene una cantidad determinada de citas generadas dinámicamente.
   *
   * @param countAppointments Cantidad de citas a generar.
   */
  public getAllAppointments(countAppointments: number): Appointment[] {
    return Array.from({ length: countAppointments }, (_, index) =>
      this.generateAppointment(index + 1),
    );
  }

  private generateAppointment(id: number): Appointment {
    return {
      id,
      patientName: faker.person.fullName(),
      doctorName: faker.person.fullName(),
      specialty: faker.helpers.arrayElement(this.specialties),
      scheduledAt: faker.date.soon({ days: 30 }).toISOString(),
      status: faker.helpers.arrayElement(this.statuses),
      reason: faker.lorem.sentence({ min: 3, max: 8 }),
    };
  }
}