import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MidlanersTableComponent } from './midlaners-table.component';

describe('MidlanersTableComponent', () => {
  let component: MidlanersTableComponent;
  let fixture: ComponentFixture<MidlanersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidlanersTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MidlanersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });
});