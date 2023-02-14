import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoUpmsComponent } from './encargado-upms.component';

describe('PersonalUpmsComponent', () => {
  let component: EncargadoUpmsComponent;
  let fixture: ComponentFixture<EncargadoUpmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncargadoUpmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncargadoUpmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
