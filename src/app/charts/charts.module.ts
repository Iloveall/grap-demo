import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartLineComponent } from './components/chart-line/chart-line.component';



@NgModule({
  declarations: [ChartLineComponent],
  imports: [
    CommonModule
  ],
  exports: [ChartLineComponent]
})
export class ChartsModule { }
