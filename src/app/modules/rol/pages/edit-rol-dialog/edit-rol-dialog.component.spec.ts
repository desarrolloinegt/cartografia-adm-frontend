import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRolDialogComponent } from './edit-rol-dialog.component';

describe('EditGroupDialogComponent', () => {
  let component: EditRolDialogComponent;
  let fixture: ComponentFixture<EditRolDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRolDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
