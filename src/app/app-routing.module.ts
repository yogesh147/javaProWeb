import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: 'user-login',
    loadChildren: () => import('./user-login/user-login-routing.module').then(m => m.UserLoginRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,NgbModule]
})
export class AppRoutingModule { }
