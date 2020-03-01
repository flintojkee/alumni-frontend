import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumniComponent } from './pages/alumni/alumni.component';
import { AlumniProfileComponent } from './pages';

const routes: Routes = [
  { path: '', component: AlumniComponent },
  { path: ':id', component: AlumniProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule {}
