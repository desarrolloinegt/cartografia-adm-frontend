import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupRolePagesComponent } from './new-group-role-pages.component';

describe('NewGroupRolePagesComponent', () => {
  let component: NewGroupRolePagesComponent;
  let fixture: ComponentFixture<NewGroupRolePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGroupRolePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGroupRolePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
