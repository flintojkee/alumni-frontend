import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlumniUrls, AdminUrls } from '@alm/app/config/api.config';
import { environment } from '@alm/environments/environment';
import { map } from 'rxjs/operators';
export abstract class RestService {
  protected baseUrl = environment.apiUrl;
  protected adminUrl = AdminUrls;
  protected alumniUrl = AlumniUrls;
  constructor(protected http: HttpClient) {}

  protected get<R>(relativeUrl: string): Observable<R> {
    return this.http.get<R>(this.baseUrl + relativeUrl);
  }

  protected post<T, R>(relativeUrl: string, data: T, options?): Observable<any> {
    return this.http.post<R>(this.baseUrl + relativeUrl, data, options);
  }
  protected delete<T>(relativeUrl: string) {
    return this.http.delete<T>(this.baseUrl + relativeUrl);
  }
  protected put<T = {}, R = {}>(relativeUrl: string, data: T): Observable<R> {
    return this.http.put<R>(this.baseUrl + relativeUrl, data);
  }
}
