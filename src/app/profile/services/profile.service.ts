import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { UpdateFormRequest } from '@alm/app/shared/models/api/update-form.request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends RestService {
  constructor(http: HttpClient) {
    super(http);
  }

  createUpdateForm(form: UpdateFormRequest) {
    return this.post<UpdateFormRequest, any>(this.profileUrl.updateForm, form);
  }

  getAlumniUpdateFormExists(alumniId: number): Observable<boolean> {
    return this.get(
      this.alumniUrl.activeUpdateFormExists.replace('{alumni_id}', `${Number(alumniId)}`)
    );
  }
}
