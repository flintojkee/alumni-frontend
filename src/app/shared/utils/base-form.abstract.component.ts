import {  Input, Output, EventEmitter, OnInit } from '@angular/core';

import { IFormComponent, ErrorMatcher } from '../models/forms';
import { FormGroup } from '@angular/forms';
import { validateForm } from '../helpers/validate-form.decorator';

export class BaseFormComponent<T> implements IFormComponent<T> {
  @Input() formGroup: FormGroup;
  @Output() submittedForm = new EventEmitter<T>();
  matcher = new ErrorMatcher();
  constructor() {
  }
  initFormControls() {
    Object.keys(this.formGroup.controls).map((el) => {
      this[el] = this.formGroup.get(el);
    });
  }
  @validateForm('formGroup')
  onSubmit(formData: T): void {
    this.submittedForm.emit(formData);
  }
}
