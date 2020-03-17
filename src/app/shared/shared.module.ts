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

@NgModule({
  declarations: [
    AlumniCardComponent,
    InfiniteScrollComponent,
    FormAlumniFilterComponent,
    FilterAlumniComponent,
    SafeHtmlPipe
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
    SafeHtmlPipe
  ]
})
export class SharedModule {}
