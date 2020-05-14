import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';
import { ChartLineTooltipComponent } from './components/chart-line-tooltip/chart-line-tooltip.component';



@NgModule({
  declarations: [ChartLineComponent, ChartPieComponent, ChartLineTooltipComponent],
  imports: [
    CommonModule
  ],
  exports: [ChartLineComponent]
})
export class ChartsModule { }
