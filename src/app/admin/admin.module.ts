import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared';
import { AlumniRegisteredComponent, AlumniUnregisteredComponent } from './pages';
import { AlumniUnregisteredCardComponent } from './pages/alumni-unregistered/alumni-unregistered-card/alumni-unregistered-card.component';
import { InviteStatusColorPipe } from './pipes/invite-status-color.pipe';

@NgModule({
  declarations: [
    AdminComponent,
    AlumniRegisteredComponent,
    AlumniUnregisteredComponent,
    AlumniUnregisteredCardComponent,
    InviteStatusColorPipe
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule]
})
export class AdminModule {}
