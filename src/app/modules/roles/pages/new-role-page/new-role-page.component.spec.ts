import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRolePageComponent } from './new-role-page.component';

describe('NewRolePageComponent', () => {
  let component: NewRolePageComponent;
  let fixture: ComponentFixture<NewRolePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRolePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRolePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
