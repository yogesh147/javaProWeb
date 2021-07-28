import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { UserLoginComponent } from './user-login.component';

const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent,
  },
  {
    path: 'new',
    component: UserLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AppRoutingModule],
  exports: [RouterModule]
})
export class UserLoginRoutingModule { }
