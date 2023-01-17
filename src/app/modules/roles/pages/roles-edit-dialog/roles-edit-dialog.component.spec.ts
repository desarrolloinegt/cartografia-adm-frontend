import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesEditDialogComponent } from './roles-edit-dialog.component';

describe('RolesEditDialogComponent', () => {
  let component: RolesEditDialogComponent;
  let fixture: ComponentFixture<RolesEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
