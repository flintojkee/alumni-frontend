import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumni } from '@alm/app/shared';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AlumniService } from '../../services/alumni.service';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  templateUrl: './alumni-profile.component.html',
  styleUrls: ['./alumni-profile.component.scss']
})
export class AlumniProfileComponent implements OnInit, OnDestroy {
  alumni: Alumni;
  isLoading: boolean;
  constructor(private route: ActivatedRoute, private alumniService: AlumniService) {}

  ngOnInit() {
    this.initAlumni();
  }

  ngOnDestroy() {}

  initAlumni() {
    this.isLoading = true;
    this.route.params
      .pipe(
        switchMap((p) => {
          const alumni = this.alumniService.alumni.find((a) => a.id === +p['id']);
          return alumni ? of(alumni) : this.alumniService.getAlumniById(p['id']);
        }),
        untilDestroyed(this)
      )
      .subscribe((res) => {
        console.log(res);
        this.alumni = res;
      });
  }
}
