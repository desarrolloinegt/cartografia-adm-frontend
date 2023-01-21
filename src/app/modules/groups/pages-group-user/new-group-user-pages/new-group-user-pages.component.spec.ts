import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupUserPagesComponent } from './new-group-user-pages.component';

describe('NewGroupUserPagesComponent', () => {
  let component: NewGroupUserPagesComponent;
  let fixture: ComponentFixture<NewGroupUserPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGroupUserPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGroupUserPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
