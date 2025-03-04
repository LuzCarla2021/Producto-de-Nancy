import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginOtraRedPageRoutingModule } from './login-otra-red-routing.module';

import { LoginOtraRedPage } from './login-otra-red.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginOtraRedPageRoutingModule
  ],
  declarations: [LoginOtraRedPage]
})
export class LoginOtraRedPageModule {}
