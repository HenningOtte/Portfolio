import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
})
export class FadeIn {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.background = 'yellow';
  }
}
