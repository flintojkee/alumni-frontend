import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alumni, Company } from '@alm/app/shared';
import { AuthService } from '@alm/app/auth/services';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit, OnDestroy {
  user: Alumni;
  companies: Company[];
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe((res) => {
      this.user = res as Alumni;
      console.log(res);
    });
  }

  ngOnDestroy() {}

  sendUserForm(form: UpdateAlumni) {
    console.log(form);
    this.profileService
      .createUpdateForm(form)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.companies = res;
        this.authService.setUser(res);
        this.router.navigateByUrl('/profile');
      });
  }
}
