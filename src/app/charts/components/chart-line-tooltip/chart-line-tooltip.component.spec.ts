import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineTooltipComponent } from './chart-line-tooltip.component';

describe('ChartLineTooltipComponent', () => {
  let component: ChartLineTooltipComponent;
  let fixture: ComponentFixture<ChartLineTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLineTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLineTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
