import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarLeftComponent } from './components/sidebar-left/sidebar-left.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent, SidebarLeftComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainLayoutModule { }
