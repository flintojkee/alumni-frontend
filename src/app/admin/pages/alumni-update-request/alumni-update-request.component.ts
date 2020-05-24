import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateAlumni } from '@alm/app/shared/models/update-alumni.model';
import { UpdateRequestsService } from '../../services/update-requests.service';
import { switchMap, map } from 'rxjs/operators';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EducationFormComponent } from '@alm/app/shared/sections/education-form/education-form.component';
import { PersonalDataFormComponent } from '@alm/app/shared/sections/personal-data-form/personal-data-form.component';
import { JobFormComponent } from '@alm/app/shared/sections/job-form/job-form.component';
import { AdminService } from '../../services/admin.service';
import { Operator } from '@alm/app/shared/models/operator.model';
import { AuthService } from '@alm/app/auth/services';
import { Location } from '@angular/common';
@Component({
  templateUrl: './alumni-update-request.component.html',
  styleUrls: ['./alumni-update-request.component.scss']
})
export class AlumniUpdateRequestComponent implements OnInit, OnDestroy {
  updateAlumni: UpdateAlumni;
  user: Operator;
  formGroup: FormGroup = new FormGroup({});
  @ViewChild('educationFormComponent', { static: false, read: EducationFormComponent })
  educationFormComponent: EducationFormComponent;
  @ViewChild('personalDataFormComponent', { static: false, read: PersonalDataFormComponent })
  personalDataFormComponent: PersonalDataFormComponent;
  @ViewChild('jobFormComponent', { static: false, read: JobFormComponent })
  jobFormComponent: JobFormComponent;
  formId: number;
  constructor(
    private updateRequestsService: UpdateRequestsService,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private authService: AuthService,
    private location: Location
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params) => {
          this.formId = +params['id'];
          return this.updateRequestsService.updateRequests.pipe(
            map((requests: UpdateAlumni[]) => {
              return requests.find((r) => r.form_id === +params['id']);
            })
          );
        }),
        untilDestroyed(this)
      )
      .subscribe((res: UpdateAlumni) => {
        if (!res) {
          this.router.navigate(['admin', 'alumni-update-requests']);
        }
        this.updateAlumni = res;
        console.log(this.updateAlumni);
      });
    this.authService.user$.pipe(untilDestroyed(this)).subscribe((res: Operator) => {
      this.user = res;
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

  get personalFormGroupControls() {
    return this.formGroup.controls.personal['controls'];
  }
  get educationFormGroupControls() {
    return this.formGroup.controls.education['controls'];
  }
  get jobFormGroupControls() {
    return this.formGroup.controls.job['controls'];
  }

  confirmForm() {
    if (this.formGroup.valid) {
      this.adminService
        .confirmUpdateForm({
          form_id: this.updateAlumni.form_id,
          operator_id: this.user.operator_id
        })
        .pipe(untilDestroyed(this))
        .subscribe((res) => {
          console.log(res);
          this.router.navigate(['admin', 'alumni-update-requests']);
        });
    } else {
      this.formGroup.markAllAsTouched();
      this.formGroup.markAsDirty();
    }
  }

  saveForm() {
    // console.log(this.formGroup);
    const dateOfBirth = this.formatDate(this.personalFormGroupControls.dateOfBirth.value);
    const updateAlumni = new UpdateAlumni(
      this.personalFormGroupControls.fullName.value,
      dateOfBirth,
      this.updateAlumni.image_1920.toString().replace('data:image/png;base64,', ''),
      this.personalFormGroupControls.country.value,
      this.personalFormGroupControls.city.value,
      this.personalFormGroupControls.mobile.value,
      this.personalFormGroupControls.skype.value,
      this.personalFormGroupControls.telegram.value,
      this.personalFormGroupControls.viber.value,
      this.personalFormGroupControls.facebook.value,
      this.personalFormGroupControls.linkedIn.value,
      this.educationFormGroupControls.diplomaNaukma.value,
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
      this.updateAlumni.alumni_id
    );

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
      this.adminService
        .saveUpdateForm({
          ...updateAlumni,
          operator_id: this.user.operator_id,
          form_id: this.formId
        })
        .pipe(untilDestroyed(this))
        .subscribe((res) => {
          console.log(res);
        });
    } else {
      this.formGroup.markAllAsTouched();
      this.formGroup.markAsDirty();
    }
  }

  formatDate(date: Date) {
    return date.getFullYear() + '-' + (+date.getMonth() + 1) + '-' + date.getDate();
  }

  goBack() {
    this.location.back();
  }
}
