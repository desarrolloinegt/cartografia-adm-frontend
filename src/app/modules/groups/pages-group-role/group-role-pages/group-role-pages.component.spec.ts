import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupRolePagesComponent } from './group-role-pages.component';

describe('GroupRolePagesComponent', () => {
  let component: GroupRolePagesComponent;
  let fixture: ComponentFixture<GroupRolePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupRolePagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupRolePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
