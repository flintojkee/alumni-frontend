import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Alumni } from '../../models';

@Component({
  selector: 'alm-alumni-profile',
  templateUrl: './alumni-profile.component.html',
  styleUrls: ['./alumni-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumniProfileComponent implements OnInit {
  @Input() alumni: Alumni;

  constructor() {}

  ngOnInit() {
    console.log(this.alumni);
    if (!this.alumni.image_1920.includes('data:image')) {
      this.alumni.image_1920 = 'data:image/png;base64,' + this.alumni.image_1920;
    }
  }
}
