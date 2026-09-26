import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../../interfaces/appointments.interface';

/**
 * Servicio para consultar las citas médicas de la API.
 */
@Injectable({
  providedIn: 'root',
})
export class AppointmentsService {
  private readonly httpClient = inject(HttpClient);

  /**
   * Obtiene citas médicas generadas por el servidor.
   *
   * @param countAppointments Cantidad de citas solicitadas.
   */
  getAllAppointments(countAppointments: number): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`api/appointments/${countAppointments}`);
  }
}