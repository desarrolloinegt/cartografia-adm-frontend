import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTeamDialogComponent } from './field-team-dialog.component';

describe('FieldTeamDialogComponent', () => {
  let component: FieldTeamDialogComponent;
  let fixture: ComponentFixture<FieldTeamDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldTeamDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldTeamDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
