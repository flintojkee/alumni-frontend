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

  getAlumni(offset: number, limit: number, tag?: string): Observable<Alumni[]> {
    let url = `${this.alumniUrl.alumni}?offset=${offset}&limit=${limit}`;
    if (tag) {
      url += `&tag=${tag}`;
    }
    return this.get<Alumni[]>(`${url}`);
  }
}
