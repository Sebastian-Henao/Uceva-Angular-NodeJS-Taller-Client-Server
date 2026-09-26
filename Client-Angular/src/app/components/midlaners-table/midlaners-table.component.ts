import { Component, Input } from '@angular/core';
import { Midlaner } from '../../interfaces/midlaner.interface';

@Component({
  selector: 'app-midlaners-table',
  imports: [],
  templateUrl: './midlaners-table.component.html',
})
export class MidlanersTableComponent {
  /** Campeones que se presentarán en la tabla. */
  @Input() midlaners: Midlaner[] = [];
}