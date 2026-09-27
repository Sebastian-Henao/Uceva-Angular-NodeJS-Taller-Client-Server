import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Midlaner } from '../../interfaces/midlaner.interface';
import { MidlanersService } from './midlaners.service';

describe('MidlanersService', () => {
  let service: MidlanersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(MidlanersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });

  it('debería pedir la cantidad de midlaners indicada en la URL', () => {
    const countMidlaners = 5;
    const mockMidlaners: Midlaner[] = [
      {
        id: 1,
        nombre: 'Azir',
        titulo: 'Emperador de las Arenas',
        clase: 'Mago',
        region: 'Shurima',
        dificultad: 'Media',
        winrate: 50.2,
        pickrate: 12.5,
        banrate: 8.1,
      },
    ];

    service.getAllMidlaners(countMidlaners).subscribe((midlaners) => {
      expect(midlaners).toEqual(mockMidlaners);
    });

    const req = httpMock.expectOne(`api/midlaners/${countMidlaners}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockMidlaners);
  });
});