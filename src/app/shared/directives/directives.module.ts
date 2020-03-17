import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropZoneDirective } from './drop-zone.directive';
import { DropdownItemDirective } from './dropdown-item.directive';
import { RowDirective } from './styles/row.directive';
import { ColDirective } from './styles/col.directive';

@NgModule({
  declarations: [DropZoneDirective, DropdownItemDirective, RowDirective, ColDirective],
  exports: [DropZoneDirective, DropdownItemDirective, RowDirective, ColDirective],
  imports: [CommonModule]
})
export class DirectivesModule {}
