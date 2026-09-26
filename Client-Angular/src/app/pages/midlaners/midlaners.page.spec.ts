import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MidlanersPage } from './midlaners.page';
import { MidlanersService } from '../../services/midlaners/midlaners.service';

describe('MidlanersPage', () => {
  let component: MidlanersPage;
  let fixture: ComponentFixture<MidlanersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidlanersPage],
      providers: [
        {
          provide: MidlanersService,
          useValue: { getAllMidlaners: () => of([]) },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MidlanersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear la página', () => {
    expect(component).toBeTruthy();
  });
});