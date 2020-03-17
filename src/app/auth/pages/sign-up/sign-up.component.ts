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
  constructor(
    private authFormService: AuthFormService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
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
    this.authService
      .signUp({odoo_contact_token: this.token + '====', ...signUpForm })
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
