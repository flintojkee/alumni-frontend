import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { AlumniFilterForm } from '../../models/forms/alumni-filter.form';
import { FormControl, FormGroup } from '@angular/forms';
import { FormFilterService } from '@alm/app/core/services/form-filter.service';

@Component({
  selector: 'alm-filter-alumni',
  templateUrl: './filter-alumni.component.html',
  styleUrls: ['./filter-alumni.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterAlumniComponent implements OnInit {
  @Output() formChanged = new EventEmitter<AlumniFilterForm>();
  @Input() inviteStatus = false;
  @Input() userConfirmed = false;
  inviteStatusFilter = new FormControl();
  filterFormGroup: FormGroup;
  constructor(private formFilterService: FormFilterService) {}

  ngOnInit() {
    this.filterFormGroup = this.formFilterService.createAlumniFilterForm();
  }
  formChanges(form: AlumniFilterForm) {
    console.log(form);
    this.formChanged.next(form);
  }
}
