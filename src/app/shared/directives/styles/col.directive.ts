import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[col]'
})
export class ColDirective implements OnInit{
  @Input() col = 12;
  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    this.el.nativeElement.style.width = Math.ceil(8.3 * this.col) + '%';
  }


}
