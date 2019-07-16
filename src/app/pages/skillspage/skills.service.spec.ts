import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';

import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SkillsService]
    });
  });

  it('should be created', inject([SkillsService], (service: SkillsService) => {
    expect(service).toBeTruthy();
  }));
});
