import {Component, Input, OnInit} from '@angular/core';

const VALUES = [
  {
    color: '#faca00'
  },
  {
    color: '#81c926'
  },
  {
    color: '#ab7df6'
  },
  {
    color: '#85a5ff'
  }
];

@Component({
  selector: 'app-chart-line-tooltip',
  templateUrl: './chart-line-tooltip.component.html',
  styleUrls: ['./chart-line-tooltip.component.scss']
})
export class ChartLineTooltipComponent implements OnInit {
  @Input() values: any[] = VALUES;
  @Input() type: number;

  public constructor() {}

  ngOnInit(): void {
  }

}
