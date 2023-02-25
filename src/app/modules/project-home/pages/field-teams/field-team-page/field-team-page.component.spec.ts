import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTeamPageComponent } from './field-team-page.component';

describe('FieldTeamPageComponent', () => {
  let component: FieldTeamPageComponent;
  let fixture: ComponentFixture<FieldTeamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldTeamPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldTeamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
