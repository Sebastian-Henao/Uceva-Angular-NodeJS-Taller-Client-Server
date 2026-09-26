import { Appointment } from '../interfaces/appointments.interface';

export const APPOINTMENTS_MOCK: Appointment[] = [
  {
    id: 1,
    patientName: 'Ana Gómez',
    doctorName: 'Carlos Pérez',
    specialty: 'Cardiología',
    scheduledAt: '2026-10-15T09:30:00.000Z',
    status: 'Confirmada',
    reason: 'Control preventivo',
  },
  {
    id: 2,
    patientName: 'Luis Torres',
    doctorName: 'Laura Martínez',
    specialty: 'Pediatría',
    scheduledAt: '2026-10-18T14:00:00.000Z',
    status: 'Pendiente',
    reason: 'Consulta de seguimiento',
  },
];