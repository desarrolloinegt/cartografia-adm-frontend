import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupUserEditDialogComponent } from './group-user-edit-dialog.component';

describe('GroupUserEditDialogComponent', () => {
  let component: GroupUserEditDialogComponent;
  let fixture: ComponentFixture<GroupUserEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupUserEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupUserEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
