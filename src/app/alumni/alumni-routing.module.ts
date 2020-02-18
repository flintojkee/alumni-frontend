import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumniComponent } from './alumni.component';

const routes: Routes = [{ path: '', component: AlumniComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumniRoutingModule { }
