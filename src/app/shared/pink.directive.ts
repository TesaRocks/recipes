import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPink]',
})
export class PinkDirective {
  @HostBinding('style.backgroundColor') bc: string = 'red';
  @HostListener('mouseover') changeC(): void {
    this.bc = 'pink';
  }
  @HostListener('mouseleave') ch(): void {
    this.bc = 'lightblue';
  }
  constructor() {}
}
