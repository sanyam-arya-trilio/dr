import { TestBed } from '@angular/core/testing';

import { CloudOperationsService } from './cloud-operations.service';

describe('CloudOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudOperationsService = TestBed.get(CloudOperationsService);
    expect(service).toBeTruthy();
  });
});
