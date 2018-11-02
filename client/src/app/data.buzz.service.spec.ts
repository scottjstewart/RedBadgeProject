import { TestBed } from '@angular/core/testing';

import { Data.BuzzService } from './data.buzz.service';

describe('Data.BuzzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.BuzzService = TestBed.get(Data.BuzzService);
    expect(service).toBeTruthy();
  });
});
