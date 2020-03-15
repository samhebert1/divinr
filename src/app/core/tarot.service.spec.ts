import { TestBed } from '@angular/core/testing';

import { TarotService } from './tarot.service';

describe('TarotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarotService = TestBed.get(TarotService);
    expect(service).toBeTruthy();
  });
});
