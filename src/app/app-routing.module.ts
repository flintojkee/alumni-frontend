import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  SignUpComponent,
  ConfirmComponent,
  LoginComponent,
  LoginAdminComponent
} from './auth/pages';

const routes: Routes = [
  { path: 'sign-up/:token', component: SignUpComponent },
  { path: 'confirm/:uuid', component: ConfirmComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule)
  },
  {
    path: 'alumni',
    loadChildren: () => import('./alumni/alumni.module').then((m) => m.AlumniModule)
  },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule) },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
