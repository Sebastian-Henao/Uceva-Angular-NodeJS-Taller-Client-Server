import { provideHttpClient } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { APPOINTMENTS_MOCK } from '../../mocks/appointments.mocks';
import { AppointmentsTableComponent } from '../../components/appointments-table/appointments-table.component';
import { AppointmentsService } from '../../services/appointments/appointments.service';
import { AppointmentsPage } from './appointments.page';

describe('AppointmentsPage', () => {
  let component: AppointmentsPage;
  let fixture: ComponentFixture<AppointmentsPage>;
  let appointmentsService: AppointmentsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsPage, AppointmentsTableComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentsPage);
    component = fixture.componentInstance;
    appointmentsService = TestBed.inject(AppointmentsService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar y pasar las citas a la tabla', () => {
    jest.spyOn(appointmentsService, 'getAllAppointments').mockReturnValue(of(APPOINTMENTS_MOCK));

    fixture.detectChanges();

    expect(component.state).toBe('success');
    expect(component.appointments).toEqual(APPOINTMENTS_MOCK);

    const table = fixture.debugElement.query(By.directive(AppointmentsTableComponent));
    expect(table.componentInstance.appointments).toEqual(APPOINTMENTS_MOCK);
  });

  it('debería cambiar a estado de error si falla la petición', () => {
    const errorResponse = new Error('Error al cargar citas');
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);
    jest.spyOn(appointmentsService, 'getAllAppointments').mockReturnValue(
      throwError(() => errorResponse),
    );

    fixture.detectChanges();

    expect(component.state).toBe('error');
    expect(consoleError).toHaveBeenCalledWith(errorResponse);
    consoleError.mockRestore();
  });
});