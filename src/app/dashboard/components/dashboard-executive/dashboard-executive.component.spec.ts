import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardExecutiveComponent } from './dashboard-executive.component';

describe('DashboardExecutiveComponent', () => {
  let component: DashboardExecutiveComponent;
  let fixture: ComponentFixture<DashboardExecutiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardExecutiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardExecutiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
