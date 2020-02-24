import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { Alumni } from '@alm/app/shared';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniService extends RestService {
  private alumni = new BehaviorSubject<Alumni[]>([]);
  constructor(http: HttpClient) {
    super(http);
  }

  get alumni$() {
    return this.alumni.asObservable();
  }

  setAlumni(alumni: Alumni[]) {
    this.alumni.next([...this.alumni.value, ...alumni]);
  }

  getAlumni(
    {
      offset,
      limit,
      tag,
      is_activated
    }:
    {
      offset?: number,
      limit?: number,
      tag?: 'Випускник',
      is_activated?: 'False' | 'True'
    }

  ): Observable<Alumni[]> {
    let url = `${this.alumniUrl.alumni}?`;
    if (offset) {
      url += `offset=${offset}`;
    } else if (limit) {
      url += `&limit=${limit}`;
    } else if (tag) {
      url += `&tag=${tag}`;
    } else if (is_activated) {
      url += `&is_activated=${is_activated}`;
    }
    return this.get<Alumni[]>(`${url}`);
  }
}
