import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPermissionEditDialogComponent } from './roles-permission-edit-dialog.component';

describe('RolesPermissionEditDialogComponent', () => {
  let component: RolesPermissionEditDialogComponent;
  let fixture: ComponentFixture<RolesPermissionEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesPermissionEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesPermissionEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
