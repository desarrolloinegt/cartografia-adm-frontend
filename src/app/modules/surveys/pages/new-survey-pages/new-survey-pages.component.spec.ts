import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSurveyPagesComponent } from './new-survey-pages.component';

describe('NewSurveyPagesComponent', () => {
  let component: NewSurveyPagesComponent;
  let fixture: ComponentFixture<NewSurveyPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSurveyPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSurveyPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
