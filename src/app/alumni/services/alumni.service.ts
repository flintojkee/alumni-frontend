import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { Alumni } from '@alm/app/shared';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AlumniFilterForm } from '@alm/app/shared/models/forms/alumni-filter.form';

@Injectable({
  providedIn: 'root'
})
export class AlumniService extends RestService {
  private _alumni = new BehaviorSubject<Alumni[]>([]);
  constructor(http: HttpClient) {
    super(http);
  }

  get alumni$() {
    return this._alumni.asObservable();
  }

  get alumni() {
    return this._alumni.value;
  }

  setAlumni(alumni: Alumni[]) {
    this._alumni.next([...this._alumni.value, ...alumni]);
  }

  getAlumni({
    offset,
    limit,
    filter
  }: {
    offset?: number;
    limit?: number;
    filter?: AlumniFilterForm;
  }) {
    return this.get<Alumni[]>(
      this.alumniUrl.alumniRegistered + '?' + this.getQuery({ ...filter, offset, limit })
    );
  }

  getGroupmates({ id, offset, limit }: { id: number; offset?: number; limit?: number }) {
    return this.get<Alumni[]>(
      this.alumniUrl.alumniGroupmates.replace('{id}', `${id}`) +
        '?' +
        this.getQuery({ offset, limit })
    );
  }

  getAlumniById(id: number) {
    return this.get<{ alumni: Alumni[] }>(this.alumniUrl.alumni + id).pipe(
      map((res) => res.alumni[0])
    );
  }

  getQuery(obj: any) {
    return Object.keys(obj).reduce(
      (acc, cur) => (obj[cur] ? `${acc}&${cur}=${obj[cur]}` : acc),
      ''
    );
  }
}
