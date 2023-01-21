import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRoleEditDialogComponent } from './group-role-edit-dialog.component';

describe('GroupRoleEditDialogComponent', () => {
  let component: GroupRoleEditDialogComponent;
  let fixture: ComponentFixture<GroupRoleEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupRoleEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupRoleEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
