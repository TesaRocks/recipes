import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPink]',
})
export class PinkDirective {
  @HostBinding('style.backgroundColor') bc: string = 'orange';
  @HostListener('mouseover') changeC(): void {
    this.bc = 'pink';
  }
  @HostListener('mouseleave') ch(): void {
    this.bc = 'transparent';
  }
  constructor() {}
}
