import { TestBed } from '@angular/core/testing';

import { ControlDashboardService } from './control-dashboard.service';

describe('ControlDashboardService', () => {
  let service: ControlDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
