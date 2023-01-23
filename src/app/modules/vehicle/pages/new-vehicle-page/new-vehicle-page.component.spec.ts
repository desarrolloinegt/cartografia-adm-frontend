import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVehiclePageComponent } from './new-vehicle-page.component';

describe('NewVehiclePageComponent', () => {
  let component: NewVehiclePageComponent;
  let fixture: ComponentFixture<NewVehiclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewVehiclePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewVehiclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
