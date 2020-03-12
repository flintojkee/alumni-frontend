import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InviteStatus } from '@alm/app/shared';
import { FormFilterService } from '@alm/app/core/services/form-filter.service';
import { AlumniFilterForm } from '@alm/app/shared/models/forms/alumni-filter.form';

@Component({
  selector: 'alm-alumni-unregistred-filter',
  templateUrl: './alumni-unregistred-filter.component.html',
  styleUrls: ['./alumni-unregistred-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlumniUnregistredFilterComponent implements OnInit {
  @Output() formChanged = new EventEmitter<AlumniFilterForm>();
  inviteStatusFilter = new FormControl();
  filterFormGroup: FormGroup;
  constructor(private formFilterService: FormFilterService) {}

  ngOnInit() {
    this.filterFormGroup = this.formFilterService.createAdminAlumniFilterForm();
  }
  formChanges(form: AlumniFilterForm) {
    console.log(form);
    this.formChanged.next(form);
  }
}
