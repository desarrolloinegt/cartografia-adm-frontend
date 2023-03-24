import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDashboardDialogComponent } from './control-dashboard-dialog.component';

describe('ControlDashboardDialogComponent', () => {
  let component: ControlDashboardDialogComponent;
  let fixture: ComponentFixture<ControlDashboardDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlDashboardDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlDashboardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
