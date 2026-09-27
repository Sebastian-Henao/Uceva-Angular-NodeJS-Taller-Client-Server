import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { AppointmentsTableComponent } from '../../components/appointments-table/appointments-table.component';
import { Appointment } from '../../interfaces/appointments.interface';
import { State } from '../../interfaces/state.interface';
import { AppointmentsService } from '../../services/appointments/appointments.service';

/**
 * Página encargada de cargar y mostrar las citas médicas.
 */
@Component({
  selector: 'app-appointments-page',
  templateUrl: './appointments.page.html',
  imports: [AppointmentsTableComponent, AlertComponent],
})
export class AppointmentsPage {
  /** Citas cargadas desde la API para mostrarlas en la vista. */
  appointments: Appointment[] = [];

  /** Estado actual del ciclo de carga de la página. */
  state: State = 'init';

  /** Servicio de citas inyectado con Angular. */
  private readonly appointmentsService = inject(AppointmentsService);

  /** Carga la lista inicial de citas al inicializar la página. */
  ngOnInit(): void {
    this.state = 'loading';
    this.appointmentsService.getAllAppointments(10).subscribe({
      next: (appointments) => {
        this.appointments = appointments;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}