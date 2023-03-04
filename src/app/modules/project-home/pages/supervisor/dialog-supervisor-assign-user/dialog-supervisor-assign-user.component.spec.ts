import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSupervisorAssignUserComponent } from './dialog-supervisor-assign-user.component';

describe('DialogSupervisorAssignUserComponent', () => {
  let component: DialogSupervisorAssignUserComponent;
  let fixture: ComponentFixture<DialogSupervisorAssignUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSupervisorAssignUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogSupervisorAssignUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
