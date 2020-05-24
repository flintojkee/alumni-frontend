import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { SignUpRequest } from '@alm/app/shared/models/api/sign-up.request';
import { Alumni } from '@alm/app/shared';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginRequest } from '@alm/app/shared/models/api';
import { LoginAdminResponse } from '@alm/app/shared/models/api/login-admin.response';
import { map } from 'rxjs/operators';
import { Operator } from '@alm/app/shared/models/operator.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService {
  private _user: BehaviorSubject<Alumni | Operator>;
  private _isAuth: BehaviorSubject<boolean>;
  private _isOperator: BehaviorSubject<boolean>;
  constructor(http: HttpClient, private router: Router) {
    super(http);
    this._isAuth = new BehaviorSubject(false);
    this._isOperator = new BehaviorSubject(this.checkOperator());
    this._user = new BehaviorSubject<Alumni | Operator>(this.getUser());
  }

  get user$() {
    return this._user.asObservable();
  }

  get isAuth$() {
    return this._isAuth.asObservable();
  }

  get isOperator$() {
    return this._isOperator.asObservable();
  }

  setUser(user: Alumni | Operator) {
    this._user.next(user);
    this.setAuth(true);
    localStorage.setItem('user', JSON.stringify(user));
  }

  private getUser() {
    if (localStorage.getItem('user')) {
      this.setAuth(true);
    }
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    this._user.next(null);
    this.setAuth(false);
    this._isOperator.next(false);
    localStorage.removeItem('user');
    localStorage.removeItem('operator');
    this.router.navigate(['login']);
  }

  signUp(signUp: SignUpRequest) {
    return this.post<SignUpRequest, any>(this.alumniUrl.register, signUp);
  }

  login(login: LoginRequest) {
    return this.post<LoginRequest, any>(this.alumniUrl.login, login);
  }

  loginAdmin(login: LoginRequest) {
    return this.post<LoginRequest, LoginAdminResponse>(this.adminUrl.login, login).pipe(
      map((res: LoginAdminResponse) => {
        this.setUser(res.operator);
        localStorage.setItem('operator', 'true');
        this._isOperator.next(true);
        this.setAuth(true);
        return res;
      })
    );
  }

  confirm(confirm: { alumni_uuid: string }): Observable<{ alumni: Alumni }> {
    return this.post<
      { alumni_uuid: string },
      { alumni: Alumni; access_token: string; refresh_token: string }
    >(this.alumniUrl.confirm, confirm);
  }

  setAuth(status: boolean) {
    this._isAuth.next(status);
  }

  checkOperator() {
    return localStorage.getItem('operator') ? true : false;
  }
}
