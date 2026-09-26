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
  appointments: Appointment[] = [];
  state: State = 'init';
  private readonly appointmentsService = inject(AppointmentsService);

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