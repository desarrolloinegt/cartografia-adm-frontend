import { TestBed } from '@angular/core/testing';

import { FieldTeamService } from './field-team.service';

describe('FieldTeamService', () => {
  let service: FieldTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
