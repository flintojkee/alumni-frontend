import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from '@alm/app/shared/models/auth-token.model';
import { Alumni, AlumniInviteStatus } from '@alm/app/shared';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends RestService {
  constructor(http: HttpClient) {
    super(http);
  }

  getRegisterLink(id: number) {
    return this.get<AuthToken>(this.adminUrl.registerLink.replace('{id}', `${id}`));
  }

  getAlumniUnregistered() {
    return this.get<Alumni[]>(this.alumniUrl.alumniUnregistered);
  }

  getAlumniInviteStatus() {
    return this.get(this.adminUrl.alumniInviteStatus);
  }

  updateAlumniInviteStatus(status: AlumniInviteStatus) {
    return this.put<AlumniInviteStatus, AlumniInviteStatus>(
      this.adminUrl.alumniInviteStatus,
      status
    );
  }
}
