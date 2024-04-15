import { Directive, HostBinding, HostListener, Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appProductsdirective]',
  standalone: true
})
export class ProductsdirectiveDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'light';
  }
  @Input() bgColor: string = 'transparent';

  @HostBinding('style.border-radius') borderRadius: string = '8px';
  @HostBinding('style.box-shadow') boxShadow: string = '0 4px 6px rgba(0, 0, 0, 0.1)';

  @HostListener('mouseenter') onMouseEnter() {
    this.boxShadow = '0 15px 20px rgba(0.5, 0.5, 0.5, 0.5)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }
}
