import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormService, AuthService } from '../../services';
import { SignUpForm } from '@alm/app/shared/models/forms/sign-up.form';
import { ActivatedRoute, Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  token: string;
  isFormSend: boolean;
  constructor(
    private authFormService: AuthFormService,
    private authService: AuthService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.signUpForm = this.authFormService.createSignUpForm();
    this.setToken();
  }

  setToken() {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params) => {
      this.token = params['token'].toString('utf-8');
    });
  }

  ngOnDestroy() {}

  signUp(signUpForm: SignUpForm) {
    const signUp = {
      email: signUpForm.email,
      password: signUpForm.password,
      allow_show_contacts: signUpForm.allowShowContacts
    };
    this.authService
      .signUp({ odoo_contact_token: this.token + '====', ...signUp })
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
        this.isFormSend = true;
      });
  }
}
