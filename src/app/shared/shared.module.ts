import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumniCardComponent } from './sections/alumni-card/alumni-card.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollComponent } from './sections/infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [AlumniCardComponent, InfiniteScrollComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [AlumniCardComponent, MaterialModule, FormsModule, ReactiveFormsModule, InfiniteScrollComponent]
})
export class SharedModule {}
