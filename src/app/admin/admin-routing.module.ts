import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {
  AlumniRegisteredComponent,
  AlumniUnregisteredComponent,
} from './pages';

const routes: Routes = [
  { path: '', redirectTo: '/admin/alumni-registered', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'alumni-registered', component: AlumniRegisteredComponent },
      { path: 'alumni-unregistered', component: AlumniUnregisteredComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
