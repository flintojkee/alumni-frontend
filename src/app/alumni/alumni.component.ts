import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumni } from '../shared';
import { AlumniService } from './services/alumni.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
@Component({
  selector: 'alm-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit, OnDestroy {
  constructor() {}

  ngOnInit() {
  }
  ngOnDestroy() {}
}
