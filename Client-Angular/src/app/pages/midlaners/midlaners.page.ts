import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';
import { MidlanersTableComponent } from '../../components/midlaners-table/midlaners-table.component';
import { State } from '../../interfaces/state.interface';
import { Midlaner } from '../../interfaces/midlaner.interface';
import { MidlanersService } from '../../services/midlaners/midlaners.service';

@Component({
  selector: 'app-midlaners-page',
  imports: [AlertComponent, MidlanersTableComponent],
  templateUrl: './midlaners.page.html',
})
export class MidlanersPage {
  midlaners: Midlaner[] = [];
  state: State = 'init';

  private midlanersService = inject(MidlanersService);

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