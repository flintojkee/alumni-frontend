import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '@alm/app/auth/services';
import { Alumni, Company } from '@alm/app/shared';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';
import { ProfileService } from '../../services/profile.service';
import { CompanyService } from '@alm/app/core/services/company.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EducationFormComponent } from '@alm/app/shared/sections/education-form/education-form.component';
import { PersonalDataFormComponent } from '@alm/app/shared/sections/personal-data-form/personal-data-form.component';
import { JobFormComponent } from '@alm/app/shared/sections/job-form/job-form.component';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'alm-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  user: Alumni;
  companies: Company[];
  formGroup: FormGroup = new FormGroup({});
  @ViewChild('educationalFormGroup', { static: false, read: EducationFormComponent })
  educationFormComponent: EducationFormComponent;
  @ViewChild('personalDataFormGroup', { static: false, read: PersonalDataFormComponent })
  personalDataFormComponent: PersonalDataFormComponent;
  @ViewChild('jobFormGroup', { static: false, read: JobFormComponent })
  jobFormComponent: JobFormComponent;
  editable = false;
  isLoading = false;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.user$.pipe(untilDestroyed(this)).subscribe((res) => {
      this.user = res as Alumni;
      console.log(res);
    });
  }

  ngOnDestroy() {}

  setPersonalDataFormGroup(event: FormGroup) {
    this.formGroup.setControl('personal', event);
  }

  setEducationFormGroup(event: FormGroup) {
    this.formGroup.setControl('education', event);
  }

  setJobFormGroup(event: FormGroup) {
    this.formGroup.setControl('job', event);
  }

  enableEditable() {
    this.editable = true;
  }
  disableEditable() {
    this.editable = false;
  }

  sendUserForm() {
    const updateAlumni = this.getUpdateForm();

    if (this.formGroup.valid) {
      if (updateAlumni.image_1920 === 'false') {
        delete updateAlumni.image_1920;
      }
      for (const key in updateAlumni) {
        if (updateAlumni.hasOwnProperty(key)) {
          if (updateAlumni[key] === 'false') {
            updateAlumni[key] = null;
          }
        }
      }
      this.isLoading = true;
      this.profileService
        .createUpdateForm(updateAlumni)
        .pipe(
          untilDestroyed(this),
          catchError((err) => {
            alert(err.error.message);
            return EMPTY;
          })
        )
        .subscribe((res) => {
          console.log(res);
          this.isLoading = false;
        });
    } else {
      this.formGroup.markAllAsTouched();
      this.formGroup.markAsDirty();
    }
  }

  getUpdateForm() {
    const dateOfBirth = this.formatDate(this.personalDataFormComponent.dateOfBirth.value);
    return new UpdateAlumni(
      this.personalDataFormComponent.fullName.value,
      dateOfBirth,
      this.user.image_1920.toString().replace('data:image/png;base64,', ''),
      this.personalDataFormComponent.country.value,
      this.personalDataFormComponent.city.value,
      this.personalDataFormComponent.mobile.value,
      this.personalDataFormComponent.skype.value,
      this.personalDataFormComponent.telegram.value,
      this.personalDataFormComponent.viber.value,
      this.personalDataFormComponent.facebook.value,
      this.personalDataFormComponent.linkedIn.value,
      this.educationFormComponent.diplomaNaukma.value,
      this.educationFormComponent.bachelor.value,
      this.educationFormComponent.bachelorFaculty.value,
      this.educationFormComponent.bachelorSpeciality.value,
      this.educationFormComponent.bachelorEntryYear.value,
      this.educationFormComponent.bachelorFinishYear.value,
      this.educationFormComponent.master.value,
      this.educationFormComponent.masterFaculty.value,
      this.educationFormComponent.masterSpeciality.value,
      this.educationFormComponent.masterEntryYear.value,
      this.educationFormComponent.masterFinishYear.value,
      this.jobFormComponent.jobId.value,
      this.jobFormComponent.jobName.value,
      this.jobFormComponent.position.value,
      this.user.alumni_id
    );
  }
  formatDate(date: Date) {
    return date.getFullYear() + '-' + (+date.getMonth() + 1) + '-' + date.getDate();
  }
}
