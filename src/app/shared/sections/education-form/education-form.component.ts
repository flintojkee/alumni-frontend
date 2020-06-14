import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SpecialityList, FacultyList } from '../../utils/filter-helper';
import { Alumni } from '../../models';

@Component({
  selector: 'alm-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit, OnChanges {
  @Input() user: Alumni;
  @Output() inittedFormGroup = new EventEmitter<FormGroup>();
  @Input() editable: boolean;
  formGroup: FormGroup;
  specialityList = SpecialityList;
  facultyList = FacultyList;
  entryYears = this.getYears(1980, new Date().getFullYear());
  finishYears = this.getYears(1980, new Date().getFullYear() + 4);
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initFormGroup();
    this.bachelorMasterChange();
    this.formGroup.controls.bachelor.setValue(this.user.bachelor_degree || null);
    this.formGroup.controls.master.setValue(this.user.master_degree || null);
    this.toggleFormGroup();
  }

  ngOnChanges() {
    this.toggleFormGroup();
  }

  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      diplomaNaukma: [this.user.diploma_naukma],
      bachelor: [],
      bachelorFaculty: [this.user.bachelor_faculty || null],
      bachelorSpeciality: [this.user.bachelor_speciality || null],
      bachelorEntryYear: [this.user.bachelor_year_in || null],
      bachelorFinishYear: [this.user.bachelor_year_out || null],
      master: [],
      masterFaculty: [this.user.master_faculty || null],
      masterSpeciality: [this.user.master_speciality || null],
      masterEntryYear: [this.user.master_year_in || null],
      masterFinishYear: [this.user.master_year_out || null]
    });
    this.inittedFormGroup.next(this.formGroup);
  }
  get diplomaNaukma() {
    return this.formGroup.controls.diplomaNaukma;
  }
  get bachelor() {
    return this.formGroup.controls.bachelor;
  }
  get bachelorFaculty() {
    return this.formGroup.controls.bachelorFaculty;
  }
  get bachelorSpeciality() {
    return this.formGroup.controls.bachelorSpeciality;
  }
  get bachelorEntryYear() {
    return this.formGroup.controls.bachelorEntryYear;
  }
  get bachelorFinishYear() {
    return this.formGroup.controls.bachelorFinishYear;
  }
  get master() {
    return this.formGroup.controls.master;
  }
  get masterFaculty() {
    return this.formGroup.controls.masterFaculty;
  }
  get masterSpeciality() {
    return this.formGroup.controls.masterSpeciality;
  }
  get masterEntryYear() {
    return this.formGroup.controls.masterEntryYear;
  }
  get masterFinishYear() {
    return this.formGroup.controls.masterFinishYear;
  }

  getYears(start?: number, end?: number) {
    const y = [];
    for (let index = start; index < end; index++) {
      y.push(`${index}`);
    }
    return y;
  }

  bachelorMasterChange() {
    this.formGroup.controls.bachelor.valueChanges.subscribe((r) => {
      console.log(r);
      if (r) {
        this.formGroup.controls.bachelorFaculty.setValidators(Validators.required);
        this.formGroup.controls.bachelorSpeciality.setValidators(Validators.required);
        this.formGroup.controls.bachelorEntryYear.setValidators(Validators.required);
        this.formGroup.controls.bachelorFaculty.updateValueAndValidity();
        this.formGroup.controls.bachelorSpeciality.updateValueAndValidity();
        this.formGroup.controls.bachelorEntryYear.updateValueAndValidity();
        this.formGroup.updateValueAndValidity();
      } else {
        this.formGroup.controls.bachelorFaculty.clearValidators();
        this.formGroup.controls.bachelorSpeciality.clearValidators();
        this.formGroup.controls.bachelorEntryYear.clearValidators();
        this.formGroup.controls.bachelorFaculty.updateValueAndValidity();
        this.formGroup.controls.bachelorSpeciality.updateValueAndValidity();
        this.formGroup.controls.bachelorEntryYear.updateValueAndValidity();
        this.formGroup.updateValueAndValidity();
      }
    });
    this.formGroup.controls.master.valueChanges.subscribe((r) => {
      if (r) {
        this.formGroup.controls.masterFaculty.setValidators(Validators.required);
        this.formGroup.controls.masterSpeciality.setValidators(Validators.required);
        this.formGroup.controls.masterEntryYear.setValidators(Validators.required);
        this.formGroup.controls.masterFaculty.updateValueAndValidity();
        this.formGroup.controls.masterSpeciality.updateValueAndValidity();
        this.formGroup.controls.masterEntryYear.updateValueAndValidity();
        this.formGroup.updateValueAndValidity();
      } else {
        this.formGroup.controls.masterFaculty.clearValidators();
        this.formGroup.controls.masterSpeciality.clearValidators();
        this.formGroup.controls.masterEntryYear.clearValidators();
        this.formGroup.controls.masterFaculty.updateValueAndValidity();
        this.formGroup.controls.masterSpeciality.updateValueAndValidity();
        this.formGroup.controls.masterEntryYear.updateValueAndValidity();
        this.formGroup.updateValueAndValidity();
      }
    });
  }

  toggleFormGroup() {
    if (this.formGroup) {
      this.editable ? this.formGroup.enable() : this.formGroup.disable();
    }
  }
}
