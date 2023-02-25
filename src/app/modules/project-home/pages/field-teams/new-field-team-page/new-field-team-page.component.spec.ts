import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFieldTeamPageComponent } from './new-field-team-page.component';

describe('NewFieldTeamPageComponent', () => {
  let component: NewFieldTeamPageComponent;
  let fixture: ComponentFixture<NewFieldTeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFieldTeamPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFieldTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
