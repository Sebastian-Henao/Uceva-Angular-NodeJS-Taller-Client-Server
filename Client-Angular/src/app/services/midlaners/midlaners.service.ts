import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Midlaner } from '../../interfaces/midlaner.interface';

/** Servicio HTTP para consultar los campeones de la línea central. */
@Injectable({
  providedIn: 'root',
})
export class MidlanersService {
  /** Cliente HTTP de Angular para consumir la API del servidor. */
  private httpClient = inject(HttpClient);

  /**
   * Obtiene desde el servidor la cantidad de campeones solicitada.
   *
   * @param countMidlaners Cantidad de midlaners a consultar.
   * @returns Observable con la lista de midlaners recibida desde la API.
   */
  getAllMidlaners(countMidlaners: number): Observable<Midlaner[]> {
    return this.httpClient.get<Midlaner[]>(`api/midlaners/${countMidlaners}`);
  }
}