import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyEditDialogComponent } from './survey-edit-dialog.component';

describe('SurveyEditDialogComponent', () => {
  let component: SurveyEditDialogComponent;
  let fixture: ComponentFixture<SurveyEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveyEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
