import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[phbDropdownItem]'
})
export class DropdownItemDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.padding = '10px 15px';
    this.el.nativeElement.style.cursor = 'pointer';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#fcfcfc');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
