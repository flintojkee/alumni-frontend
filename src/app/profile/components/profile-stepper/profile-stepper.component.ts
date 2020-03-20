import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Alumni, Company } from '@alm/app/shared';
import { SpecialityList, FacultyList } from '@alm/app/shared/utils/filter-helper';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'alm-profile-stepper',
  templateUrl: './profile-stepper.component.html',
  styleUrls: ['./profile-stepper.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileStepperComponent implements OnInit {
  @Input() user: Alumni;
  @Input() companies: Company[];
  @Output() updatedUser = new EventEmitter<UpdateAlumni>();
  personalFormGroup: FormGroup;
  jobFormGroup: FormGroup;
  educationFormGroup: FormGroup;
  formGroup: FormGroup;
  specialityList = SpecialityList;
  facultyList = FacultyList;
  entryYears = this.getYears(1980, new Date().getFullYear());
  finishYears = this.getYears(new Date().getFullYear(), new Date().getFullYear() + 4);
  filteredCompanies: Observable<Company[]>;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initPersonalFormGroup();
    this.initJobFormGroup();
    this.initEducationFormGroup();
    this.bachelorMasterChange();
    this.educationFormGroup.controls.bachelor.setValue(this.user.bachelor_degree || null);
    this.educationFormGroup.controls.master.setValue(this.user.master_degree || null);
    this.user.image_1920 = 'data:image/jpeg;base64,' + this.user.image_1920;
    this.formGroup = this.formBuilder.group({
      personal: this.personalFormGroup,
      job: this.jobFormGroup,
      education: this.educationFormGroup
    });
    this.filteredCompanies = this.jobFormGroup.controls.jobName.valueChanges.pipe(
      startWith(''),
      map((value: string) => this._filter(value))
    );
  }

  initPersonalFormGroup() {
    this.personalFormGroup = this.formBuilder.group({
      fullName: [this.user.name || null, Validators.required],
      dateOfBirth: [
        this.user.birth_date ? new Date(this.user.birth_date) : null,
        Validators.required
      ],
      country: [this.user.contact_country || null, Validators.required],
      city: [this.user.contact_city || null, Validators.required],
      mobile: [this.user.mobile || null, Validators.required],
      skype: [this.user.skype || null],
      telegram: [this.user.telegram || null],
      viber: [this.user.viber || null],
      facebook: [this.user.facebook_link || null],
      linkedIn: [this.user.linkedin_link || null],
      avatar: []
    });
  }
  get fullName() {
    return this.personalFormGroup.controls.fullName.value;
  }
  get dateOfBirth(): Date {
    return this.personalFormGroup.controls.dateOfBirth.value;
  }
  get country() {
    return this.personalFormGroup.controls.country.value;
  }
  get city() {
    return this.personalFormGroup.controls.city.value;
  }
  get mobile() {
    return this.personalFormGroup.controls.mobile.value;
  }
  get skype() {
    return this.personalFormGroup.controls.skype.value;
  }
  get telegram() {
    return this.personalFormGroup.controls.telegram.value;
  }
  get viber() {
    return this.personalFormGroup.controls.viber.value;
  }
  get facebook() {
    return this.personalFormGroup.controls.facebook.value;
  }
  get linkedIn() {
    return this.personalFormGroup.controls.linkedIn.value;
  }
  get avatar() {
    return this.personalFormGroup.controls.avatar.value;
  }

  initJobFormGroup() {
    this.jobFormGroup = this.formBuilder.group({
      jobName: [null],
      position: [this.user.function || null]
    });
  }
  get jobName() {
    return this.jobFormGroup.controls.jobName.value;
  }
  get position() {
    return this.jobFormGroup.controls.position.value;
  }

  initEducationFormGroup() {
    this.educationFormGroup = this.formBuilder.group({
      diplomaNaukma: [''],
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
  }
  get diplomaNaukma() {
    return this.educationFormGroup.controls.diplomaNaukma.value;
  }
  get bachelor() {
    return this.educationFormGroup.controls.bachelor.value;
  }
  get bachelorFaculty() {
    return this.educationFormGroup.controls.bachelorFaculty.value;
  }
  get bachelorSpeciality() {
    return this.educationFormGroup.controls.bachelorSpeciality.value;
  }
  get bachelorEntryYear() {
    return this.educationFormGroup.controls.bachelorEntryYear.value;
  }
  get bachelorFinishYear() {
    return this.educationFormGroup.controls.bachelorFinishYear.value;
  }
  get master() {
    return this.educationFormGroup.controls.master.value;
  }
  get masterFaculty() {
    return this.educationFormGroup.controls.masterFaculty.value;
  }
  get masterSpeciality() {
    return this.educationFormGroup.controls.masterSpeciality.value;
  }
  get masterEntryYear() {
    return this.educationFormGroup.controls.masterEntryYear.value;
  }
  get masterFinishYear() {
    return this.educationFormGroup.controls.masterFinishYear.value;
  }

  bachelorMasterChange() {
    this.educationFormGroup.controls.bachelor.valueChanges.subscribe((r) => {
      console.log(r)
      if (r) {
        this.educationFormGroup.controls.bachelorFaculty.setValidators(Validators.required);
        this.educationFormGroup.controls.bachelorSpeciality.setValidators(Validators.required);
        this.educationFormGroup.controls.bachelorEntryYear.setValidators(Validators.required);
        this.educationFormGroup.controls.bachelorFaculty.updateValueAndValidity();
        this.educationFormGroup.controls.bachelorSpeciality.updateValueAndValidity();
        this.educationFormGroup.controls.bachelorEntryYear.updateValueAndValidity();
        this.educationFormGroup.updateValueAndValidity();
      } else {
        this.educationFormGroup.controls.bachelorFaculty.clearValidators();
        this.educationFormGroup.controls.bachelorSpeciality.clearValidators();
        this.educationFormGroup.controls.bachelorEntryYear.clearValidators();
        this.educationFormGroup.controls.bachelorFaculty.updateValueAndValidity();
        this.educationFormGroup.controls.bachelorSpeciality.updateValueAndValidity();
        this.educationFormGroup.controls.bachelorEntryYear.updateValueAndValidity();
        this.educationFormGroup.updateValueAndValidity();
      }
    });
    this.educationFormGroup.controls.master.valueChanges.subscribe((r) => {
      if (r) {
        this.educationFormGroup.controls.masterFaculty.setValidators(Validators.required);
        this.educationFormGroup.controls.masterSpeciality.setValidators(Validators.required);
        this.educationFormGroup.controls.masterEntryYear.setValidators(Validators.required);
        this.educationFormGroup.controls.masterFaculty.updateValueAndValidity();
        this.educationFormGroup.controls.masterSpeciality.updateValueAndValidity();
        this.educationFormGroup.controls.masterEntryYear.updateValueAndValidity();
        this.educationFormGroup.updateValueAndValidity();
      } else {
        this.educationFormGroup.controls.masterFaculty.clearValidators();
        this.educationFormGroup.controls.masterSpeciality.clearValidators();
        this.educationFormGroup.controls.masterEntryYear.clearValidators();
        this.educationFormGroup.controls.masterFaculty.updateValueAndValidity();
        this.educationFormGroup.controls.masterSpeciality.updateValueAndValidity();
        this.educationFormGroup.controls.masterEntryYear.updateValueAndValidity();
        this.educationFormGroup.updateValueAndValidity();
      }
    });
  }

  changeAvatar(files: FileList) {
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
    const dateOfBirth = this.formatDate(this.dateOfBirth);
    this.updatedUser.next(
      new UpdateAlumni(
        this.fullName,
        dateOfBirth,
        this.user.image_1920.toString().replace('data:image/jpeg;base64,', ''),
        this.country,
        this.city,
        this.mobile,
        this.skype,
        this.telegram,
        this.viber,
        this.facebook,
        this.linkedIn,
        this.bachelor,
        this.bachelorFaculty,
        this.bachelorSpeciality,
        this.bachelorEntryYear,
        this.bachelorFinishYear,
        this.master,
        this.masterFaculty,
        this.masterSpeciality,
        this.masterEntryYear,
        this.masterFinishYear,
        this.jobName,
        this.position,
        this.user.alumni_id,
        this.user.email
      )
    );
  }
  getYears(start?: number, end?: number) {
    const y = [];
    for (let index = start; index < end; index++) {
      y.push(`${index}`);
    }
    return y;
  }
  private _filter(value: string): Company[] {
    const filterValue = value.toLowerCase();
    return this.companies.filter(
      (company) => company.name.toLowerCase().indexOf(filterValue) === 0
    );
  }
  formatDate(date: Date) {
    return date.getFullYear() + '-' + (+date.getMonth() + 1) + '-' + date.getDate();
  }
}
