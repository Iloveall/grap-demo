import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsProgressBarComponent } from './components/stats-progress-bar/stats-progress-bar.component';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import {FlexModule} from '@angular/flex-layout';
import { CameraPreviewComponent } from './components/camera-preview/camera-preview.component';
import { StatsListComponent } from './components/stats-list/stats-list.component';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [StatsProgressBarComponent, ChartCardComponent, InfoCardComponent, CameraPreviewComponent, StatsListComponent],
  imports: [
    CommonModule,
    FlexModule,
    NgbProgressbarModule
  ],
  exports: [StatsProgressBarComponent, ChartCardComponent, InfoCardComponent, CameraPreviewComponent, StatsListComponent]
})
export class SharedModule { }
