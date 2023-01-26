import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProjectPageComponent } from './home-project-page.component';

describe('HomeProjectPageComponent', () => {
  let component: HomeProjectPageComponent;
  let fixture: ComponentFixture<HomeProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProjectPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
