import { TestBed } from '@angular/core/testing';

import { EstatusUsuarioService } from './estatus-usuario.service';

describe('EstatusUsuarioService', () => {
  let service: EstatusUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstatusUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
