import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolPagesComponent } from './rol-pages.component';

describe('GroupPagesComponent', () => {
  let component: RolPagesComponent;
  let fixture: ComponentFixture<RolPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
