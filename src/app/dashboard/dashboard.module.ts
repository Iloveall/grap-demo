import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FlexModule, GridModule} from '@angular/flex-layout';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import {ChartsModule} from '../charts/charts.module';


@NgModule({
  declarations: [DashboardComponent, DashboardLayoutComponent, DashboardHeaderComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FlexModule,
    GridModule,
    ChartsModule
  ]
})
export class DashboardModule { }
