import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarPersonalComponent } from './asignar-personal.component';

describe('GroupProjectComponent', () => {
let component: AsignarPersonalComponent;
let fixture: ComponentFixture<AsignarPersonalComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [AsignarPersonalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsignarPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

it('should create', () => {
    expect(component).toBeTruthy();
});
});
