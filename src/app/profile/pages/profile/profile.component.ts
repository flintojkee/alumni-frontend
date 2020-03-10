import { Component, OnInit } from '@angular/core';
import { AuthService } from '@alm/app/auth/services';
import { Alumni } from '@alm/app/shared';

@Component({
  selector: 'alm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: Alumni;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.user$.subscribe(res => {
      this.user = res;
    })
  }

}
