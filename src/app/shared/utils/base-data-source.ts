import { DataSource } from '@angular/cdk/table';
import { Alumni } from '..';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';

export abstract class BaseDataSource<T> extends DataSource<T | undefined> {
  protected cachedAlumni = Array.from<T>({ length: 0 });
  protected dataStream = new BehaviorSubject<(T | undefined)[]>(this.cachedAlumni);
  protected subscription = new Subscription();
  public isLoading = false;
  protected lastPage = 0;
  protected limit = 10;
  dataSource: T;
  isEmpty: boolean;
  constructor() {
    super();
  }

  connect(
    collectionViewer: CollectionViewer
  ): Observable<(T | undefined)[] | ReadonlyArray<T | undefined>> {
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
  abstract uploadMore(offset: number): void;

  private _getPageForIndex(i: number): number {
    return Math.floor(i / this.limit);
  }
}
