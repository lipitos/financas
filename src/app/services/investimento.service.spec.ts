import { TestBed } from '@angular/core/testing';

import { InvestimentoService } from './investimento.service';

describe('InvestimentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InvestimentoService = TestBed.get(InvestimentoService);
    expect(service).toBeTruthy();
  });
});
