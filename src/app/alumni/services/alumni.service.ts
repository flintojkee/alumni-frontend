import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { Alumni } from '@alm/app/shared';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumniService extends RestService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAlumni(offset: number, limit: number, tag?: string): Observable<Alumni> {
    return this.get<Alumni>(`${this.alumniUrl.alumni}?offset=${offset}&limit=${limit}`);
  }
}
