import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, OnDestroy } from '@angular/core';
import { Alumni } from '@alm/app/shared';
import { AdminService } from '@alm/app/admin/services/admin.service';
import { Observable } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'alm-alumni-unregistered-card',
  templateUrl: './alumni-unregistered-card.component.html',
  styleUrls: ['./alumni-unregistered-card.component.scss']
})
export class AlumniUnregisteredCardComponent implements OnInit, OnDestroy {
  @Input() alm: Alumni;
  link: string;
  isLoading: boolean;
  constructor(private adminService: AdminService) {}

  ngOnInit() {}
  ngOnDestroy() {}

  generateInviteLink(id: number) {
    this.isLoading = true;
    this.adminService
      .getRegisterLink(id)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.link = res['data']['token'];
        this.isLoading = false;
      });
  }
}
