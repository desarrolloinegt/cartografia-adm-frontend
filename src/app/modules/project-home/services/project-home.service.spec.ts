import { TestBed } from '@angular/core/testing';

import { ProjectHomeService } from './project-home.service';

describe('ProjectHomeService', () => {
  let service: ProjectHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
