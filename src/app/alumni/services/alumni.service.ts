import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { Alumni } from '@alm/app/shared';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

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
    tag,
    is_activated
  }: {
    offset?: number;
    limit?: number;
    tag?: 'Випускник';
    is_activated?: 'False' | 'True';
  }): Observable<Alumni[]> {
    let url = `${this.alumniUrl.alumniRegistered}?`;
    if (offset || offset === 0) {
      url += 'offset=' + offset;
    }
    if (limit) {
      url += '&limit=' + limit;
    }
    if (tag) {
      url += '&tag=' + tag;
    }
    if (is_activated) {
      url += '&is_activated=' + is_activated;
    }
    return this.get<Alumni[]>(`${url}`);
  }

  getAlumniById(id: number) {
    return this.get<{ alumni: Alumni[] }>(this.alumniUrl.alumni + id).pipe(
      map((res) => res.alumni[0])
    );
  }
}
