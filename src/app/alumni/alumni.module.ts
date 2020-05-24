import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumniRoutingModule } from './alumni-routing.module';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { AlumniListComponent } from './components/alumni-list/alumni-list.component';
import { SharedModule } from '../shared';
import { AlumniProfileComponent } from './pages/alumni-profile/alumni-profile.component';
import { GroupmatesListComponent } from './components/groupmates-list/groupmates-list.component';
import { AlumniGroupmatesComponent } from './pages/alumni-groupmates/alumni-groupmates.component';


@NgModule({
  declarations: [AlumniComponent, AlumniListComponent, AlumniProfileComponent, GroupmatesListComponent, AlumniGroupmatesComponent],
  imports: [
    CommonModule,
    AlumniRoutingModule,
    SharedModule
  ]
})
export class AlumniModule { }
