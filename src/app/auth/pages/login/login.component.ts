import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormService, AuthService } from '../../services';
import { LoginForm } from '@alm/app/shared/models/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  constructor(
    private authFormService: AuthFormService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.authFormService.createLoginForm();
  }

  ngOnDestroy() {}

  login(loginForm: LoginForm) {
    this.authService
      .login(loginForm)
      .pipe(untilDestroyed(this))
      .subscribe((res) => {
        console.log(res);
        this.authService.setUser(res.alumni[0]);
        this.router.navigate(['profile']);
      });
  }
}
