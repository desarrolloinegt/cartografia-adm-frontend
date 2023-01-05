import { TestBed } from '@angular/core/testing';

import { UiutilsService } from './uiutils.service';

describe('UiutilsService', () => {
  let service: UiutilsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiutilsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
