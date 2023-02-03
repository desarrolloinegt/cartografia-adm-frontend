import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalMonitorComponent } from './personal-monitor.component';

describe('GroupProjectComponent', () => {
let component: PersonalMonitorComponent;
let fixture: ComponentFixture<PersonalMonitorComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [PersonalMonitorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonalMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
});

it('should create', () => {
    expect(component).toBeTruthy();
});
});
