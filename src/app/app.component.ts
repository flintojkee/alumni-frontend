import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth/services';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'alumni-frontend';
  isAuth$: Observable<boolean>;
  isOperator$: Observable<boolean>;
  user$: Observable<any>;
  hideHeader: boolean;
  constructor(private authService: AuthService, private router: Router) {
    this.router.events.pipe(untilDestroyed(this)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hideHeader =
          event.url.includes('login') || event.url.includes('sign-up') || event.url.includes('404');
      }
    });
  }
  ngOnInit() {
    this.user$ = this.authService.user$;
    this.isAuth$ = this.authService.isAuth$;
    this.isOperator$ = this.authService.isOperator$;
  }
  ngOnDestroy() {}

  logout() {
    this.authService.logout();
  }
}
