import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartographerComponent } from './cartographer.component';

describe('CartographerComponent', () => {
  let component: CartographerComponent;
  let fixture: ComponentFixture<CartographerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartographerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
