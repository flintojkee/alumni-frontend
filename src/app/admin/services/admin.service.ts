import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from '@alm/app/shared/models/auth-token.model';
import { Alumni, AlumniInviteStatus } from '@alm/app/shared';
import { AlumniFilterForm } from '@alm/app/shared/models/forms/alumni-filter.form';
import { UpdateFormStatus } from '@alm/app/shared/enums/update-form.enum';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';
import { UpdateFormConfirmRequest } from '@alm/app/shared/models/api/update-form-confirm.request';

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

  getAlumniUnregistered({
    offset,
    limit,
    filter
  }: {
    offset?: number;
    limit?: number;
    filter?: AlumniFilterForm;
  }) {
    return this.get<Alumni[]>(
      this.alumniUrl.alumniUnregistered + '?' + this.getQuery({ ...filter, offset, limit })
    );
  }

  getAlumniRegistered({
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

  getAlumniInviteStatus() {
    return this.get(this.adminUrl.alumniInviteStatus);
  }

  updateAlumniInviteStatus(status: AlumniInviteStatus) {
    return this.put<AlumniInviteStatus, AlumniInviteStatus>(
      this.adminUrl.alumniInviteStatus,
      status
    );
  }

  getUpdateForms(filter?: { form_status: UpdateFormStatus }) {
    return this.get<UpdateAlumni[]>(this.adminUrl.updateForm + '?' + this.getQuery({ ...filter }));
  }

  confirmUpdateForm({ form_id, operator_id }: { form_id: number; operator_id: number }) {
    return this.post<{ operator_id: number }, { operator_id: number }>(
      this.adminUrl.confirmForm.replace('{id}', `${form_id}`),
      { operator_id }
    );
  }

  getQuery(obj: any) {
    return Object.keys(obj).reduce(
      (acc, cur) => (obj[cur] ? `${acc}&${cur}=${obj[cur]}` : acc),
      ''
    );
  }
}
