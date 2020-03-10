import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InviteStatus } from '@alm/app/shared';

@Component({
  selector: 'alm-alumni-unregistred-filter',
  templateUrl: './alumni-unregistred-filter.component.html',
  styleUrls: ['./alumni-unregistred-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumniUnregistredFilterComponent implements OnInit {
  inviteStatusFilter = new FormControl();

  inviteStatusList: string[] = Object.values(InviteStatus);
  constructor() { }

  ngOnInit() {
    
  }

}
