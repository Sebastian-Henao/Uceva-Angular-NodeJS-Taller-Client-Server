import { Component, Input } from '@angular/core';
import { Midlaner } from '../../interfaces/midlaner.interface';

/** Presenta los campeones midlane recibidos desde un componente contenedor. */
@Component({
  selector: 'app-midlaners-table',
  imports: [],
  templateUrl: './midlaners-table.component.html',
})
export class MidlanersTableComponent {
  /** Campeones que se presentarán en la tabla. */
  @Input() midlaners: Midlaner[] = [];
}