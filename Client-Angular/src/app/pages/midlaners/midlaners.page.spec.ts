import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { MidlanersPage } from './midlaners.page';
import { MidlanersService } from '../../services/midlaners/midlaners.service';

describe('MidlanersPage', () => {
  let component: MidlanersPage;
  let fixture: ComponentFixture<MidlanersPage>;
  let getAllMidlaners: jest.Mock;

  beforeEach(async () => {
    getAllMidlaners = jest.fn().mockReturnValue(of([]));
    await TestBed.configureTestingModule({
      imports: [MidlanersPage],
      providers: [
        {
          provide: MidlanersService,
          useValue: { getAllMidlaners },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MidlanersPage);
    component = fixture.componentInstance;
  });

  it('debería crear la página', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar los midlaners al iniciar', () => {
    fixture.detectChanges();

    expect(getAllMidlaners).toHaveBeenCalledWith(20);
    expect(component.state).toBe('success');
    expect(component.midlaners).toEqual([]);
  });

  it('debería cambiar a estado de error si falla la petición', () => {
    const errorResponse = new Error('Error al cargar midlaners');
    const consoleError = jest.spyOn(console, 'error').mockImplementation(() => undefined);
    getAllMidlaners.mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(component.state).toBe('error');
    expect(consoleError).toHaveBeenCalledWith(errorResponse);
    consoleError.mockRestore();
  });
});