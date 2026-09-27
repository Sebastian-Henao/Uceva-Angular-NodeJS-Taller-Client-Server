export type AppointmentStatus = 'Pendiente' | 'Confirmada' | 'Cancelada';

/**
 * Representa una cita médica generada para demostración.
 */
export interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  specialty: string;
  scheduledAt: string;
  status: AppointmentStatus;
  reason: string;
}