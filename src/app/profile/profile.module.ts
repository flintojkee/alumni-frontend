import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileStepperComponent } from './components/profile-stepper/profile-stepper.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [ProfileComponent, ProfileStepperComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ]
})
export class ProfileModule { }
