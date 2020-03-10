import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumni } from '@alm/app/shared';

@Component({
  selector: 'alm-profile-stepper',
  templateUrl: './profile-stepper.component.html',
  styleUrls: ['./profile-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileStepperComponent implements OnInit {
  @Input() user: Alumni;
  generalFormGroup: FormGroup;
  socialFormGroup: FormGroup;
  jobFormGroup: FormGroup;
  educationFormGroup: FormGroup;
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initGeneralFormGroup();
    this.initSocialFormGroup();
    this.initJobFormGroup();
    this.initEducationFormGroup();
    this.formGroup = this.formBuilder.group({
      general: this.generalFormGroup,
      social: this.socialFormGroup,
      job: this.jobFormGroup,
      education: this.educationFormGroup
    });
  }

  initGeneralFormGroup() {
    this.generalFormGroup = this.formBuilder.group({
      fullName: [this.user.name || '', Validators.required],
      dateOfBirth: ['', Validators.required],
      phone: [],
      mobile: [],
      address: [],
      email: [this.user.email || '', [Validators.email, Validators.required]]
    });
  }
  initSocialFormGroup() {
    this.socialFormGroup = this.formBuilder.group({
      facebook: [this.user.facebook_link || ''],
      linkedIn: [this.user.linkedin_link || ''],
      skype: [''],
      telegram: [''],
      viber: ['']
    });
  }
  initJobFormGroup() {
    this.jobFormGroup = this.formBuilder.group({
      jobName: [''],
      address: ['']
    });
  }
  initEducationFormGroup() {
    this.educationFormGroup = this.formBuilder.group({
      diplomaNaukma: [''],
      bachelor: [''],
      bachelorFaculty: [''],
      bachelorSpeciality: [''],
      bachelorEntryYear: [''],
      bachelorFinishYear: [''],
      master: [''],
      masterFaculty: [''],
      masterSpeciality: [''],
      masterEntryYear: [''],
      masterFinishYear: ['']
    });
  }

  sendData() {
    console.log(this.formGroup.value);
  }
}
