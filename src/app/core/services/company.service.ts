import { Injectable } from '@angular/core';
import { RestService } from '@alm/app/shared/utils';
import { HttpClient } from '@angular/common/http';
import { Company } from '@alm/app/shared';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends RestService {
  constructor(http: HttpClient) {
    super(http);
  }

  getCompanies() {
    return this.get<Company[]>(this.companyUrls.companies);
  }
}
