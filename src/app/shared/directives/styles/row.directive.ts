import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[row]'
})
export class RowDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.display = 'flex';
    this.el.nativeElement.style['justify-content'] = 'space-between';
  }

}
