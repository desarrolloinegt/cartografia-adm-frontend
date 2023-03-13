import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPolicyPageComponent } from './new-policy-page.component';

describe('NewRolePageComponent', () => {
  let component: NewPolicyPageComponent;
  let fixture: ComponentFixture<NewPolicyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPolicyPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
