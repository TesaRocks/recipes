import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPink]',
})
export class PinkDirective {
  @HostBinding('style.backgroundColor') bc: string = 'blue';
  @HostListener('mouseover') changeC() {
    this.bc = 'pink';
  }
  @HostListener('mouseleave') ch(){
    this.bc = 'transparent'
  }
  constructor() {}
}
