import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumniCardComponent } from './sections/alumni-card/alumni-card.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlumniCardComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [AlumniCardComponent, MaterialModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
