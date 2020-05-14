import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsProgressBarComponent } from './components/stats-progress-bar/stats-progress-bar.component';
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import {FlexModule, GridModule} from '@angular/flex-layout';
import { CameraPreviewComponent } from './components/camera-preview/camera-preview.component';
import { StatsListComponent } from './components/stats-list/stats-list.component';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import {ButtonComponent} from './components/button/button.component';
import {InputComponent} from './components/input/input.component';
import { StatsAlarmsComponent } from './components/stats-alarms/stats-alarms.component';
import {FormsModule} from '@angular/forms';
import { StatsProgressBarListComponent } from './components/stats-progress-bar-list/stats-progress-bar-list.component';


@NgModule({
  declarations: [StatsProgressBarComponent, ChartCardComponent, InfoCardComponent, CameraPreviewComponent, StatsListComponent, ButtonComponent, InputComponent, StatsAlarmsComponent, StatsProgressBarListComponent],
  imports: [
    CommonModule,
    NgbProgressbarModule,
    FlexModule,
    GridModule,
    FormsModule
  ],
  exports: [StatsProgressBarComponent, ChartCardComponent, InfoCardComponent, CameraPreviewComponent, StatsListComponent, InputComponent, ButtonComponent, StatsAlarmsComponent, StatsProgressBarListComponent]
})
export class SharedModule {
}
