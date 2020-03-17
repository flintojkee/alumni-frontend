import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { OptionalType, fieldsValidators } from '@alm/app/shared';
import { SignUpForm } from '@alm/app/shared/models/forms/sign-up.form';
import { requiredValidator, emailValidator, minLengthValidator, passwordValidator, passwordMatchValidator } from '@alm/app/shared/ui';
import { FormService } from '@alm/app/core/services/form.service';
import { LoginForm } from '@alm/app/shared/models/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {

  constructor(private formService: FormService, private formBuilder: FormBuilder ) { }

  createSignUpForm(): FormGroup {
    const initialValues: OptionalType<SignUpForm> = new SignUpForm();
    const validators: fieldsValidators<SignUpForm> = {
      email: [requiredValidator('Email Address'), emailValidator()],
      password: [
        requiredValidator('Password'),
        minLengthValidator('Minimum length of password is', 7),
        passwordValidator()
      ],
      retypedPassword: []
    };

    const controls = this.formService.createFormControls(initialValues, validators);

    controls.retypedPassword.setValidators([
      requiredValidator('Retype password'),
      passwordValidator(),
      passwordMatchValidator(controls.password)
    ]);

    return this.formBuilder.group(controls);
  }

  createLoginForm(): FormGroup {
    const initialValues: OptionalType<LoginForm> = new LoginForm();
    const validators: fieldsValidators<LoginForm> = {
      email: [requiredValidator('Email Address'), emailValidator()],
      password: [
        requiredValidator('Password'),
        minLengthValidator('Minimum length of password is', 7),
        passwordValidator()
      ]
    };
    const controls = this.formService.createFormControls(initialValues, validators);
    return this.formBuilder.group(controls);
  }

  trimStringFields<T>(obj: T): T {
    return Object.keys(obj).reduce(
      (trimmedObj: T, key: string) => {
        const isString = typeof obj[key] === 'string';
        trimmedObj[key] = isString ? obj[key].trim() : obj[key];
        return trimmedObj;
      },
      {} as T
    );
  }
}
