import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolUserEditDialogComponent } from './rol-user-edit-dialog.component';

describe('GroupUserEditDialogComponent', () => {
  let component: RolUserEditDialogComponent;
  let fixture: ComponentFixture<RolUserEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolUserEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolUserEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
