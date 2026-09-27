import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { APPOINTMENTS_MOCK } from '../../mocks/appointments.mocks';
import { AppointmentsTableComponent } from './appointments-table.component';

describe('AppointmentsTableComponent', () => {
  let component: AppointmentsTableComponent;
  let fixture: ComponentFixture<AppointmentsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppointmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una fila por cada cita', () => {
    component.appointments = APPOINTMENTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows).toHaveLength(APPOINTMENTS_MOCK.length);
  });

  it('debería mostrar los datos principales de cada cita', () => {
    component.appointments = APPOINTMENTS_MOCK;
    fixture.detectChanges();

    const firstRow = fixture.debugElement.query(By.css('tbody tr'));
    const columns = firstRow.queryAll(By.css('th, td'));

    expect(columns[0].nativeElement.textContent.trim()).toBe('1');
    expect(columns[1].nativeElement.textContent.trim()).toBe('Ana Gómez');
    expect(columns[2].nativeElement.textContent.trim()).toBe('Carlos Pérez');
    expect(columns[5].nativeElement.textContent.trim()).toBe('Confirmada');
  });

  it('debería mapear los estados a tipos de badge', () => {
    expect(component.statusMap.Pendiente).toBe('warning');
    expect(component.statusMap.Confirmada).toBe('success');
    expect(component.statusMap.Cancelada).toBe('danger');
  });
});