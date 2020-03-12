import { TestBed } from '@angular/core/testing';

import { FormFilterService } from './form-filter.service';

describe('FormFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormFilterService = TestBed.get(FormFilterService);
    expect(service).toBeTruthy();
  });
});
