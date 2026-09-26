/**
 * Estado posible de una cita médica.
 */
export type AppointmentStatus = 'Pendiente' | 'Confirmada' | 'Cancelada';

/**
 * Representa una cita médica recibida desde la API.
 */
export interface Appointment {
  /** Identificador único de la cita. */
  id: number;

  /** Nombre completo del paciente. */
  patientName: string;

  /** Nombre del médico asignado. */
  doctorName: string;

  /** Especialidad médica de la cita. */
  specialty: string;

  /** Fecha y hora programada en formato ISO. */
  scheduledAt: string;

  /** Estado actual de la cita. */
  status: AppointmentStatus;

  /** Motivo de la consulta o atención. */
  reason: string;
}