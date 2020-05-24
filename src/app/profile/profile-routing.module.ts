import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../shared';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ProfileWrapperComponent } from './pages/profile-wrapper/profile-wrapper.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileWrapperComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'view'
      },
      {
        path: 'edit',
        component: EditProfileComponent
      },
      {
        path: 'view',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
