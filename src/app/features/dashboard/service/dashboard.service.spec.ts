import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';

describe('Dashboard.Service.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardService = TestBed.get(DashboardService);
    expect(service).toBeTruthy();
  });
});
