import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { WorksService } from './works.service';

describe('WorksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WorksService]
    });
  });

  it('should be created', inject([WorksService], (service: WorksService) => {
    expect(service).toBeTruthy();
  }));
});
