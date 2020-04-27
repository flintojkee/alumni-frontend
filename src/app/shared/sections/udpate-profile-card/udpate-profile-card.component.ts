import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { UpdateAlumni } from '../../models/update-alumni.model';

@Component({
  selector: 'alm-udpate-profile-card',
  templateUrl: './udpate-profile-card.component.html',
  styleUrls: ['./udpate-profile-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UdpateProfileCardComponent implements OnInit {
  @Input() alumni: UpdateAlumni;
  @Output() submit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
