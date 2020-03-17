import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumni } from '@alm/app/shared';
import { DomSanitizer } from '@angular/platform-browser';
import { SpecialityList, FacultyList } from '@alm/app/shared/utils/filter-helper';

@Component({
  selector: 'alm-profile-stepper',
  templateUrl: './profile-stepper.component.html',
  styleUrls: ['./profile-stepper.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileStepperComponent implements OnInit {
  @Input() user: Alumni;
  personalFormGroup: FormGroup;
  socialFormGroup: FormGroup;
  jobFormGroup: FormGroup;
  educationFormGroup: FormGroup;
  formGroup: FormGroup;
  avatar: string;
  specialityList = SpecialityList;
  facultyList = FacultyList;
  entryYears = this.getYears(1980, new Date().getFullYear());
  finishYears = this.getYears(new Date().getFullYear(), new Date().getFullYear() + 4);
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initPersonalFormGroup();
    this.initSocialFormGroup();
    this.initJobFormGroup();
    this.initEducationFormGroup();
    this.user.image_1920 = 'data:image/png;base64,' + this.user.image_1920;
    this.formGroup = this.formBuilder.group({
      personal: this.personalFormGroup,
      social: this.socialFormGroup,
      job: this.jobFormGroup,
      education: this.educationFormGroup
    });
    this.formGroup.valueChanges.subscribe((r) => {
      console.log(r);
    });
  }

  initPersonalFormGroup() {
    this.personalFormGroup = this.formBuilder.group({
      fullName: [this.user.name || '', Validators.required],
      dateOfBirth: ['', Validators.required],
      country: ['', Validators.required],
      city: ['', Validators.required],
      mobile: ['', Validators.required],
      skype: [''],
      telegram: [''],
      viber: [''],
      facebook: [this.user.facebook_link || ''],
      linkedIn: [this.user.linkedin_link || ''],
      avatar: ['']
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

  changeAvatar(files: FileList) {
    console.log(files);
    const f = [];
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      f.push(element);
    }
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      img.onload = () => {
        const maxW = 400;
        const maxH = 400;
        const iw = img.width;
        const ih = img.height;
        const scale = Math.min(maxW / iw, maxH / ih);
        const iwScaled = iw * scale;
        const ihScaled = ih * scale;
        canvas.width = iwScaled;
        canvas.height = ihScaled;
        ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
        this.user.image_1920 = canvas.toDataURL('image/jpeg', 1);
      };
      img.src = e.target['result'] as string;
    };
    reader.readAsDataURL(f[0]);
  }

  sendData() {
    console.log(this.formGroup.value);
  }
  getYears(start?: number, end?: number) {
    const y = [];
    for (let index = start; index < end; index++) {
      y.push(`${index}`);
    }
    return y;
  }
}
