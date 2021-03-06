import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumniComponent } from './pages/alumni/alumni.component';
import { AlumniProfileComponent } from './pages';
import { AlumniGroupmatesComponent } from './pages/alumni-groupmates/alumni-groupmates.component';

const routes: Routes = [
  { path: '', component: AlumniComponent },
  { path: 'groupmates', component: AlumniGroupmatesComponent },
  { path: ':id', component: AlumniProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule {}
