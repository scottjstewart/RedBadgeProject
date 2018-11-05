import { TestBed } from '@angular/core/testing';

import { Data.LocationService } from './data.location.service';

describe('Data.LocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.LocationService = TestBed.get(Data.LocationService);
    expect(service).toBeTruthy();
  });
});
