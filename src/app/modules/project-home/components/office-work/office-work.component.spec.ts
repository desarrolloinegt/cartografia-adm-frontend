import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeWorkComponent } from './office-work.component';

describe('OfficeWorkComponent', () => {
  let component: OfficeWorkComponent;
  let fixture: ComponentFixture<OfficeWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeWorkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
