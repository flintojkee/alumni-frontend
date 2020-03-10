import { Component, OnInit, OnDestroy, TestabilityRegistry } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.confirmUuid();
  }

  private confirmUuid() {
    this.route.params
      .pipe(
        switchMap((params) => this.authService.confirm({ alumni_uuid: params['uuid'] })),
        untilDestroyed(this)
      )
      .subscribe((res) => {
        this.authService.setUser(res.alumni[0]);
        this.router.navigate(['profile']);
        console.log(res);
      });
  }

  ngOnDestroy() {}
}
