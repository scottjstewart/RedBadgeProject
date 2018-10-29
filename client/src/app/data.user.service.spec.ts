import { TestBed } from '@angular/core/testing';

import { Data.UserService } from './data.user.service';

describe('Data.UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.UserService = TestBed.get(Data.UserService);
    expect(service).toBeTruthy();
  });
});
