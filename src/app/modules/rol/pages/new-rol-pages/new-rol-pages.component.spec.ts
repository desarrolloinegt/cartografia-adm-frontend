import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRolPagesComponent } from './new-rol-pages.component';

describe('NewGroupPagesComponent', () => {
  let component: NewRolPagesComponent;
  let fixture: ComponentFixture<NewRolPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRolPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRolPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
