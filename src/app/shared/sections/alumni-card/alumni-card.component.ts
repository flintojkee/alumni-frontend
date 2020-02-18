import { Component, OnInit, Input } from '@angular/core';
import { Alumni } from '../../models';

@Component({
  selector: 'alm-alumni-card',
  templateUrl: './alumni-card.component.html',
  styleUrls: ['./alumni-card.component.scss']
})
export class AlumniCardComponent implements OnInit {
  @Input() alumni: Alumni;
  constructor() {}

  ngOnInit() {}
}
