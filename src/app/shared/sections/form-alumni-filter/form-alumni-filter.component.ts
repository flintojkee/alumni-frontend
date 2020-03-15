import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { AlumniFilterForm } from '../../models/forms/alumni-filter.form';
import { BaseFormComponent } from '../../utils/base-form';
import { IFormComponent, formProperties } from '../../models/forms';
import { AbstractControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { InviteStatus } from '../../models/alumni-invite-status.model';

@Component({
  selector: 'alm-form-alumni-filter',
  templateUrl: './form-alumni-filter.component.html',
  styleUrls: ['./form-alumni-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormAlumniFilterComponent extends BaseFormComponent<AlumniFilterForm>
  implements OnInit, IFormComponent<AlumniFilterForm>, formProperties<AlumniFilterForm>, OnDestroy {
  @Output() changed = new EventEmitter<AlumniFilterForm>();
  @Input() inviteStatus = false;
  @Input() userConfirmed = false;
  bachelor_faculty: AbstractControl;
  bachelor_speciality: AbstractControl;
  bachelor_entry_year: AbstractControl;
  bachelor_finish_year: AbstractControl;
  master_faculty: AbstractControl;
  master_speciality: AbstractControl;
  master_entry_year: AbstractControl;
  master_finish_year: AbstractControl;
  invite_status: AbstractControl;
  user_confirmed: AbstractControl;
  facultyList = [
    'Факультет інформатики',
    'Факультет правничих наук',
    'Факультет економічних наук',
    'Факультет природничих наук',
    'Факультет соціальних наук',
    'Факультет гуманітарних наук'
  ];
  specialityList = [
    'Інженерія програмного забезпечення',
    'Прикладна математика',
    "Комп'ютерні науки",
    'Системний аналіз'
  ];
  entryYears = this.getYears(1980, new Date().getFullYear());
  finishYears = this.getYears(new Date().getFullYear(), new Date().getFullYear() + 4);
  inviteStatusList: string[] = Object.values(InviteStatus);
  constructor() {
    super();
  }
  ngOnInit() {
    super.initFormControls();
    this.subscribeChanges();
  }

  ngOnDestroy() {}

  subscribeChanges() {
    this.formGroup.valueChanges.pipe(untilDestroyed(this)).subscribe((res) => {
      this.changed.next(res);
    });
  }
  getYears(start?: number, end?: number) {
    const y = [];
    for (let index = start; index < end; index++) {
      y.push(`${index}`);
    }
    return y;
  }
}
