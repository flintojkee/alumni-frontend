import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Alumni, InviteStatus } from '@alm/app/shared';
import { AdminService } from '@alm/app/admin/services/admin.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { environment } from '@alm/environments/environment';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'alm-alumni-unregistered-card',
  templateUrl: './alumni-unregistered-card.component.html',
  styleUrls: ['./alumni-unregistered-card.component.scss']
})
export class AlumniUnregisteredCardComponent implements OnInit, OnDestroy {
  @Input() alm: Alumni;
  link: string;
  isLoading: boolean;
  hostUrl = environment.hostUrl;
  inviteStatus = InviteStatus;
  constructor(private adminService: AdminService) {}

  ngOnInit() {}
  ngOnDestroy() {}

  generateInviteLink(id: number) {
    this.isLoading = true;
    this.adminService
      .getRegisterLink(id)
      .pipe(
        finalize(() => (this.isLoading = false)),
        untilDestroyed(this)
      )
      .subscribe((res) => {
        this.link = res.token;
        this.alm.alumni_status = InviteStatus.invited;
      });
  }

  updateAlumniStatus(odoo_contact_id: string, invite_status: InviteStatus) {
    this.adminService
      .updateAlumniInviteStatus({ odoo_contact_id, invite_status })
      .subscribe((res) => {
        this.alm.alumni_status = invite_status;
      });
  }
}
