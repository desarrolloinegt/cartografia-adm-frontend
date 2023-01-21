import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupPagesComponent } from './new-group-pages.component';

describe('NewGroupPagesComponent', () => {
  let component: NewGroupPagesComponent;
  let fixture: ComponentFixture<NewGroupPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGroupPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGroupPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
