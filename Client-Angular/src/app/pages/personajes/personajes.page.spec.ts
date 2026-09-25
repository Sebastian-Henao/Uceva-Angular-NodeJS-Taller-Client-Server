import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesPage } from './personajes.page';
import { PersonajesService } from '../../services/personajes/personajes.service';
import { PersonajesTableComponent } from '../../components/personajes-table/personajes-table.component';
import { provideHttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { PERSONAJES_MOCK } from '../../mocks/personajes.mocks';
import { By } from '@angular/platform-browser';

describe('PersonajesPage', () => {
  let component: PersonajesPage;
  let fixture: ComponentFixture<PersonajesPage>;
  let personajesService: PersonajesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonajesPage, PersonajesTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonajesPage);
    component = fixture.componentInstance;
    personajesService = TestBed.inject(PersonajesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar a getAllPersonaje al iniciar', () => {
    const spyGetAllPersonaje = jest.spyOn(personajesService, 'getAllPersonajes').mockReturnValue(of(PERSONAJES_MOCK));
    fixture.detectChanges();
    expect(spyGetAllPersonaje).toHaveBeenCalled();
  });

  it('deberia asignar los personajes recibidos del servicio', () => {
    jest.spyOn(personajesService, 'getAllPersonajes').mockReturnValue(of(PERSONAJES_MOCK));
    fixture.detectChanges();
    expect(component.personajes).toEqual(PERSONAJES_MOCK);
  });

  it('deberia pasar los personajes al componente personajes-table', () => {
    jest.spyOn(personajesService, 'getAllPersonajes').mockReturnValue(of(PERSONAJES_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(PersonajesTableComponent))
      .componentInstance;
    expect(tableComponent.personajes).toEqual(PERSONAJES_MOCK);
  });

  it('deberia manejar el error cuando falla getAllPersonajes', () => {
    component.personajes = [];
    const errorResponse = new Error('Error al cargar personajes');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(personajesService, 'getAllPersonajes').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(personajesService.getAllPersonajes).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.personajes.length).toBe(0);
  });
});
