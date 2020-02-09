import {  Input, Output, EventEmitter } from '@angular/core';

import { IFormComponent } from '../models/forms';
import { FormGroup } from '@angular/forms';
import { validateForm } from '..';

export abstract class BaseFormComponent<T> implements IFormComponent<T> {
  @Input() formGroup: FormGroup;
  @Output() submittedForm = new EventEmitter<T>();
  initFormControls(formGroup: FormGroup, props: any) {
    props.map((el) => {
      this[el] = formGroup.get(el);
    });
  }
  @validateForm('formGroup')
  onSubmit(formData: T): void {
    this.submittedForm.emit(formData);
  }
}
