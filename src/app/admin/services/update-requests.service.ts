import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';

@Injectable({
  providedIn: 'root'
})
export class UpdateRequestsService {
  private _updateRequests: BehaviorSubject<UpdateAlumni[]> = new BehaviorSubject<UpdateAlumni[]>(
    []
  );
  get updateRequests() {
    return this._updateRequests.asObservable();
  }
  setUpdateRequests(val: UpdateAlumni[]) {
    this._updateRequests.next(val);
  }
  constructor() {}
}
