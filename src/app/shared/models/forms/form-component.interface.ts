import { EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class ErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface IFormComponent<T> {
  formGroup: FormGroup;
  submittedForm: EventEmitter<any>;
  matcher: ErrorMatcher;
  onSubmit(formData: T): void;
}

export type formProperties<T> = { [P in keyof T]: AbstractControl };
