import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Appointment } from '../../interfaces/appointments.interface';
import { APPOINTMENTS_MOCK } from '../../mocks/appointments.mocks';
import { AppointmentsService } from './appointments.service';

describe('AppointmentsService', () => {
  let service: AppointmentsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(AppointmentsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería realizar una petición GET y retornar las citas', () => {
    const countAppointments = 2;
    const mockAppointments: Appointment[] = APPOINTMENTS_MOCK;

    service.getAllAppointments(countAppointments).subscribe((appointments) => {
      expect(appointments).toEqual(mockAppointments);
    });

    const request = httpMock.expectOne(`api/appointments/${countAppointments}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockAppointments);
  });

  it('debería propagar los errores HTTP', () => {
    service.getAllAppointments(2).subscribe({
      next: () => fail('No debería emitir datos cuando ocurre un error'),
      error: (error) => expect(error.status).toBe(500),
    });

    const request = httpMock.expectOne('api/appointments/2');
    request.flush({ error: 'Internal Server Error' }, { status: 500, statusText: 'Error' });
  });
});