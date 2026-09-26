import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MidlanersPage } from './midlaners.page';

describe('MidlanersPage', () => {
  let component: MidlanersPage;
  let fixture: ComponentFixture<MidlanersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidlanersPage],
    }).compileComponents();

    fixture = TestBed.createComponent(MidlanersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear la página', () => {
    expect(component).toBeTruthy();
  });
});