import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Alumni } from '@alm/app/shared';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';
import { AlumniService } from '../../services/alumni.service';

@Component({
  selector: 'alm-alumni-list',
  templateUrl: './alumni-list.component.html',
  styleUrls: ['./alumni-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumniListComponent implements OnInit {
  dataSource: AlumniDataSource;
  constructor(alumniService: AlumniService) {
    // tslint:disable-next-line: no-use-before-declare
    this.dataSource = new AlumniDataSource(alumniService);
  }
  ngOnInit() {}
}

export class AlumniDataSource extends DataSource<Alumni | undefined> {
  private cachedAlumni = Array.from<Alumni>({ length: 0 });
  private dataStream = new BehaviorSubject<(Alumni | undefined)[]>(this.cachedAlumni);
  private subscription = new Subscription();
  public isLoading = false;
  private lastPage = 0;
  private limit = 10;
  private tag: 'Випускник' = 'Випускник';
  dataSource: Alumni;
  constructor(private alumniService: AlumniService) {
    super();
    this.uploadMore(this.lastPage);
  }

  connect(
    collectionViewer: CollectionViewer
  ): Observable<(Alumni | undefined)[] | ReadonlyArray<Alumni | undefined>> {
    this.subscription.add(
      collectionViewer.viewChange.subscribe((range) => {
        const currentPage = this._getPageForIndex(range.end);

        if (currentPage > this.lastPage) {
          this.lastPage = currentPage;
          this.uploadMore(this.lastPage);
        }
      })
    );
    return this.dataStream;
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.subscription.unsubscribe();
  }
  uploadMore(offset: number) {
    this.isLoading = true;
    this.alumniService
      .getAlumni({ offset: offset * this.limit, limit: this.limit, tag: this.tag })
      .subscribe((res) => {
        this.isLoading = false;
        this.cachedAlumni = this.cachedAlumni.concat(res);
        this.dataStream.next(this.cachedAlumni);
      });
  }
  private _getPageForIndex(i: number): number {
    return Math.floor(i / this.limit);
  }
}
