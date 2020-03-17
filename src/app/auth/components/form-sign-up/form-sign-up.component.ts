import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { IFormComponent, formProperties, ErrorMatcher } from '@alm/app/shared/models/forms';
import { SignUpForm } from '@alm/app/shared/models/forms/sign-up.form';
import { FormGroup, AbstractControl } from '@angular/forms';
import { validateForm } from '@alm/app/shared';
import { BaseFormComponent } from '@alm/app/shared/utils/base-form';

@Component({
  selector: 'alm-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormSignUpComponent extends BaseFormComponent<SignUpForm>
  implements OnInit, IFormComponent<SignUpForm>, formProperties<SignUpForm> {
  hidePassword = true;
  hideRetypedPassword = true;
  email: AbstractControl;
  password: AbstractControl;
  retypedPassword: AbstractControl;
  constructor() {
    super();
  }
  ngOnInit() {
    super.initFormControls();
  }
}
