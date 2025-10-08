import { TestBed } from '@angular/core/testing';

import { ConexionJSONService } from './conexion-json.service';

describe('ConexionJSONService', () => {
  let service: ConexionJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
