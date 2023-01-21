import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupUserPagesComponent } from './group-user-pages.component';

describe('GroupUserPagesComponent', () => {
  let component: GroupUserPagesComponent;
  let fixture: ComponentFixture<GroupUserPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupUserPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupUserPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
