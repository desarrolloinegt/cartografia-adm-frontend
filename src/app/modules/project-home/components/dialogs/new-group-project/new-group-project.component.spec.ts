import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGroupProjectComponent } from './new-group-project.component';

describe('NewGroupProjectComponent', () => {
  let component: NewGroupProjectComponent;
  let fixture: ComponentFixture<NewGroupProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGroupProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGroupProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
