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
    UserLoginRoutingModule
  ],
  providers: [],
  bootstrap: [UserLoginComponent]
})
export class UserLoginModule { }
