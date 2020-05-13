import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsProgressBarComponent } from './components/stats-progress-bar/stats-progress-bar.component';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [StatsProgressBarComponent, ChartCardComponent, InfoCardComponent],
  imports: [
    CommonModule,
    FlexModule
  ],
  exports: [StatsProgressBarComponent, ChartCardComponent, InfoCardComponent]
})
export class SharedModule { }
