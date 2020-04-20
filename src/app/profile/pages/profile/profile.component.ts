import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '@alm/app/auth/services';
import { Alumni, Company } from '@alm/app/shared';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';
import { ProfileService } from '../../services/profile.service';
import { CompanyService } from '@alm/app/core/services/company.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';

@Component({
  selector: 'alm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: Alumni;
  companies: Company[];
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private companyService: CompanyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.user$.subscribe((res) => {
      this.user = res as Alumni;
    });
    this.companyService
      .getCompanies()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.companies = res;
      });
  }

  ngOnDestroy() {}

  sendUserForm(form: UpdateAlumni) {
    this.profileService
      .createUpdateForm(form)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.companies = res;
        this.authService.setUser(res);
        this.router.navigate(['']);
      });
  }
}
