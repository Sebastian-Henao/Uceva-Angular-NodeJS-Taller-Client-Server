import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import {
  Appointment,
  AppointmentStatus,
} from '../../interfaces/appointments.interface';

/**
 * Tabla para mostrar las citas médicas recibidas desde la API.
 */
@Component({
  selector: 'app-appointments-table',
  templateUrl: './appointments-table.component.html',
  imports: [CommonModule, DatePipe, BadgeAtom],
})
export class AppointmentsTableComponent {
  @Input() appointments: Appointment[] = [];

  readonly statusMap: Record<AppointmentStatus, BadgeType> = {
    Pendiente: 'warning',
    Confirmada: 'success',
    Cancelada: 'danger',
  };
}