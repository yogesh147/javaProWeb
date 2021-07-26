import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserLoginComponent } from './user-login.component';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UserLoginRoutingModule
  ],
  providers: [],
})
export class UserLoginModule { }
