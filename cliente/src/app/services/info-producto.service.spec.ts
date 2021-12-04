import { TestBed } from '@angular/core/testing';

import { InfoProductoService } from './info-producto.service';

describe('InfoProductoService', () => {
  let service: InfoProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
