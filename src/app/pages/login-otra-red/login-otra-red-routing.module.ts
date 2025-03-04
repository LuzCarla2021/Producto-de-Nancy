import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginOtraRedPage } from './login-otra-red.page';

const routes: Routes = [
  {
    path: '',
    component: LoginOtraRedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginOtraRedPageRoutingModule {}
