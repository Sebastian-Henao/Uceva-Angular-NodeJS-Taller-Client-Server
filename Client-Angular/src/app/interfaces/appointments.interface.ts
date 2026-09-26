/**
 * Estado posible de una cita médica.
 */
export type AppointmentStatus = 'Pendiente' | 'Confirmada' | 'Cancelada';

/**
 * Representa una cita médica recibida desde la API.
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