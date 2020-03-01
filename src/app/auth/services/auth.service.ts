import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { SignUpRequest } from '@alm/app/shared/models/api/sign-up.request';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService {
  constructor(http: HttpClient) {
    super(http);
  }

  signUp(signUp: SignUpRequest) {
    return this.post<SignUpRequest, any>(this.alumniUrl.register, signUp);
  }
}
