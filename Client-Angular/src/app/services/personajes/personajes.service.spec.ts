import { TestBed } from '@angular/core/testing';

import { PersonajesService } from './personajes.service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Personaje } from '../../interfaces/personajes.interface';
import { PERSONAJES_MOCK } from '../../mocks/personajes.mocks';

describe('PersonajesService', () => {
  let service: PersonajesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(PersonajesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no queden peticiones HTTP pendientes
    httpMock.verify();
  });

  describe('Creacion del servicio', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  })

  describe('getAllPersonajes', () => {
    it('deberia realizar un peticion GET y retornar una lista de productos', () => {
      const countPersonajes = 5;
      const mockPersonajes: Personaje[] = PERSONAJES_MOCK;

      service.getAllPersonajes(countPersonajes).subscribe((personajes) => {
        expect(personajes).toEqual(mockPersonajes);
        expect(personajes.length).toBe(mockPersonajes.length);
      });

      const req = httpMock.expectOne(`api/personajes/${countPersonajes}`);
      expect(req.request.method).toBe('GET');

      req.flush(mockPersonajes);
    });

    it('deberia propagar un error si la peticion HTTP falla', () => {
      const countPersonajes = 3;

      service.getAllPersonajes(countPersonajes).subscribe({
        next: () => {
          fail('No deberia emitir datos cuando ocurre un error');
        },
        error: (error) => {
          expect(error.status).toBe(500);
        },
      });

      const req = httpMock.expectOne(`api/personajes/${countPersonajes}`);

      req.flush(
        { message: 'Error interno del servidor' },
        { status: 500, statusText: 'Internal Server Error' }
      );
    });

  });

});
