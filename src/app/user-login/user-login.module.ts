import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserLoginRoutingModule } from './user-login-routing.module';
import { UserLoginComponent } from './user-login.component';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    UserLoginRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [UserLoginComponent]
})
export class UserLoginModule { }
