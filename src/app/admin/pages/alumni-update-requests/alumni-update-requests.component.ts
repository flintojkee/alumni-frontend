import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';

@Component({
  templateUrl: './alumni-update-requests.component.html',
  styleUrls: ['./alumni-update-requests.component.scss']
})
export class AlumniUpdateRequestsComponent implements OnInit, OnDestroy {
  updateRequests: UpdateAlumni[];
  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.adminService
      .getUpdateForms()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.updateRequests = res;
      });
  }

  ngOnDestroy() {}

  confirmForm(form: UpdateAlumni) {
    this.adminService
      .confirmUpdateForm(form)``
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
