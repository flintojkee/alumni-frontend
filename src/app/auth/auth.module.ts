import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [SignUpComponent, FormSignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
