import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropZoneDirective } from './drop-zone.directive';
import { DropdownItemDirective } from './dropdown-item.directive';

@NgModule({
  declarations: [DropZoneDirective, DropdownItemDirective],
  exports: [DropZoneDirective, DropdownItemDirective],
  imports: [CommonModule]
})
export class DirectivesModule {}
