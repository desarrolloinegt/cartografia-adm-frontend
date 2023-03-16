import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBitacoraComponent } from './dialog-bitacora.component';

describe('DialogBitacoraComponent', () => {
  let component: DialogBitacoraComponent;
  let fixture: ComponentFixture<DialogBitacoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBitacoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBitacoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
