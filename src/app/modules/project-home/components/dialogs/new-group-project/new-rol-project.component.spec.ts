import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRolProjectComponent } from './new-rol-project.component';

describe('NewGroupProjectComponent', () => {
  let component: NewRolProjectComponent;
  let fixture: ComponentFixture<NewRolProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRolProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRolProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
