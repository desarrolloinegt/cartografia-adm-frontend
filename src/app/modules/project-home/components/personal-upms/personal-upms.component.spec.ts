import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalUpmsComponent } from './personal-upms.component';

describe('PersonalUpmsComponent', () => {
  let component: PersonalUpmsComponent;
  let fixture: ComponentFixture<PersonalUpmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalUpmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalUpmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
