import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignRolePagesComponent } from './assign-role-pages.component';

describe('AssignRolePagesComponent', () => {
  let component: AssignRolePagesComponent;
  let fixture: ComponentFixture<AssignRolePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignRolePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssignRolePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
