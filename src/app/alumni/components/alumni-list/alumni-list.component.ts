import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Alumni } from '@alm/app/shared';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { AlumniService } from '../../services/alumni.service';
import { BaseDataSource } from '@alm/app/shared/utils';
import { AdminService } from '@alm/app/admin/services/admin.service';
import { AlumniFilterForm } from '@alm/app/shared/models/forms/alumni-filter.form';
import { untilDestroyed } from 'ngx-take-until-destroy';
export class AlumniListDataSource extends BaseDataSource<Alumni | undefined> {
  constructor(private alumniService: AlumniService, private filter: AlumniFilterForm) {
    super();
    this.uploadMore(this.lastPage);
  }
  uploadMore(offset: number) {
    this.isLoading = true;
    this.alumniService
      .getAlumni({
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
  selector: 'alm-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumniListComponent implements OnInit, OnDestroy {
  dataSource: AlumniListDataSource;
  filter$ = new BehaviorSubject<AlumniFilterForm>(new AlumniFilterForm());

  constructor(private alumniService: AlumniService) {
    // tslint:disable-next-line: no-use-before-declare
    // this.dataSource = new AlumniListDataSource(this.alumniService, this.filter$.value);
  }
  ngOnInit() {
    this.filter$
      .asObservable()
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        this.dataSource = new AlumniListDataSource(this.alumniService, this.filter$.value);
        
      });
  }
  ngOnDestroy() {}
  filterChange(form: AlumniFilterForm) {
    console.log(form);
    this.filter$.next(form);
  }
}
