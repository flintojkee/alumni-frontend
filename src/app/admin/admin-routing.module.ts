import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import {
  AlumniRegisteredComponent,
  AlumniUnregisteredComponent,
  AlumniUpdateRequestsComponent,
} from './pages';

const routes: Routes = [
  { path: '', redirectTo: '/admin/alumni-registered', pathMatch: 'full' },
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'alumni-registered', component: AlumniRegisteredComponent },
      { path: 'alumni-unregistered', component: AlumniUnregisteredComponent },
      { path: 'alumni-update-requests', component: AlumniUpdateRequestsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
