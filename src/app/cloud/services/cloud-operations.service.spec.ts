import { TestBed } from '@angular/core/testing';

import { CloudOperationsService } from './cloud-operations.service';
import { HttpClientModule } from '@angular/common/http';

describe('CloudOperationsService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: CloudOperationsService = TestBed.get(CloudOperationsService);
    expect(service).toBeTruthy();
  });
});
