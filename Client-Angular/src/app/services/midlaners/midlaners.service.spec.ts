import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MidlanersService } from './midlaners.service';

describe('MidlanersService', () => {
  let service: MidlanersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()],
    });
    service = TestBed.inject(MidlanersService);
  });

  it('debería crearse', () => {
    expect(service).toBeTruthy();
  });
});