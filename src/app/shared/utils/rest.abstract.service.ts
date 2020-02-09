import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
export abstract class RestService {
  protected baseUrl = '';
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
