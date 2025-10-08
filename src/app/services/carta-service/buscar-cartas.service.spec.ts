import { TestBed } from '@angular/core/testing';

import { BuscarCartasService } from './carta-service';

describe('BuscarCartasService', () => {
  let service: BuscarCartasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscarCartasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
