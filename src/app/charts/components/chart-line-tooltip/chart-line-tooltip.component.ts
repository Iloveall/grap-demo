import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart-line-tooltip',
  templateUrl: './chart-line-tooltip.component.html',
  styleUrls: ['./chart-line-tooltip.component.scss']
})
export class ChartLineTooltipComponent implements OnInit {
  @Input() values: any[];
  @Input() type: string;

  public constructor() {}

  ngOnInit(): void {
  }

}
