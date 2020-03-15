import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth/services';
import { Observable } from 'rxjs';
import { Alumni } from './shared';
import { Operator } from './shared/models/operator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'alumni-frontend';
  isAuth$: Observable<boolean>;
  isOperator$: Observable<boolean>;
  user$: Observable<any>;
  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    this.user$ = this.authService.user$;
    this.isAuth$ = this.authService.isAuth$;
    this.isOperator$ = this.authService.isOperator$;
  }

  logout() {
    this.authService.logout();
  }
}
