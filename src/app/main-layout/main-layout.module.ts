import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLayoutComponent} from './components/main-layout/main-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {SidebarLeftComponent} from './components/sidebar-left/sidebar-left.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {FlexModule, GridModule} from '@angular/flex-layout';


@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, SidebarLeftComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FlexModule,
    GridModule,
    RouterModule,
    FlexModule
  ]
})
export class MainLayoutModule {
}
