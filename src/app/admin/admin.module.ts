import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared';
import { AlumniRegisteredComponent, AlumniUnregisteredComponent } from './pages';
import { AlumniUnregisteredCardComponent } from './components/alumni-unregistered-card/alumni-unregistered-card.component';
import { InviteStatusColorPipe } from './pipes/invite-status-color.pipe';
import { AlumniUpdateRequestsComponent } from './pages/alumni-update-requests/alumni-update-requests.component';
import { AlumniUpdateRequestComponent } from './pages/alumni-update-request/alumni-update-request.component';

@NgModule({
  declarations: [
    AdminComponent,
    AlumniRegisteredComponent,
    AlumniUnregisteredComponent,
    AlumniUnregisteredCardComponent,
    InviteStatusColorPipe,
    AlumniUpdateRequestsComponent,
    AlumniUpdateRequestComponent
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule]
})
export class AdminModule {}
