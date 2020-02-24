import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared';
import { AlumniRegisteredComponent, AlumniUnregisteredComponent } from './pages';



@NgModule({
  declarations: [AdminComponent, AlumniRegisteredComponent, AlumniUnregisteredComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
