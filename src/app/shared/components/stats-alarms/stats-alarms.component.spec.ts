import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAlarmsComponent } from './stats-alarms.component';

describe('StatsAlarmsComponent', () => {
  let component: StatsAlarmsComponent;
  let fixture: ComponentFixture<StatsAlarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsAlarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsAlarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
