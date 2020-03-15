import { Injectable } from '@angular/core';
import { FormService } from './form.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlumniFilterForm } from '@alm/app/shared/models/forms/alumni-filter.form';
import { OptionalType, fieldsValidators } from '@alm/app/shared';

@Injectable({
  providedIn: 'root'
})
export class FormFilterService {
  constructor(private formService: FormService, private formBuilder: FormBuilder) {}

  createAlumniFilterForm(): FormGroup {
    const initialValues: OptionalType<AlumniFilterForm> = new AlumniFilterForm();
    const validators: fieldsValidators<AlumniFilterForm> = {
      bachelor_faculty: [],
      bachelor_speciality: [],
      bachelor_entry_year: [],
      bachelor_finish_year: [],
      master_faculty: [],
      master_speciality: [],
      master_entry_year: [],
      master_finish_year: [],
      invite_status: [],
      user_confirmed: []
    };
    const controls = this.formService.createFormControls(initialValues, validators);
    return this.formBuilder.group(controls);
  }
}
