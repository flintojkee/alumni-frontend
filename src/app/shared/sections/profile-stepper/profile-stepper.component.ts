import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumni, Company } from '@alm/app/shared';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';

@Component({
  selector: 'alm-profile-stepper',
  templateUrl: './profile-stepper.component.html',
  styleUrls: ['./profile-stepper.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileStepperComponent implements OnInit {
  @Input() user: Alumni;
  @Output() updatedUser = new EventEmitter<UpdateAlumni>();
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      personal: new FormGroup({}),
      job: new FormGroup({}),
      education: new FormGroup({})
    });
  }

  setPersonalDataFormGroup(event: FormGroup) {
    this.formGroup.controls.personal = event;
  }

  setEducationFormGroup(event: FormGroup) {
    this.formGroup.controls.education = event;
  }

  setJobFormGroup(event: FormGroup) {
    this.formGroup.controls.job = event;
  }

  get personalFormGroupControls() {
    return this.formGroup.controls.personal['controls'];
  }
  get educationFormGroupControls() {
    return this.formGroup.controls.education['controls'];
  }
  get jobFormGroupControls() {
    return this.formGroup.controls.job['controls'];
  }

  sendData() {
    const dateOfBirth = this.formatDate(this.personalFormGroupControls.dateOfBirth.value);
    this.updatedUser.next(
      new UpdateAlumni(
        this.personalFormGroupControls.fullName.value,
        dateOfBirth,
        this.user.image_1920.toString().replace('data:image/png;base64,', ''),
        this.personalFormGroupControls.country.value,
        this.personalFormGroupControls.city.value,
        this.personalFormGroupControls.mobile.value,
        this.personalFormGroupControls.skype.value,
        this.personalFormGroupControls.telegram.value,
        this.personalFormGroupControls.viber.value,
        this.personalFormGroupControls.facebook.value,
        this.personalFormGroupControls.linkedIn.value,
        this.educationFormGroupControls.bachelor.value,
        this.educationFormGroupControls.bachelorFaculty.value,
        this.educationFormGroupControls.bachelorSpeciality.value,
        this.educationFormGroupControls.bachelorEntryYear.value,
        this.educationFormGroupControls.bachelorFinishYear.value,
        this.educationFormGroupControls.master.value,
        this.educationFormGroupControls.masterFaculty.value,
        this.educationFormGroupControls.masterSpeciality.value,
        this.educationFormGroupControls.masterEntryYear.value,
        this.educationFormGroupControls.masterFinishYear.value,
        this.jobFormGroupControls.jobId.value,
        this.jobFormGroupControls.jobName.value,
        this.jobFormGroupControls.position.value,
        this.user.alumni_id
      )
    );
  }

  formatDate(date: Date) {
    return date.getFullYear() + '-' + (+date.getMonth() + 1) + '-' + date.getDate();
  }
}
