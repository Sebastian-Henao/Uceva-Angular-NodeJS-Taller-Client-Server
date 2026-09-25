import { Component, inject } from '@angular/core';
import { ProductsTableComponent } from '../../components/products-table/products-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { Personaje } from '../../interfaces/personajes.interface';
import { PersonajesService } from '../../services/personajes/personajes.service';
import { State } from '../../interfaces/state.interface'

@Component({
  selector: 'app-personajes',
  imports: [ProductsTableComponent, AlertComponent],
  templateUrl: './personajes.page.html',
})
export class PersonajesPage {
  personajes: Personaje[] = [];
    state: State = 'init';
  private personajesService = inject(PersonajesService);
  ngOnInit(): void {
    this.state = 'loading';
    this.personajesService.getAllPersonajes(10).subscribe({
      next: (personajes) => {
        this.personajes = personajes;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
