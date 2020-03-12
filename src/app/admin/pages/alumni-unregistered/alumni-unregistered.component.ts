import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, merge, Subject, BehaviorSubject } from 'rxjs';
import { Alumni } from '@alm/app/shared';
import { AlumniService } from '@alm/app/alumni/services/alumni.service';
import { AdminService } from '../../services/admin.service';
import { AlumniFilterForm } from '@alm/app/shared/models/forms/alumni-filter.form';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './alumni-unregistered.component.html',
  styleUrls: ['./alumni-unregistered.component.scss']
})
export class AlumniUnregisteredComponent implements OnInit, OnDestroy {
  unregistredAlumni$: Observable<Alumni[]>;
  alumniInviteStatus$: Observable<any>;
  filter$ = new BehaviorSubject({});
  constructor(private alumniService: AlumniService, private adminService: AdminService) {}

  ngOnInit() {
    this.unregistredAlumni$ = this.filter$.asObservable().pipe(
      switchMap((f: AlumniFilterForm) => this.adminService.getAlumniUnregistered(f)),
      untilDestroyed(this)
    );
  }

  ngOnDestroy() {}

  filterChange(form: AlumniFilterForm) {
    this.filter$.next(form);
  }
}
