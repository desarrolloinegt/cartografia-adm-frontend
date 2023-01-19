import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupPagesComponent } from './group-pages.component';

describe('GroupPagesComponent', () => {
  let component: GroupPagesComponent;
  let fixture: ComponentFixture<GroupPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
