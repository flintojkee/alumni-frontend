import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../shared';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ProfileWrapperComponent } from './pages/profile-wrapper/profile-wrapper.component';

@NgModule({
  declarations: [ProfileComponent, EditProfileComponent, ProfileWrapperComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'ua' }]
})
export class ProfileModule {}
