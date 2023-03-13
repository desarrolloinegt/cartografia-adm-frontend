import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyPermissionEditDialogComponent } from './policy-permission-edit-dialog.component';

describe('RolesPermissionEditDialogComponent', () => {
  let component: PolicyPermissionEditDialogComponent;
  let fixture: ComponentFixture<PolicyPermissionEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyPermissionEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyPermissionEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
