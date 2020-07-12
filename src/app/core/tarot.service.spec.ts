import { TestBed } from '@angular/core/testing';

import { TarotService } from './tarot.service';

describe('TarotService', () => {
  let service: TarotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
