import { Component, OnInit } from '@angular/core';
import { Observable, merge } from 'rxjs';
import { Alumni } from '@alm/app/shared';
import { AlumniService } from '@alm/app/alumni/services/alumni.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AdminService } from '../../services/admin.service';

@Component({
  templateUrl: './alumni-unregistered.component.html',
  styleUrls: ['./alumni-unregistered.component.scss']
})
export class AlumniUnregisteredComponent implements OnInit {
  unregistredAlumni$: Observable<Alumni[]>;
  alumniInviteStatus$: Observable<any>;
  constructor(private alumniService: AlumniService, private adminService: AdminService) { }

  ngOnInit() {
    this.unregistredAlumni$ = this.adminService.getAlumniUnregistered();

  }
}
