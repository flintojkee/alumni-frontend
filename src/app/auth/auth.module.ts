import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared';
import { SignUpComponent, ConfirmComponent, LoginComponent } from './pages';
import { FormSignUpComponent, FormLoginComponent } from './components';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

@NgModule({
  declarations: [
    SignUpComponent,
    FormSignUpComponent,
    FormLoginComponent,
    ConfirmComponent,
    LoginComponent,
    LoginAdminComponent
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule]
})
export class AuthModule {}
