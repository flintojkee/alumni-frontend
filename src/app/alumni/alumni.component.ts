import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumni } from '../shared';
import { AlumniService } from './services/alumni.service';

@Component({
  selector: 'alm-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  alumni$: Observable<Alumni>;
  offset = 0;
  limit = 100;
  tag = 'Alumni'
  constructor(private alumniService: AlumniService) { }

  ngOnInit() {
    this.initAlumni();
  }

  initAlumni() {
    this.alumni$ = this.alumniService.getAlumni(this.offset, this.limit, this.tag);
  }

}
