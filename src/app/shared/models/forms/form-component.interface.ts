import { EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

export interface IFormComponent<T> {
  formGroup: FormGroup;
  submittedForm: EventEmitter<any>;
  initFormControls(formGroup: FormGroup, props: AbstractControl[]): void;
  onSubmit(formData: T): void;
}

export type formProperties<T> = { [P in keyof T]: AbstractControl };
