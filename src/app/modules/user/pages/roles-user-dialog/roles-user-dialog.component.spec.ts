import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesUserDialogComponent } from './roles-user-dialog.component';

describe('RolesUserDialogComponent', () => {
  let component: RolesUserDialogComponent;
  let fixture: ComponentFixture<RolesUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesUserDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
