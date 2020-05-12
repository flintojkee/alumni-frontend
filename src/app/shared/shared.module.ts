import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumniCardComponent } from './sections/alumni-card/alumni-card.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollComponent } from './sections/infinite-scroll/infinite-scroll.component';
import { RouterModule } from '@angular/router';
import { FormAlumniFilterComponent } from './sections/form-alumni-filter/form-alumni-filter.component';
import { FilterAlumniComponent } from './sections/filter-alumni/filter-alumni.component';
import { DirectivesModule } from './directives';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { UdpateProfileCardComponent } from './sections/udpate-profile-card/udpate-profile-card.component';
import { ProfileStepperComponent } from './sections/profile-stepper/profile-stepper.component';
import { EducationFormComponent } from './sections/education-form/education-form.component';
import { PersonalDataFormComponent } from './sections/personal-data-form/personal-data-form.component';
import { JobFormComponent } from './sections/job-form/job-form.component';

@NgModule({
  declarations: [
    AlumniCardComponent,
    InfiniteScrollComponent,
    FormAlumniFilterComponent,
    FilterAlumniComponent,
    SafeHtmlPipe,
    UdpateProfileCardComponent,
    ProfileStepperComponent,
    EducationFormComponent,
    PersonalDataFormComponent,
    JobFormComponent
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule, DirectivesModule],
  exports: [
    AlumniCardComponent,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollComponent,
    FormAlumniFilterComponent,
    FilterAlumniComponent,
    DirectivesModule,
    SafeHtmlPipe,
    UdpateProfileCardComponent,
    ProfileStepperComponent,
    EducationFormComponent,
    PersonalDataFormComponent,
    JobFormComponent
  ]
})
export class SharedModule {}
