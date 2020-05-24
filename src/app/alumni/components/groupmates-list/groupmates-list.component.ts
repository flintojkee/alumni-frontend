import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { BaseDataSource } from '@alm/app/shared/utils';
import { Alumni } from '@alm/app/shared';
import { AlumniService } from '../../services/alumni.service';
import { AlumniFilterForm } from '@alm/app/shared/models/forms/alumni-filter.form';
import { AuthService } from '@alm/app/auth/services';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

export class AlumniGroupmatesDataSource extends BaseDataSource<Alumni | undefined>
  implements OnDestroy {
  constructor(private alumniService: AlumniService, private id: number) {
    super();
    this.uploadMore(this.lastPage);
  }
  uploadMore(offset: number) {
    this.isLoading = true;
    this.alumniService
      .getGroupmates({
        id: this.id,
        offset: offset * this.limit,
        limit: this.limit
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          alert(err.error.message);
          return EMPTY;
        }),
        untilDestroyed(this)
      )
      .subscribe((res) => {
        this.isEmpty = this.lastPage === 0 && res.length === 0;
        this.isLoading = false;
        this.cachedAlumni = this.cachedAlumni.concat(res);
        this.dataStream.next(this.cachedAlumni);
      });
  }
  ngOnDestroy() {}
}

@Component({
  selector: 'alm-groupmates-list',
  templateUrl: './groupmates-list.component.html',
  styleUrls: ['./groupmates-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupmatesListComponent implements OnInit, OnDestroy {
  dataSource: AlumniGroupmatesDataSource;
  user: Alumni;
  constructor(private authService: AuthService, private alumniService: AlumniService) {}

  ngOnInit() {
    this.authService.user$
      .pipe(
        catchError((err) => {
          console.log(err);
          return EMPTY;
        }),
        untilDestroyed(this)
      )
      .subscribe((r) => {
        this.user = r as Alumni;
        this.dataSource = new AlumniGroupmatesDataSource(this.alumniService, this.user.id);
      });
  }

  ngOnDestroy() {}
}
