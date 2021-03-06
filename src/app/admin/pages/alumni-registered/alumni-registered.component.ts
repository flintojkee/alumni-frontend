import { Component, OnInit, OnDestroy } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Alumni } from '@alm/app/shared';
import { AlumniFilterForm } from '@alm/app/shared/models/forms/alumni-filter.form';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { BaseDataSource } from '@alm/app/shared/utils';
export class AlumniRegisteredDataSource extends BaseDataSource<Alumni | undefined> {
  constructor(private adminService: AdminService, private filter: AlumniFilterForm) {
    super();
    this.uploadMore(this.lastPage);
  }
  uploadMore(offset: number) {
    this.isLoading = true;
    this.adminService
      .getAlumniRegistered({
        offset: offset * this.limit,
        limit: this.limit,
        filter: this.filter
      })
      .subscribe((res) => {
        this.isEmpty = this.lastPage === 0 && res.length === 0;
        this.isLoading = false;
        this.cachedAlumni = this.cachedAlumni.concat(res);
        this.dataStream.next(this.cachedAlumni);
      });
  }
}

@Component({
  templateUrl: './alumni-registered.component.html',
  styleUrls: ['./alumni-registered.component.scss']
})
export class AlumniRegisteredComponent implements OnInit, OnDestroy {
  registredAlumni$: Observable<Alumni[]>;
  alumniInviteStatus$: Observable<any>;
  filter$ = new BehaviorSubject<AlumniFilterForm>(new AlumniFilterForm());
  dataSource: AlumniRegisteredDataSource;

  constructor(public adminService: AdminService) {}

  ngOnInit() {
    this.filter$
      .asObservable()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.dataSource = new AlumniRegisteredDataSource(this.adminService, this.filter$.value);
      });
  }

  ngOnDestroy() {}

  filterChange(form: AlumniFilterForm) {
    this.filter$.next(form);
  }

  deleteAlumni(alumniId: number) {
    this.adminService
      .deletAlumni(alumniId)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.dataSource = new AlumniRegisteredDataSource(this.adminService, this.filter$.value);
      });
  }
}
