import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { AlumniComponent } from './alumni.component';
import { AlumniListComponent } from './components/alumni-list/alumni-list.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [AlumniComponent, AlumniListComponent],
  imports: [
    CommonModule,
    AlumniRoutingModule,
    SharedModule
  ]
})
export class AlumniModule { }
