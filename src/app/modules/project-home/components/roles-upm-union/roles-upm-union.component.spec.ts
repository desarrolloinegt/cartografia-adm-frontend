import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesUpmUnionComponent } from './roles-upm-union.component';

describe('RolesUpmUnionComponent', () => {
  let component: RolesUpmUnionComponent;
  let fixture: ComponentFixture<RolesUpmUnionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolesUpmUnionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesUpmUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
