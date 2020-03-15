import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, merge, Subject, BehaviorSubject, Subscription } from 'rxjs';
import { Alumni } from '@alm/app/shared';
import { AlumniService } from '@alm/app/alumni/services/alumni.service';
import { AdminService } from '../../services/admin.service';
import { AlumniFilterForm } from '@alm/app/shared/models/forms/alumni-filter.form';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { switchMap } from 'rxjs/operators';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { BaseDataSource } from '@alm/app/shared/utils';
export class AlumniUnregisteredDataSource extends BaseDataSource<Alumni | undefined> {
  constructor(private adminService: AdminService, private filter: AlumniFilterForm) {
    super();
    this.uploadMore(this.lastPage);
  }
  uploadMore(offset: number) {
    this.isLoading = true;
    this.adminService
      .getAlumniUnregistered({
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
  templateUrl: './alumni-unregistered.component.html',
  styleUrls: ['./alumni-unregistered.component.scss']
})
export class AlumniUnregisteredComponent implements OnInit, OnDestroy {
  unregistredAlumni$: Observable<Alumni[]>;
  filter$ = new BehaviorSubject<AlumniFilterForm>(new AlumniFilterForm());
  dataSource: AlumniUnregisteredDataSource;

  constructor(public adminService: AdminService) {
  }

  ngOnInit() {
    this.filter$
      .asObservable()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.dataSource = new AlumniUnregisteredDataSource(this.adminService, this.filter$.value);
      });
  }

  ngOnDestroy() {}

  filterChange(form: AlumniFilterForm) {
    this.filter$.next(form);
  }
}

