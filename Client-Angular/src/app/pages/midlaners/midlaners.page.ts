import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { MidlanersTableComponent } from '../../components/midlaners-table/midlaners-table.component';
import { State } from '../../interfaces/state.interface';
import { Midlaner } from '../../interfaces/midlaner.interface';
import { MidlanersService } from '../../services/midlaners/midlaners.service';

/**
 * Página que consulta y presenta los campeones de la línea central.
 *
 * @remarks
 * Obtiene los midlaners mediante `MidlanersService` y entrega la lista
 * al componente de tabla cuando la respuesta se recibe correctamente.
 */
@Component({
  selector: 'app-midlaners-page',
  imports: [AlertComponent, MidlanersTableComponent],
  templateUrl: './midlaners.page.html',
})
export class MidlanersPage {
  /** Campeones recibidos desde el servidor para mostrarlos en la tabla. */
  midlaners: Midlaner[] = [];

  /** Estado actual de la solicitud y la presentación de sus resultados. */
  state: State = 'init';

  /** Servicio que obtiene el listado de campeones desde la API. */
  private midlanersService = inject(MidlanersService);

  /**
   * Solicita los midlaners al iniciar la página.
   *
   * Actualiza el estado a `loading`, `success` o `error` según el resultado.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.midlanersService.getAllMidlaners().subscribe({
      next: (midlaners) => {
        this.midlaners = midlaners;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}