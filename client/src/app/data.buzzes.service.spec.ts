import { TestBed } from '@angular/core/testing';

import { Data.BuzzesService } from './data.buzzes.service';

describe('Data.BuzzesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.BuzzesService = TestBed.get(Data.BuzzesService);
    expect(service).toBeTruthy();
  });
});
