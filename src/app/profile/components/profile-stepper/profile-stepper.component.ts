import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'alm-profile-stepper',
  templateUrl: './profile-stepper.component.html',
  styleUrls: ['./profile-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileStepperComponent implements OnInit {
  generalFormGroup: FormGroup;
  socialFormGroup: FormGroup;
  jobFormGroup: FormGroup;
  educationFormGroup: FormGroup;
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.generalFormGroup = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      phone: [],
      mobile: [],
      address: [],
      email: ['', [Validators.email, Validators.required]]
    });
    this.socialFormGroup = this.formBuilder.group({
      facebook: [''],
      linkedIn: [''],
      skype: [''],
      telegram: [''],
      viber: ['']
    });
    this.jobFormGroup = this.formBuilder.group({
      jobName: [''],
      address: [''],
    });
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
    this.formGroup = this.formBuilder.group( {
      general: this.generalFormGroup,
      social: this.socialFormGroup,
      job: this.jobFormGroup,
      education:  this.educationFormGroup
    })

  }

  sendData() {
    console.log(this.formGroup.value);
  }

}
