import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsProgressBarListComponent } from './stats-progress-bar-list.component';

describe('StatsProgressBarListComponent', () => {
  let component: StatsProgressBarListComponent;
  let fixture: ComponentFixture<StatsProgressBarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsProgressBarListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsProgressBarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
