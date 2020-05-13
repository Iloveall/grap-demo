import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './components/sign-in/sign-in.component';
import {AuthRoutingModule} from './auth-routing.module';
import {FlexModule, GridModule} from '@angular/flex-layout';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexModule,
    GridModule,
    SharedModule
  ]
})
export class AuthModule {
}
