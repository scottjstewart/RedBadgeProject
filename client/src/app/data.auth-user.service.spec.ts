import { TestBed } from '@angular/core/testing';

import { Data.AuthUserService } from './data.auth-user.service';

describe('Data.AuthUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.AuthUserService = TestBed.get(Data.AuthUserService);
    expect(service).toBeTruthy();
  });
});
