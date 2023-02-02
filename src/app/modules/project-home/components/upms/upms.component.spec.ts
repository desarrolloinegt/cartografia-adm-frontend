import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpmsComponent } from './upms.component';

describe('UpmsComponent', () => {
  let component: UpmsComponent;
  let fixture: ComponentFixture<UpmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
