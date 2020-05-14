import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { ChartPieComponent } from './components/chart-pie/chart-pie.component';



@NgModule({
  declarations: [ChartLineComponent, ChartPieComponent],
  imports: [
    CommonModule
  ],
  exports: [ChartLineComponent]
})
export class ChartsModule { }
