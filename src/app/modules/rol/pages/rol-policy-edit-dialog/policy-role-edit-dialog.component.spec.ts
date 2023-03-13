import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyRoleEditDialogComponent } from './policy-role-edit-dialog.component';

describe('GroupRoleEditDialogComponent', () => {
  let component: PolicyRoleEditDialogComponent;
  let fixture: ComponentFixture<PolicyRoleEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyRoleEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyRoleEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
