import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BaseFormComponent } from '@alm/app/shared/utils/base-form';
import { LoginForm, IFormComponent, SignUpForm, formProperties } from '@alm/app/shared/models/forms';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'alm-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormLoginComponent extends BaseFormComponent<LoginForm>
implements OnInit, IFormComponent<LoginForm>, formProperties<LoginForm> {
email: AbstractControl;
password: AbstractControl;
constructor() {
  super();
}
ngOnInit() {
  super.initFormControls();
}
}
