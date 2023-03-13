import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolProjectComponent } from './rol-project.component';

describe('GroupProjectComponent', () => {
  let component: RolProjectComponent;
  let fixture: ComponentFixture<RolProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
