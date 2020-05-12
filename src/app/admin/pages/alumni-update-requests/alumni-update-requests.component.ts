import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';
import { Operator } from '@alm/app/shared/models/operator.model';
import { AuthService } from '@alm/app/auth/services';
import { UpdateRequestsService } from '../../services/update-requests.service';

@Component({
  templateUrl: './alumni-update-requests.component.html',
  styleUrls: ['./alumni-update-requests.component.scss']
})
export class AlumniUpdateRequestsComponent implements OnInit, OnDestroy {
  updateRequests: UpdateAlumni[];
  user: Operator;
  constructor(
    private adminService: AdminService,
    private authService: AuthService,
    private updateRequestsService: UpdateRequestsService
  ) {}

  ngOnInit() {
    this.adminService
      .getUpdateForms()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.updateRequestsService.setUpdateRequests(res);
      });
    this.updateRequestsService.updateRequests.pipe(untilDestroyed(this)).subscribe((res) => {
      this.updateRequests = res;
    });

  }

  ngOnDestroy() {}



  editForm(form: UpdateAlumni) {}
}
