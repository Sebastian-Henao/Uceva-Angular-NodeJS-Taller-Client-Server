import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Midlaner } from '../../interfaces/midlaner.interface';

@Injectable({
  providedIn: 'root',
})
export class MidlanersService {
  private httpClient = inject(HttpClient);

  /** Obtiene desde el servidor los campeones y sus estadísticas. */
  getAllMidlaners(): Observable<Midlaner[]> {
    return this.httpClient.get<Midlaner[]>('api/midlaners');
  }
}